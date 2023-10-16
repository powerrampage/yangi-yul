import { useState } from "react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { RightOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Col, Input, InputNumber, Radio, Row } from "antd";

import classes from "./Step1.module.scss";
import { LabelAndError, PhoneInput } from "@/components";

const FormSection = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [type, settype] = useState<"phys" | "jur">("phys");

  const { handleSubmit, formState, control } = useForm<any>({ defaultValues: {} });
  const { errors } = formState;

  const onSubmit = (values: any) => {
    console.log(values);
    if (Math.random() > 0.5) {
      router.push(`/getting-with-faceId/payment/physic`);
    } else {
      router.push(`/getting-with-faceId/confirm`);
    }
  };

  return (
    <>
      {/* @ts-ignore */}
      <div className="size-24 bold text-center mb-10">{t("Kim ekanliginingizni belgilang")}:</div>
      <div className="text-center mb-20">
        <Radio.Group value={type} onChange={(v) => settype(v.target.value)}>
          <Radio value={"jur"}>{t("Yuridik shaxs")}</Radio>
          <Radio value={"phys"}>{t("Jismoniy shaxs")}</Radio>
        </Radio.Group>
      </div>

      <div className={classes.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[20, 20]} align="middle" justify="space-between">
            {type === "jur" && (
              <Col xs={12}>
                <div className="mb-5 size-14">{t("Sizning STIR yoki JShShIR")}</div>
                <LabelAndError error={errors?.jurTin}>
                  <Controller
                    name="jurTin"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input maxLength={14} {...field} size="large" />}
                  />
                </LabelAndError>
              </Col>
            )}
            <Col xs={type === "phys" ? 8 : 12}>
              <div className="mb-5 size-14">{type === "phys" ? t("Sizning STIR yoki JShShIR") : t("Yuridik shaxs rahbari STIR yoki JShShIR")}</div>
              <LabelAndError error={errors?.tinOrPinfl}>
                <Controller
                  name="tinOrPinfl"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Input {...field} size="large" />}
                />
              </LabelAndError>
            </Col>
            <Col xs={type === "phys" ? 6 : 12}>
              <div className="mb-5 size-14">{t("Mobil telefon raqami")}</div>
              <LabelAndError error={errors?.phone}>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <PhoneInput otherProps={field} large />}
                />
              </LabelAndError>
            </Col>
            <Col xs={type === "phys" ? 10 : 12}>
              <div className="mb-5 size-14">{t("Rasmdagi kodni kiriting")}</div>
              <LabelAndError error={errors?.code}>
                <Row gutter={15}>
                  <Col xs={8}>
                    <div className={classes.random_numbers}></div>
                  </Col>
                  <Col xs={11}>
                    <Controller
                      name="code"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <InputNumber size="large" {...field} className="w100" />}
                    />
                  </Col>
                  <Col xs={5}>
                    <Button block icon={<SyncOutlined />} size="large" className="w100" />
                  </Col>
                </Row>
              </LabelAndError>
            </Col>
          </Row>
          <div className="mt-30 text-center">
            <Button type="primary" size="large" shape="round" htmlType="submit">
              {t("Keyingi qadam")}
              <RightOutlined />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSection;
