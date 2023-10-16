import { Alert, Col, Row } from "antd";

import useTranslation from "next-translate/useTranslation";

import { Container } from "@/components";
import classes from "./Style.module.scss";
import UseKeyIcon from "@/assets/svg/key.svg";
import KeyIcon from "@/assets/svg/electronic-key.svg";
import CertificateIcon from "@/assets/svg/certificate.svg";

const AboutSection = () => {
  const { t } = useTranslation();

  const list = [
    {
      title: t("Elektron kalitning yangi formati"),
      icon: <KeyIcon />,
      content: t(
        "Xavfsizlik talablaridan kelib chiqib, elektron kalitning yangi konteyner koʼrinishida *.pfx faylida beriladi. Ushbu faylga pin-kod (parol) qoʼyiladi."
      ),
    },
    {
      title: t("Elektron kalit sertifikati"),
      icon: <CertificateIcon />,
      content: t("Elektron raqamli imzo sertifikati hujjat imzolangan vaqtni aniqlash va uning yuridik maqomini tasdiqlash uchun juda muhim."),
    },
    {
      title: t("Elektron kalitdan foydalanish"),
      icon: <UseKeyIcon />,
      content: t(
        "Elektron raqamli imzo kalitlarini ishlatish uchun maxsus E-imzo modulidan foydalanish mumkin. Ushbu modulni kompyuterga yuklab olishni unutmang."
      ),
    },
  ];

  return (
    <div className={classes.wrapper + " pt-90 pb-80"} id="aboutKey">
      <Container>
        <h3 className="text-center size-24 mt-0 mb-40">{t("ELEKTRON RAQAMLI IMZO HAQIDA")}</h3>

        <Row gutter={[40, 30]}>
          {list?.map((item, k) => (
            <Col xs={24} md={12} lg={8} key={k}>
              <div className={classes.item}>
                <div className={classes.icon}>{item.icon}</div>
                <h4 className="size-18 bold mb-10 mt-10 color">{item.title}</h4>
                <div className="light">{item.content}</div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-40" justify="center">
          <Col>
            <div style={{maxWidth: "720px"}}>
              <Alert
                type="info" message={(
                <div className="mt-10 mb-10 text-center color semibold px-10">{t("")}</div>
              )} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
