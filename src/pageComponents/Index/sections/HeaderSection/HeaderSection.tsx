import useTranslation from "next-translate/useTranslation";
import { SendOutlined, KeyOutlined, PlayCircleOutlined } from "@ant-design/icons";

import { Container } from "@/components";
import classes from "./HeaderSection.module.scss";
import { Button, Col, Row } from "antd";
import RightFixedButtons from "./RightFixedButtons";

const HeaderSection = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row gutter={[20, 40]} align="middle">
          <Col xs={24} lg={11}>
            <div className={classes.title}>{t("Mobil ilova orqali imzolash")}</div>
            <div className={classes.desc + " light"}>
              {t("Elektron raqamli imzo yopiq kalitining egasini identifikatsiya qilish imkoniyatini beradigan imzo")}
            </div>
            <Button size="large" type="primary">
              {t("Elektron kalit olish")}
            </Button>
          </Col>
          <Col xs={24} lg={13}>
            <RightFixedButtons />
            <div className="mt-60 text-center">
              <Button shape="round" size="large" icon={<PlayCircleOutlined />} type="primary">
                {t("VIDEO QO’LLANMA")}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderSection;
