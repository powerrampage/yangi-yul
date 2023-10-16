import Link from "next/link";
import Image from "next/image";
import {Col, Row, Space} from "antd";
import useTranslation from "next-translate/useTranslation";

import Languages from "./Languages";
import {Container} from "@/components";
import classes from "./Header.module.scss";
import {SearchOutlined} from "@ant-design/icons";
import Minus from "@/assets/svg/A-Minus.svg";
import Plus from "@/assets/svg/A-Plus.svg";
import Search from "@/assets/svg/search.svg";
import Mute from "@/assets/svg/mute.svg";
import Eye from "@/assets/svg/eye.svg";
import Mail from "@/assets/svg/mail.svg";
import Phone from "@/assets/svg/phone.svg";


const Header = () => {
    const {t, lang} = useTranslation();
    const links = [
        {
            title: t("Hokimiyat haqida"),
            href: "/#",
        },
        {
            title: t("Faoliyat"),
            href: "/",
        },
        {
            title: t("Hokimlik yangiliklari"),
            href: "/news",
        },
        {
            title: t("Xizmatlar"),
            href: "/#services",
        },
        {
            title: t("MFY lar"),
            href: "/",
        },
    ];

    const services = [
        {
            title: t("Ovozli o’qish "),
            icon: <Mute/>
        },
        {
            title: t("Zaif ko'ruvchilar uchun"),
            icon: <Eye/>
        },
        {
            title: t("yangiyol_shahar@mail.ru"),
            icon: <Mail/>
        },
        {
            title: t("370 602-00-60"),
            icon: <Phone/>
        },
    ];


    return (
        <div className={classes.wrapper}>
            <Container>
                <Row gutter={[20, 10]} align="middle" justify="space-between">
                    <Col className={classes.left}>
                        <Space>
                            <Link className={classes.logo} href={lang === "uz" ? "/" : "/ru"}>
                                <Image src={"/images/logo.svg"} alt="e-imzo" width={180} height={50}
                                       style={{width: "auto"}}/>
                            </Link>
                            <Space className={classes.action_font}>
                                <Minus/>
                                <Plus/>
                            </Space>
                            {services?.map((item, k) => (
                                <span key={k} className={classes.service}>
                                    {item.icon}&nbsp;
                                    {item.title}
                                </span>
                            ))}


                        </Space>
                    </Col>
                    <Col span={4} className={classes.right}>
                        <Space>
                            <Languages/>
                        </Space>
                        <Space>
                            <span className="pointer semibold">
                                  <Search/>
                            </span>
                        </Space>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
