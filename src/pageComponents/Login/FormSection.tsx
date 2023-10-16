import dayjs from "dayjs";
import { get } from "lodash";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useTranslation from "next-translate/useTranslation";
import { Button, Col, Row, Select, notification } from "antd";
import { LoginOutlined, SyncOutlined } from "@ant-design/icons";

import { YTKS_KEY } from "@/types/keys";
import QueryHook from "@/utils/queryHook";
import classes from "./Login.module.scss";
import { LabelAndError } from "@/components";
import { requestNotAuth } from "@/services/api";
import { DATE_FORMAT } from "@/utils/constants";
import { setLocalStorageValue } from "@/utils/localStorageUtil";
import { createPkcs7, getAllYtksCertificates, loadYtksKey } from "@/services/eimzo";
import useGetEImzoServerChallengeMutation from "@/hooks/mutation/useGetEImzoServerChallengeMutation";

const FormSection = () => {
	const { t } = useTranslation();
	const { QueryParams }: any = QueryHook();
	const { fakeChallenge } = QueryParams;
	const [keys, setkeys] = useState<YTKS_KEY[]>([]);
	const [selected, setselected] = useState<string | undefined>(undefined);
	const [loading, setloading] = useState<boolean>(false);

	const loginMutation = useMutation((body: { pkcs7: string }) => requestNotAuth.post(`/rams/auth/user/login`, body));

	const getChallengeMutation = useGetEImzoServerChallengeMutation();

	const getKeyList = () => {
		getAllYtksCertificates().then((res) => {
			if (res?.success) {
				setkeys(res?.certificates);
			}
		});
	};

	useEffect(() => {
			getKeyList();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const signFunc = (keyId: string, challenge: string) => {
		createPkcs7(keyId, challenge)
			.then((res) => {
				if (res?.success) {
					loginMutation.mutate(
						{ pkcs7: res?.pkcs7_64 },
						{
							onSuccess: (res: any) => {
								if (res?.status === 200 && res?.data?.success) {
									const token = get(res, "data.body.access.token", "");
									const refresh_token = get(res, "data.body.refresh.token", "");
									setLocalStorageValue("tokenResponse", JSON.stringify(get(res, "data.body", {})));
									setLocalStorageValue("token", token);
									setLocalStorageValue("refresh_token", refresh_token);
									setLocalStorageValue("dsKeyId", keyId);
									window.location.href = "/";
								} else {
									notification.warning({ message: t("Киришда хатолик бўлди") });
								}
								setloading(false);
							},
							onError: (err: any) => {
								setloading(false);
								notification.error({ message: err?.message || t("Киришда хатолик бўлди") });
							}
						}
					);
				} else {
					notification.warning({ message: t("Имзолашда хатолик бўлди") });
					setloading(false);
				}
			})
			.catch((err) => {
				notification.error({ message: err || t("Имзолашда хатолик бўлди") });
				setloading(false);
			});
	};

	const loginForFile = () => {
		setloading(true);

		const dsKey = keys?.find(({ serialNumber }) => serialNumber === selected);
		const loadOrGetKeyIdAndSign = (challenge: string) => {
			const lsKeyId = localStorage.getItem("dsKeyId");
			if (!!lsKeyId) {
				signFunc(lsKeyId, challenge);
			} else {
				loadYtksKey(dsKey)
					.then((keyId) => {
						signFunc(keyId, challenge);
					})
					.catch((err) => {
						setloading(false);
						notification.error({ message: err || t("load key error") });
					});
			}
		};

		if (!!fakeChallenge) {
			// for local
			loadOrGetKeyIdAndSign(fakeChallenge);
		} else {
			getChallengeMutation.mutate(
				{},
				{
					onSuccess: (res: any) => {
						if (res?.status === 200 && res?.data?.status === 1) {
							const challenge = res?.data?.challenge;
							loadOrGetKeyIdAndSign(challenge);
						} else {
							setloading(false);
							notification.warning({ message: t("e-imzo server get challange error") + ". " + res?.data?.status + " - " + res?.data?.message });
						}
					},
					onError: (err: any) => {
						setloading(false);
						notification.error({ message: err?.message || t("e-imzo server get challange error") });
					}
				}
			);
		}
	};

	const login = () => {
		if (selected) {
				loginForFile();
		} else {
			// setLocalStorageValue("token", "faketoken");
			// window.location.href = "/";
		}
	};

	const keyOptions = keys?.map((item) => {
		const fio = item?.subjectName?.split(",")?.[0]?.split("CN=")?.[1];
		const from = item?.validFrom;
		const to = item?.validTo;

		return {
			label: (
				<div className="size-14" style={{ fontWeight: 400 }}>
					<div>
						<span className="bold">{t("Серия рақами")}:</span> {item.serialNumber}
					</div>
					<div>
						<span className="bold">{t("Ф.И.Ш.")}:</span> {fio}
					</div>
					<div>
						<span className="bold">{t("Амал қилиш муддати")}:</span>{" "}
						<i>
							{dayjs(from).format(DATE_FORMAT)} - {dayjs(to).format(DATE_FORMAT)}
						</i>
					</div>
				</div>
			),
			value: item.serialNumber
		};
	});

	return (
		<>
			{/* <div className="semibold text-center mt-30">
				<Radio.Group value={type} onChange={(e) => settype(e.target.value)}>
					<Radio value={"file"} className={type === "file" ? "color" : "light"}>
						{t("Файл")}
					</Radio>
					<Radio value={"token"} className={type === "token" ? "color" : "light"}>
						{t("USB-Калит")}
					</Radio>
				</Radio.Group>
			</div> */}

			<Row gutter={15} className="mt-30">
				<Col xs={20}>
					<LabelAndError label={t("Сертификатни танланг")}>
						<Select
							size="large"
							className={"w100 " + classes.custom_select}
							/* @ts-ignore */
							options={keyOptions}
							value={selected}
							showArrow
							onChange={(v) => setselected(v)}
						/>
					</LabelAndError>
				</Col>
				<Col xs={4}>
					<Button size="large" onClick={getKeyList} block>
						<SyncOutlined />
					</Button>
				</Col>
			</Row>

			<Button type="primary" size="large" icon={<LoginOutlined />} block className="mt-30" onClick={login} loading={loading} disabled={!selected}>
				{t("Кириш")}
			</Button>
		</>
	);
};

export default FormSection;
