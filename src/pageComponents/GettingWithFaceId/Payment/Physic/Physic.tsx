import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { RightOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Row, Tooltip } from "antd";
import useTranslation from "next-translate/useTranslation";

import { BackButton, Container, Head as HeadComp } from "@/components";
import classes from "./Style.module.scss";

const Physic = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const list = [
    {
      url: "/img/click.jpg",
      title: t("click орқали тўлаш"),
      onClick: () => {}
    },
    {
      url: "/img/payme.jpg",
      title: t("payme орқали тўлаш"),
      onClick: () => {}
    },
    {
      url: "/img/paynet.jpg",
      title: t("paynet орқали тўлаш"),
      onClick: () => {}
    },
  ];

  const goToNext = () => {
    router.push(`/getting-with-faceId/confirm`);
  }

  return (
    <>
      <Head>
        <title>{t("ERI OLISH UCHUN TO‘LOVNI AMALGA OSHIRING")} ({t("FACE ID orqali olish")})</title>
        <meta name="description" content="ERI OLISH UCHUN TO‘LOVNI AMALGA OSHIRING" />
      </Head>
      <HeadComp>
        <div className="size-32 semibold">{t("ERI OLISH UCHUN TO‘LOVNI AMALGA OSHIRING")} ({t("FACE ID orqali olish")})</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>
      <div className="pt-40 pb-60">
        <Container>
          <div className="mx-auto max-width-900">
            <Alert
              type="info"
              message={
                <div className="size-20 text-center">
                  {t(
                    "ERI KALIT SERTIFIKATLARINI BERISH UCHUN YURIDIK SHAXSLAR VA YAKKA TARTIBDAGI TADBIRKORLARDAN BAZAVIY HISOBLASH MIQDORINING 10 % (33 000 SO‘M), JISMONIY SHAXSLARDAN ESA 7 % (23 100 SO‘M) MIQDORIDA YIG‘IM UNDIRILADI"
                  )}
                </div>
              }
            />

            <div className="size-18 mb-20 mt-30 bold text-center color">{t("XIZMAT UCHUN TOʼLOV")}</div>

            <Row gutter={[20, 20]} justify="center">
              {list?.map((item, k) => (
                <Col key={k}>
                  <Tooltip title={item.title} placement="bottom">
                    <div className={classes.item}>
                      <Image src={item.url} alt={item.title} width={100} height={100} />
                    </div>
                  </Tooltip>
                </Col>
              ))}
            </Row>

            <div className="mt-30 text-center size-18">{t("TO‘LOVNI AMALGA OSHIRIB BO‘LGANINGGIZDAN KEYIN ARIZA YUBORISH BO‘LIMIGA O‘TING")}</div>

            <div className="mt-30 text-center">
              <Button size="large" shape="round" type="primary" onClick={goToNext}>{t("Davom etish")}<RightOutlined /></Button>
            </div>

            <div className="mt-30">
              <Alert type="warning" message={<><div className="size-18 text-center">{t("Hisobingizda ERI kalit olish uchun mablag' yetarli emas, hisobni to'ldirib, \"Davom etish\" tugmasini bosing")}</div></>} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Physic;
