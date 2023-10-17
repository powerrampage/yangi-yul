import {AboutSection, ControlKeySection, HandBookSection, HeaderSection, NewsSection} from "./sections";
import ServicesSection from "@/pageComponents/Index/sections/ServicesSection";
import classes from "@/pageComponents/Index/sections/NewsSection/NewsSection.module.scss";
import {Container} from "@/components";
import {Col, Row} from "antd";
import NewsCard from "@/components/NewsCard";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const IndexPage = () => {
    const {t} = useTranslation();
    const news = [
        {col: 6, title: "Yangilik 1"},
        {col: 6, title: "Xalq bilan uchrashuv"},
        {col: 6, title: "Profilaktik tadbir"},
        {col: 6, title: "Joriy yilning 12 oktabr kuni"},

    ]
    return (
        <div>
            <HeaderSection/>
            <NewsSection/>
            <ServicesSection/>

            <Container>
                <div className={classes.news_section}>
                    <div className={classes.title}>
                        <h2>
                            {t("O`zbekiston yangiliklari")}
                        </h2>
                    </div>

                    <Row gutter={[20, 20]} style={{marginBottom: 20}} justify={"center"}>
                        {news.map((item, k) => (
                            <Col key={k} xs={24} sm={12} md={12} lg={item.col}>
                                <NewsCard title={item.title} description={"Joriy yilning 12 oktabr kuni"}/>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default IndexPage;
