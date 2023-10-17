import useTranslation from "next-translate/useTranslation";

import {Container} from "@/components";
import classes from "./HeaderSection.module.scss";
import {Col, Row} from "antd";
import SliderCard from "@/components/SliderCard/SliderCard";
import SecondCard from "@/components/SecondCard";

const HeaderSection = () => {
    const {t} = useTranslation();
    return (
        <div className={classes.wrapper}>
            <Container>
                <Row gutter={[20, 20]} justify={"center"}>
                    <Col xs={24} sm={24} md={24} lg={16}>
                        <SliderCard/>
                    </Col>
                    <Col xs={24} sm={24} md={16} lg={8}>
                        <SecondCard/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderSection;
