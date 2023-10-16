import React from 'react';
import classes from './Navbar.module.scss';
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import {Container} from "@/components";
import ArrowDown from "@/assets/svg/arrow-down.svg";

const Navbar = () => {
    const {t} = useTranslation();

    const links = [
        {
            title: t("Hokimlik haqida"),
            href: "/#",
        },
        {
            title: t("Shahar haqida"),
            href: "/"
        },
        {
            title: t("MFY lar"),
            href: "/news",
        },
        {
            title: t("Faoliyati"),
            href: "/services",
            submenu: [
                {
                    title: t("Yangiyo‘l shahar hokimligi"),
                    href: "/",
                },
                {
                    title: t("Hurmatli fuqarolar!"),
                    href: "/",
                },
                {
                    title: t("Jamoatchilik"),
                    href: "/",
                },
                {
                    title: t("Shahar haqida"),
                    href: "/",
                }
            ]
        },
        {
            title: t("Axborot xizmati"),
            href: "/",
        },
        {
            title: t("Mahalliy kengash"),
            href: "/",
        },
        {
            title: t("Xujjatlar"),
            href: "/",
        },
        {
            title: t("Sayyohlik"),
            href: "/",
        }
    ];
    return (
        <div className={classes.main_navbar}>
            <Container>
                <div className={classes.navbar}>
                    {links?.map((item: any, k) => (
                        <Link href={item.href} key={k} className={classes.link}>
                            {item.title} &nbsp;
                            {item?.submenu?.length > 0 ? (
                                <ArrowDown/>
                            ) : null}
                            {item?.submenu?.length > 0 ? (
                                <ul className={classes.submenu}>
                                    {item?.submenu?.map((sub: any, indx) => (
                                        <li key={indx}>
                                            <Link href={sub.href}>
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Navbar;