import Head from "next/head";
import { Col, Row } from "antd";
import useTranslation from "next-translate/useTranslation";

import { BackButton, Container, Head as HeadComp } from "@/components";
import LogoIcon from "@/assets/svg/logo.svg";
import classes from "./Login.module.scss";
import FormSection from "./FormSection";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("Shaxsiy kabinetga kirish")}</title>
      </Head>
      <HeadComp>
        <div className="size-32 bold">{t("SHAXSIY KABINETGA KIRISH")}</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>
      <div className="pt-40 pb-60">
        <Container>
          <div className={classes.login_container}>
            <div className={classes.login_box}>
              <Row align="middle">
                <Col xs={2} />
                <Col xs={6}>
                  <div className={classes.icon}>
                    <LogoIcon />
                  </div>
                </Col>
                <Col xs={16}>
                  <div className="size-24 semibold lh12 color mb-10">{t("KABINETGA KIRISH")}</div>
                  <div className="light size-14">{t("Агар сизнинг браузерингизда хатолик юз берса Е-IMZO нинг янги версиясини ўрнатинг.")}</div>
                </Col>
              </Row>

              <FormSection />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
