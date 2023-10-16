import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "antd";

import useTranslation from "next-translate/useTranslation";

import { Container } from "@/components";
import classes from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  const links1 = [
    { title: t("Sertifikatlar reestri"), link: "/certificates" },
    { title: t("Yangiliklar"), link: "/#" },
    { title: t("Xizmatlar va tariflar"), link: "/#" },
  ];

  const links2 = [
    { title: t("Markaz xaqida"), link: "https://www.yt.uz/" },
    { title: t("Loyiha xaqida"), link: "/#" },
    { title: t("Bogʼlanish uchun"), link: "/contact" },
  ];

  const images = [
    {
      src: "/img/soliq.png",
      href: "https://www.soliq.uz/",
    },
    {
      src: "/img/csc.png",
      href: "https://csec.uz/",
    },
    {
      src: "/img/egov.png",
      href: "http://www.egovernment.uz/uz",
    },
    {
      src: "/img/mygov.png",
      href: "https://my.gov.uz/",
    },
    {
      src: "/img/yt.png",
      href: "https://yt.uz/",
    },
  ];

  return (
    <div className={classes.wrapper + " pt-30 pb-30"}>
      <Container>
        <Row gutter={[40, 40]}>
          <Col xs={12} md={5}>
            {links1?.map((l, k) => (
              <div key={k} className={k !== 0 ? "mt-5" : ""}>
                <Link href={l.link} className="link light">
                  {l.title}
                </Link>
              </div>
            ))}
          </Col>
          <Col xs={12} md={5}>
            {links2?.map((l, k) => (
              <div key={k} className={k !== 0 ? "mt-5" : ""}>
                <Link href={l.link} className="link light">
                  {l.title}
                </Link>
              </div>
            ))}
          </Col>
          <Col xs={24} md={14}>
            <Row justify="center">
              {images?.map((img, k) => (
                <Col key={k}>
                  <div className="pl-10 pr-10">
                    <a href={img.href} target="_blank">
                      <Image src={img.src} alt={img.href} height={60} width={60} style={{ width: "auto" }} />
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
