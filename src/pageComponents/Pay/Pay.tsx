import Head from "next/head";
import { Col, Row } from "antd";
import useTranslation from "next-translate/useTranslation";

import { BackButton, Container, Head as HeadComp } from "@/components";
import classes from "./Style.module.scss";

const Pay = () => {
  const { t } = useTranslation();

  const list = [
    {
      img: "/img/payme.jpg",
      onClick: () => {},
    },
    {
      img: "/img/click.jpg",
      onClick: () => {},
    },
    {
      img: "/img/upay.jpg",
      onClick: () => {
        window.open(`https://fast.upay.uz/checkout/aeeaa3a214dd49f38dae3da7566d12ed`, "_blank");
      },
    },
  ];

  return (
    <>
      <Head>
        <title>{t("To'lash")}</title>
        <meta name="description" content={t("e-imzo uchun to'lash")} />
      </Head>
      <HeadComp>
        <div className="size-32 bold">{t("TO'LASH")}</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>
      <div className="pt-40 pb-60">
        <Container>
          <div className="text-center size-20 mb-30 semibold">{t("Toʼlov tizimini tanlang")}</div>
          <Row gutter={[20, 20]} justify="center">
            {list.map(({ img, onClick }, k) => (
              <Col key={k}>
                <div className={classes.item + " pointer"} onClick={onClick}>
                  <img src={img} alt="payment" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pay;
