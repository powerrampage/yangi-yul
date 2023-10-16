import { Col, Row } from "antd";

import useTranslation from "next-translate/useTranslation";
import { CloseOutlined, PauseOutlined, ReloadOutlined, UsbOutlined } from "@ant-design/icons";

import { Container } from "@/components";
import classes from "./Style.module.scss";

const ControlKeySection = () => {
  const { t }: any = useTranslation();

  const list = [
    {
      icon: <CloseOutlined />,
      title: t("Sertifikatni bekor qilish"),
      content: (
        <div>
          <div className="text-center">{t("Sertifikatni bekor qilish quyidagi sabablar boʼyicha qilinadi")}:</div>
          <ul className="text-left pl-20">
            <li>{t("Uchinchi tomon elektron imzoingizga ega boʼlgan holda")}</li>
            <li>{t("Maʼlumot tashuvchi qurilmangiz yoʼqolgan yoki buzilgan taqdirda")}</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <PauseOutlined />,
      title: t("Sertifikatni vaqtincha toʼxtatish"),
      content: (
        <div className="text-center">{t("Yopiq kalit egasi tomonidan ariza kelib tushgan holatlarda, sertifikat maʼlum muddatga toʼxtatiladi")}</div>
      ),
    },
    {
      icon: <ReloadOutlined />,
      title: t("Sertifikatni tiklash"),
      content: <div className="text-center">{t("Vaqtincha toʼxtatilgan sertifikatni ariza asosida amal qilishini tiklash mumkin ")}</div>,
    },
  ];

  return (
    <div className="bg_light pt-90 pb-90">
      <Container>
        <h3 className="text-center size-24 mt-0 mb-90">{t("ELEKTRON KALITNI BOSHQARISH")}</h3>

        <Row gutter={[40, 90]}>
          {list?.map((item, k) => (
            <Col xs={24} md={12} lg={8} key={k}>
              <div className={classes.item}>
                <div className={classes.icon}>
                  {item.icon}
                  <UsbOutlined />
                </div>
                <div className="bold color text-center mb-10 size-17">{item.title}</div>
                <div className="light">{item.content}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ControlKeySection;
