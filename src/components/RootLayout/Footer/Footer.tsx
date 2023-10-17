import Link from "next/link";
import Image from "next/image";
import {Col, Row, Space} from "antd";

import useTranslation from "next-translate/useTranslation";

import { Container } from "@/components";
import classes from "./Footer.module.scss";
import Ring from "@/assets/svg/ring.svg";
import Globus from "@/assets/svg/globus.svg";
import Telegram from "@/assets/svg/telegram.svg";

const Footer = () => {
  const { t } = useTranslation();


  const network = [
    {
      title: "(71) 123-45-67",
      icon: <Ring/>
    },
    {
      title: "https://yangiyulshahar.uz",
      icon: <Globus/>
    },
    {
      title: "https://t.me/yangiyulshahar",
      icon: <Telegram/>
    }
  ]

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row justify={"space-between"} gutter={[20, 20]} >
          <Col xs={8} md={8}>
            <Image
                className={classes.logo}
                src={"/images/logo.svg"} alt="e-imzo" width={180} height={60} style={{width: "auto"}}/>
          </Col>
          <Col xs={16} md={16}>
            <Space className={classes.network}  align={"center"}>
              {network.map(({title, icon}:any,  i)=> (
                  <a key={i} className={"d-flex"} href={title}>{icon}&nbsp;{title}</a>
                ))}
            </Space>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
