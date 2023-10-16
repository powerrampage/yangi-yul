import useTranslation from "next-translate/useTranslation";

import { Modal } from "@/components";
import classes from "./Style.module.scss";
import { Col, Divider, List, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const DownloadModal = ({ open, close }: { open: boolean; close: () => void }) => {
  const { t } = useTranslation();

  const list = [
    {
      title: t("Windows (Установщик с JRE)"),
      desc: (
        <>
          {t("Возможно ложное срабатывание антивирусного ПО.")}
          <br />
          {t("Следует добавить исключающее правило")}
        </>
      ),
      href: "/files/E-IMZO-v4.47.zip",
    },
    {
      title: t("Windows (Ручная установка без JRE)"),
      desc: <>{t("(для продвинутых пользователей и администраторов)")}</>,
      href: "/files/E-IMZO-v4.47-no-jre.zip",
    },
    {
      title: t("Linux и MacOS (Ручная установка без JRE)"),
      desc: <>{t("(для продвинутых пользователей и администраторов)")}</>,
      href: "/files/E-IMZO-v4.47.tar",
    },
  ];

  return (
    <Modal open={open} onCancel={close} title={"E-IMZO-v4.47 (USB-token):"} width={600}>
      <Divider />
      <div className="text-center size-18 orange">
        {t("Аrxiv paroli")}: <span className={classes.selection_none + " bold"}>2023232</span>
      </div>
      <Divider />
      <List
        bordered
        dataSource={list}
        renderItem={(item: any) => (
          <List.Item>
            <a href={item.href} download className="w100">
              <Row gutter={30} align="middle">
                <Col xs={20}>
                  <div className="semibold black size-17">{item.title}</div>
                  <div className="light lh12">{item.desc}</div>
                </Col>
                <Col xs={4}>
                  <div className="size-28 color text-right">
                    <DownloadOutlined />
                  </div>
                </Col>
              </Row>
            </a>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default DownloadModal;
