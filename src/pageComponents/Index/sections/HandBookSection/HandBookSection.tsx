import { Col, Row } from "antd";
import Link from "next/link";
import { DownloadOutlined } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";

import classes from "./Style.module.scss";
import { Container } from "@/components";
import RulesIcon from "@/assets/svg/rules.svg";
import AppFormIcon from "@/assets/svg/appForm.svg";
import InstallIcon from "@/assets/svg/install.svg";
import HandbookIcon from "@/assets/svg/handbook.svg";
import DownloadIcon from "@/assets/svg/download.svg";
import RequirementsIcon from "@/assets/svg/requirements.svg";

const HandBookSection = () => {
  const { t, lang } = useTranslation();

  const list = [
    {
      icon: <HandbookIcon />,
      title: t("Qoʼllanma"),
      content: (
        <>
          {t("Elektron raqamli imzo sertifikatini masofadan turib olish imkoniyatidan foydalanish uchun")}.{" "}
          <Link href={`/files/instruction_online_ecp.pdf`} download={`instruction_online_ecp_${lang}.pdf`} target="_blank">
            <DownloadOutlined /> pdf
          </Link>
        </>
      ),
    },
    {
      icon: <AppFormIcon />,
      title: t("Elektron kalit olish uchun arizani koʼchirib olish"),
      content: (
        <>
          {t("Аriza")}{" "}
          <Link href={`/files/application.doc`} download={"application.doc"} target="_blank">
            <DownloadOutlined /> doc
          </Link>{" "}
          |{" "}
          <Link href={`/files/application.pdf`} download={`application.pdf`} target="_blank">
            <DownloadOutlined /> pdf
          </Link>
        </>
      ),
    },
    {
      icon: <DownloadIcon />,
      title: t("E-IMZO yuklash"),
      content: <>{t("Elektron raqamli imzo kalitlari va sertifikatlarini saqlash uchun xavfsiz qurilmaga qo'yiladigan talablar")}</>,
    },
    {
      icon: <RequirementsIcon />,
      title: t("Elektron raqamli imzo kalitlari va sertifikatlarini saqlash uchun xavfsiz qurilmaga qo'yiladigan talablar"),
      content: (
        <>
          <Link href={`/files/token_guide.pdf`} download={`token_guide.pdf`} target="_blank">
            <DownloadOutlined /> pdf
          </Link>
        </>
      ),
    },
    {
      icon: <RulesIcon />,
      title: t("Qoidalar"),
      content: (
        <>
          {t("Elektron raqamli imzo kalitlaridan foydalanish va saqlash uchun")}.{" "}
          <Link href={`/files/pravila.docx`} download="pravila.docx" target="_blank">
            <DownloadOutlined /> doc
          </Link>
        </>
      ),
    },
    {
      icon: <InstallIcon />,
      title: <Link href={`/install`} className="dark">{t("E-imzo modulini oʼrnatish")}</Link>,
      content: <>{t("E-imzo modulini toʼgʼri oʼrnatish uchun yoʼriqnoma bilan tanishing")}</>,
    },
  ];

  return (
    <div className="bg_light pt-90 pb-90" id="handbook">
      <Container>
        <h3 className="text-center size-24 mt-0 mb">{t("QOʼLLANMALAR")}</h3>

        <Row gutter={[30, 30]}>
          {list?.map((item, k) => (
            <Col xs={24} md={12} lg={8} key={k}>
              <div className={classes.item}>
                <div className={classes.icon}>{item.icon}</div>
                <div className="mt-10 mb-10 semibold">{item.title}</div>
                <div className="light">{item.content}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HandBookSection;
