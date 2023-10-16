import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QuestionOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Input, Row, Select } from "antd";
import useTranslation from "next-translate/useTranslation";

import classes from "./Style.module.scss";
import { LabelAndError } from "@/components";
import { getAllPfxsDisks } from "@/services/eimzo";

const FormSection = () => {
  const { t }: any = useTranslation();
  const router = useRouter();
  const [disks, setdisks] = useState([]);

  const { handleSubmit, control, formState } = useForm<any>({ defaultValues: {} });
  const { errors } = formState;

  useEffect(() => {
    getAllPfxsDisks()
      .then((res: any) => {
        if (res?.success) {
          setdisks(res?.disks);
        } else {
          console.log(res);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (values: any) => {
    console.log(values);

    router.push(`/getting-with-faceId/qr-code`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.box}>
        <Row gutter={[30, 30]}>
          <Col xs={12} md={6}>
            <LabelAndError label={t("Diskni tanlang")} error={errors?.disk}>
              <Controller
                name="disk"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select size="large" options={disks?.map((el: any) => ({ label: el, value: el }))} {...field} className="w100" />
                )}
              />
            </LabelAndError>
          </Col>
          <Col xs={12} md={6}>
            <LabelAndError label={t("pfx faylni nomi")} error={errors?.fileName}>
              <Controller
                name="fileName"
                control={control}
                // rules={{ required: true }}
                render={({ field }) => <Input size="large" readOnly {...field} />}
              />
            </LabelAndError>
          </Col>
          <Col xs={12} md={6}>
            <LabelAndError label={t("Parol")} error={errors?.password}>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input size="large" type="password" {...field} />}
              />
            </LabelAndError>
          </Col>
          <Col xs={12} md={6}>
            <LabelAndError label={t("Parolni takrorlash")} error={errors?.password2}>
              <Controller
                name="password2"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input size="large" type="password" {...field} />}
              />
            </LabelAndError>
          </Col>
        </Row>
      </div>
      <div className="mt-80">
        <div className={classes.info}>
          <div className={classes.icon}>
            <QuestionOutlined />
          </div>
          <div className="light">
            {t(
              "Аgarda siz elektron imzoni masofadan turib olayotgan boʼlsangiz, selfi fotosuratingizni qoʼlingizda pasportni ushlagan holda (rasmda koʼrsatilgandek) biriktirib yuborishingiz lozim. Biriktirilgan fotosurat nusxasida Sizning yuz qiyofangiz “anfas” shaklda va tiniq koʼringan hamda pasportning asosiy sahifasi barcha simvollari oʼqib boʼladigan sifatda boʼlishi shart. Fayl xajmi 5 MB dan oshmasin."
            )}
          </div>
          <div className="light mt-10 mb-10">
            {t("Ushbu holatda bizning tizim orqali elektron raqamli imzo yopiq kaliti yaratiladi va uning sertifikati roʼyxatdan oʼtkaziladi.")}
          </div>
          <div className="light">
            {t('Buning uchun kerakli satrlarni toʼldirib, "Yaratish va davom etish" tugmasini bosing.')}&nbsp;
            <span className="semibold">{t("Toʼldirilgan kataklardagi parolni unutmang, uni va tiklab boʼlmaydi.")}</span>
          </div>
        </div>
      </div>

      <div className="mt-30 text-center">
        <Button type="primary" size="large" shape="round" htmlType="submit">
          {t("*.pfx faylni yaratish va davom etish")}
        </Button>
      </div>
    </form>
  );
};

export default FormSection;
