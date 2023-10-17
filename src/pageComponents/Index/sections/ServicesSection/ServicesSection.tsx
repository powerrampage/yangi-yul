import React, {useState} from 'react';
import classes from './ServicesSection.module.scss';
import {Col, Row} from "antd";
import {Container} from "@/components";

import Multi from "@/assets/svg/services/multi.svg";
import Library from "@/assets/svg/services/library.svg";
import Book from "@/assets/svg/services/book.svg";
import File from "@/assets/svg/services/file.svg";
import Noise from "@/assets/svg/services/noise.svg";
import Foldor from "@/assets/svg/services/foldor.svg";
import ServiceCard from "@/components/ServiceCard";

let tabs = [
    {id: "Xizmatlar", label: "Xizmatlar"},
    {id: "Bo`limlar", label: "Bo`limlar"},
    {id: "Foydali havolalar", label: "Foydali havolalar"},
    {id: "Fotogalereya", label: "Fotogalereya"},
    {id: "Videogalereya", label: "Videogalereya"},
];

const services = [
    {
        title: "DAVLAT DASTURLARI",
        icon: <Multi/>
    },
    {
        title: "Virtual qabulxona",
        icon: <Library/>
    },
    {
        title: "Statistik ma’lumotlar",
        icon: <Book/>
    },
    {
        title: "NORMATIV-HUQUQIY HUJJATLAR",
        icon: <File/>
    },
    {
        title: "Elektron murojaatlar",
        icon: <Foldor/>
    },
    {
        title: "Elektron murojaatlar",
        icon: <Noise/>
    }
]

const ServicesSection = () => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className={classes.services}>
            <Container>
                <div className={classes.tabs}>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={` ${classes.tab} ${activeTab === tab.id ? classes.active : ""}`}
                            style={{
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>

                <Row justify={"center"} gutter={[20, 20]}>
                    {services.map((item: any, k) => (
                        <Col span={8} key={k}>
                            <ServiceCard title={item.title} icon={item.icon}/>
                        </Col>
                    ))}

                </Row>
            </Container>

        </div>
    );
};

export default ServicesSection;