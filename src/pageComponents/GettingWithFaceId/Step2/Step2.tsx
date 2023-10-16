import Head from "next/head";
import Image from "next/image";
import { Col, Row, Tag } from "antd";
import useTranslation from "next-translate/useTranslation";

import { BackButton, Container, Head as HeadComp } from "@/components";
import FormSection from "./FormSection";

const Step2 = () => {
  const { t }: any = useTranslation();

  return (
    <>
      <Head>
        <title>{t("ELEKTRON KALIT ONLAYN ARIZASI")}  ({t("FACE ID orqali olish")})</title>
        <meta name="description" content={t("ELEKTRON KALIT ONLAYN ARIZASI")} />
      </Head>

      <HeadComp>
        <div className="size-32 bold">{t("ELEKTRON KALIT ONLAYN ARIZASI")}  ({t("FACE ID orqali olish")})</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>

      <div className="pt-40 pb-60">
        <Container>
          <Row gutter={[20, 20]} align="middle">
            <Col xs={5}>
              <Image src="/img/passport.jpg" alt="passport" width={100} height={100} className="w100" style={{ height: "auto" }} />
            </Col>
            <Col xs={13} className="text-center">
              <div className="size-24 semibold">{"RO‘ZIBOYEV JO‘RABEK YARASHBOYEVICH"}</div>
              <Tag color="green" className="size-18 mt-10 mb-10 br pl-10 pr-10">
                {t("Jismoniy shaxs")}
              </Tag>
              {/* @ts-ignore */}
              <div className="size-20">{t("STIR")} 509477367</div>
            </Col>
            <Col xs={6}>
              <Image src="/img/selfie.jpg" alt="selfie" width={100} height={100} className="w100" style={{ height: "auto" }} />
            </Col>
          </Row>

          <div className="mt-50">
            <FormSection />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Step2;
