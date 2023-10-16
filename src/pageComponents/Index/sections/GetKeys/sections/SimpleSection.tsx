import { Button, Col, Row } from "antd";

import useTranslation from "next-translate/useTranslation";
import { ArrowRightOutlined, ContactsOutlined, FileDoneOutlined, SolutionOutlined } from "@ant-design/icons";

import classes from "./Style.module.scss";

const SimpleSection = () => {
  const { t } = useTranslation();

  const list = [
    {
      icon: <SolutionOutlined />,
      content: <>{t("Eng kam ish xaqining 7% miqdoridagi summani toʼlang")}</>,
    },
    {
      icon: <ContactsOutlined />,
      content: <>{t("Pasport va fleshkani olish kerak")}</>,
    },
    {
      icon: <FileDoneOutlined />,
      content: <>{t("Elektron kalit sertifikatini olganligingizni tasdiqlang va kompyuterga yuklab oling")}</>,
    },
  ];

  return (
    <div>
      <Row gutter={[40, 40]}>
        {list?.map((el, k) => (
          <Col xs={24} sm={12} xl={8} key={k}>
            <div className={classes.item + " " + classes.item2}>
              <div className={classes.icon}>
                <div className={classes.icon_number}>{k + 1}</div>
                {el.icon}
                {k !== list?.length - 1 && (
                  <div className={classes.arrow}>
                    <ArrowRightOutlined />
                  </div>
                )}
              </div>
              <div className="mt-20 text-center light">{el.content}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SimpleSection;
