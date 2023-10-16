import Head from "next/head";
import { Alert, Col, Row } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";

import { BackButton, Container, Head as HeadComp } from "@/components";
import AcceptSection from "./AcceptSection";
import InfoSection from "./InfoSection";

const State = () => {
  const { t } = useTranslation();

  const appNumber = 1074847;
  const showAccept = false;

  return (
    <>
      <Head>
        <title>{t("Аriza holati / tasdiqlash")}</title>
        <meta name="description" content={t("Аriza holati / tasdiqlash")} />
      </Head>

      <HeadComp>
        <div className="size-32 bold">{t("ARIZA HOLATI / TASDIQLASH")}</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>

      <div className="pt-40 pb-60">
        <Container>
          
          <div className="mx-auto max-width-900">
            <Alert
              type="success"
              message={
                <div className="pl-10 pr-10 pt-10 pb-10">
                  <Row gutter={[20, 20]} align="middle" justify="space-between">
                    <Col className="size-20 semibold">
                      <span className="green size-32">
                        <CheckCircleOutlined />
                      </span>
                      &nbsp;{t("Ariza topildi")}
                    </Col>
                    <Col className="size-20">
                      {t("Ariza raqami")}:&nbsp;<span className="color bold size-32">{appNumber}</span>
                    </Col>
                  </Row>
                </div>
              }
            />

            <div className="mt-30">
              {showAccept ? (
                <AcceptSection />
              ) : (
                <InfoSection
                  data={{ appNumber, fish: "Ro'ziyev Jo'rabek Yarashboyevich", date: "12-09-2023", state: "Kalit e-imzo.uz dana yaratib olingan" }}
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default State;
