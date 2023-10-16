import Link from "next/link";
import Image from "next/image";
import {Col, Popover, Row, Space} from "antd";
import useTranslation from "next-translate/useTranslation";
import Languages from "./Languages";
import {Container} from "@/components";
import classes from "./Header.module.scss";
import Minus from "@/assets/svg/A-Minus.svg";
import Plus from "@/assets/svg/A-Plus.svg";
import Search from "@/assets/svg/search.svg";
import Mute from "@/assets/svg/mute.svg";
import Eye from "@/assets/svg/eye.svg";
import Mail from "@/assets/svg/mail.svg";
import Phone from "@/assets/svg/phone.svg";
import InfoLine from "@/components/RootLayout/InfoLine/InfoLine";
import Navbar from "@/components/RootLayout/Header/components/Navbar/Navbar";
import {useState} from "react";


const Header = () => {
    const {t, lang} = useTranslation();
    const [font, setFont] = useState(60)
    const services = [
        {
            title: t("Ovozli o’qish "),
            icon: <Mute/>
        },
        {
            title: t("Zaif ko'ruvchilar uchun"),
            type: "eye",
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


    function fontSizeHandler(value) {
        document.body.classList.remove(`fs-20`);
        document.body.classList.remove(`fs-40`);
        document.body.classList.remove(`fs-60`);
        document.body.classList.remove(`fs-80`);
        document.body.classList.remove(`fs-100`);
        document.body.classList.add(`fs-${value}`);
    }

    function calculate(value, type = "add") {
        if (type === "add" && value < 100) {
            setFont(value + 20);
            return value + 20
        } else if (type === "minus" && value > 20) {
            setFont(value - 20);
            return value - 20
        } else return value
    }


    function bgColorHandler(type) {
        if (type === "greyscaleMode") {
            document.body.classList.remove('greyscaleInvertMode');
            document.body.classList.add('greyscaleMode');
        } else if (type === "greyscaleInvertMode") {
            document.body.classList.remove('greyscaleMode');
            document.body.classList.add('greyscaleInvertMode');
        } else {
            document.body.className = ''
        }

    }


    return (
        <div className={classes.wrapper}>
            <Container>
                <Row gutter={[20, 10]} align="middle" justify="space-between">
                    <Col className={classes.left}>
                        <Space>
                            <Link className={classes.logo} href={"/"}>
                                <Image src={"/images/logo.svg"} alt="e-imzo" width={180} height={50}
                                       style={{width: "auto"}}/>
                            </Link>
                            <Space className={classes.action_font}>
                                <i onClick={() => fontSizeHandler(calculate(font, "minus"))}>
                                    <Minus/></i>
                                <i
                                    onClick={() => fontSizeHandler(calculate(font, "add"))}
                                > <Plus/></i>
                            </Space>
                            {services?.map((item: any, k) => (
                                <span key={k} className={classes.service}>

                                    {item?.type === "eye" ? (
                                        <Popover placement="bottom" title={""} content={
                                            (
                                                <div className={classes.appearance}>
                                                    <ul>
                                                        <li className={classes.default}
                                                            onClick={() => bgColorHandler("default")}>A
                                                        </li>
                                                        <li className={classes.greyscale}
                                                            onClick={() => bgColorHandler("greyscaleMode")}>A
                                                        </li>
                                                        <li className={classes["greyscale-invert"]}
                                                            onClick={() => bgColorHandler("greyscaleInvertMode")}>A
                                                        </li>
                                                    </ul>
                                                </div>
                                            )
                                        } trigger="click">
                                            <div className={"d-flex"}>
                                                {item.icon}&nbsp;
                                                {item.title}
                                            </div>

                                        </Popover>
                                    ) : (
                                        <div className={"d-flex"}>
                                            {item.icon}&nbsp;
                                            {item.title}
                                        </div>
                                    )}


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
            <InfoLine/>
            <Navbar/>
        </div>
    );
};

export default Header;
