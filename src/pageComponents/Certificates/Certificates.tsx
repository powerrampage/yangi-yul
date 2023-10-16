import Head from "next/head";
import { useState } from "react";
import { Button, Col, Input, Row } from "antd";
import useTranslation from "next-translate/useTranslation";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";

import { BackButton, Card, Container, FormatNumber, Head as HeadComp } from "@/components";
import classes from "./Style.module.scss";
import TableSection from "./TableSection";

const Certificates = () => {
  const { t } = useTranslation();
  const [tinOrPinfl, settinOrPinfl] = useState("");
  const [code, setcode] = useState("");

  return (
    <>
      <Head>
        <title>{t("Sertifikatlar reestri")}</title>
        <meta name="description" content={t("Sertifikatlar reestri")} />
      </Head>

      <HeadComp>
        <div className="size-32 bold">{t("SERTIFIKATLAR REESTRI")}</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>

      <div className="pt-40 pb-60">
        <Container>
          <Row gutter={[20, 20]}>
            <Col xs={24} md={18} xl={19}>
              <Card className="py-20 px-30">
                <Row gutter={[25, 10]}>
                  <Col xs={24} sm={7}>
                    <div className="size-18 mb-10">{t("STIR/JSHSHIR")}</div>
                    <Input maxLength={14} value={tinOrPinfl} onChange={(e) => settinOrPinfl(e.target.value)} />
                  </Col>
                  <Col xs={24} sm={11} xl={12}>
                    <div className="size-18 mb-10">{t("Rasmdagi kodni kiriting")}</div>
                    <Row gutter={10}>
                      <Col xs={9}>
                        <div className={classes.code_box}></div>
                      </Col>
                      <Col xs={4}>
                        <Button block icon={<SyncOutlined />} />
                      </Col>
                      <Col xs={11}>
                        <Input value={code} onChange={(e) => setcode(e.target.value)} />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={6} xl={5}>
                    <div className="size-18 mb-10">&nbsp;</div>

                    <Button icon={<SearchOutlined />} type="primary" disabled={!tinOrPinfl || !code} block>
                      {t("Qidirish")}
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} md={6} xl={5}>
              <Card className="h100">
                <div className="size-18 mb-5">{t("Баланс")}:</div>
                <div className="size-24 semibold color">
                  <FormatNumber num={2837600} /> <span className="size-18 light">{t("so'm")}</span>
                </div>
              </Card>
            </Col>
          </Row>

          <TableSection />
        </Container>
      </div>
    </>
  );
};

export default Certificates;
