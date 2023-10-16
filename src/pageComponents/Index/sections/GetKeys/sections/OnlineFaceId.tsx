import Link from "next/link";
import { Button, Col, Row } from "antd";
import useTranslation from "next-translate/useTranslation";
import { ArrowRightOutlined, CreditCardOutlined, EditOutlined, FileDoneOutlined, FileSearchOutlined, FormOutlined, InfoCircleOutlined } from "@ant-design/icons";

import classes from "./Style.module.scss";

const OnlineFaceId = () => {
  const { t, lang } = useTranslation();

  const list = [
    {
      icon: <FormOutlined />,
      content: (
        <>
          {t(
            "Elektron kalit sertifikatini olish uchun soʼrovnoma toʼldiring va pasport nusxasini hamda pasport bosh sahifasi bilan tushgan selfi suratni biriktiring"
          )}
        </>
      ),
    },
    {
      icon: <CreditCardOutlined />,
      content: (
        <>
          {t("Elektron raqamli imzo kaliti uchun to‘lovni bank kassalari yoki quyidagi to‘lov tizimlaridan biri orqali amalga oshiring")}:&nbsp;
          <a href="https://payme.uz/" target="_blank" rel="noopener noreferrer">
            payme
          </a>
          ,&nbsp;
          <a href="https://click.uz/" target="_blank" rel="noopener noreferrer">
            click
          </a>
          ,&nbsp;
          <a href="https://upay.uz/" target="_blank" rel="noopener noreferrer">
            upay
          </a>
          ,&nbsp;
          <a href="https://uz.paynet.uz/" target="_blank" rel="noopener noreferrer">
            paynet
          </a>
        </>
      ),
    },
    {
      icon: <FileSearchOutlined />,
      content: <>{t("Sertifikat tayyorligi boʼyicha SMS xabarni olgandan soʼng, e-imzo.uz saytida arizani toping")}</>,
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
          <Col xs={24} sm={12} xl={6} key={k}>
            <div className={classes.item}>
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
      <Row gutter={20} justify="center">
        <Col>
          <Link href={`/getting-with-faceId/step1`}>
            <Button type="primary" shape="round" className="mt-15" block icon={<EditOutlined />}>
              {t("Аriza shaklini toʼldiring")}
            </Button>
          </Link>
        </Col>
        <Col>
          <Link href={`/files/instruction_online_ecp.pdf`} download={`instruction_online_ecp_${lang}.pdf`} target="_blank">
            <Button type="primary" shape="round" className="mt-15" block icon={<InfoCircleOutlined />}>
              {t("Qoʼllanma")}
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default OnlineFaceId;
