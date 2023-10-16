import Head from "next/head";
import { useState } from "react";
import { Alert, Button, Col, Row } from "antd";
import useTranslation from "next-translate/useTranslation";
import { CheckCircleOutlined, ExclamationCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";

import { BackButton, Container, Head as HeadComp } from "@/components";
import classes from "../Step2/Style.module.scss";
import ShowStateModal from "@/pageComponents/modals/ShowStateModal";

const Finish = () => {
  const { t }: any = useTranslation();

  const [openModal, setopenModal] = useState(false);
  const showModal = () => setopenModal(true);
  const closeModal = () => setopenModal(false);

  const appNumber = 1074847;

  return (
    <>
      <Head>
        <title>{t("ELEKTRON KALIT ONLAYN ARIZASI")}</title>
        <meta name="description" content={t("ELEKTRON KALIT ONLAYN ARIZASI")} />
      </Head>

      <HeadComp>
        <div className="size-32 bold">{t("ELEKTRON KALIT ONLAYN ARIZASI")}</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>

      <div className="pt-40 pb-60">
        <Container>
          <Alert
            type="success"
            message={
              <div className="pl-10 pr-10 pt-10 pb-10">
                <Row gutter={[20, 20]} align="middle" justify="space-between">
                  <Col className="size-20 semibold">
                    <span className="green size-32">
                      <CheckCircleOutlined />
                    </span>
                    &nbsp;{t("Arizangiz qabul qilindi")}
                  </Col>
                  <Col className="size-20">
                    {t("Ariza raqami")}:&nbsp;<span className="color bold size-32">{appNumber}</span>
                  </Col>
                </Row>
              </div>
            }
          />

          <div className="mt-80">
            <div className={classes.info + " size-17"}>
              <div className={classes.icon}>
                <ExclamationCircleOutlined />
              </div>
              <div className="light">
                {t("Sizga ariza raqami ko'rsatilgan SMS xabar yuborildi, ariza raqami orqali uning holatini kuzatishingiz mumkin")}.
              </div>
              <div className="light mt-10">
                {t("ERI kalitining sertifikatini berish to'g'risidagi arizangiz va undagi ma'lumotlar, Davlat xizmatlari markazi tomonidan bir ish kuni ichida ko'rib chiqiladi")}.
              </div>
            </div>
          </div>
          <div className="mt-30 text-center">
            <Button type="primary" shape="round" size="large" icon={<InfoCircleOutlined />} onClick={showModal}>{t("Ариза ҳолати")}</Button>
          </div>

          {openModal && <ShowStateModal open close={closeModal} appNumber={appNumber} />}
        </Container>
      </div>
    </>
  );
};

export default Finish;
