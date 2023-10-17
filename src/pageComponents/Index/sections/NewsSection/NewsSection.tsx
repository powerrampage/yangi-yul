import React from 'react';
import classes from './NewsSection.module.scss';
import useTranslation from "next-translate/useTranslation";
import {Col, Row} from "antd";
import NewsCard from "@/components/NewsCard";
import {Container} from "@/components";


const NewsSection = () => {
    const { t } = useTranslation();

    const news = [
        {col: 6, title: "Yangilik 1"},
        {col: 12, title: "Yangiyo‘l shahrida “Besh tashabbus olimpiadasi” doirasida yoshlar o‘rtasida sport musobaqalari bo‘lib o‘tmoqda."},
        {col: 6, title: "Xalq bilan uchrashuv"},
        {col: 6, title: "Profilaktik tadbir"},
        {col: 6, title: "Xalq bilan uchrashuv"},
        {col: 12, title: "Yangiyo‘l shahrida Viloyat miqyosida Qo‘mondonlik-shtab o‘quv mashqi bo‘lib o‘tdi."}
    ]
    return (
        <div className={classes.news_section}>
           <div className={classes.title}>
               <h2>
                   {t("Yangiliklar")}
               </h2>
           </div>

            <Container>
                <Row gutter={[20, 20]} justify={"center"}>
                    {news.map((item, k)=> (
                        <Col key={k} xs={24} sm={12} md={12} lg={item.col} >
                            <NewsCard title={item.title} description={"Joriy yilning 12 oktabr kuni Yangiyo‘l shahrida Viloyat miqyosida Qo‘mondonlik-shtab o‘quv mashqi bo‘lib o‘tdi."}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default NewsSection;