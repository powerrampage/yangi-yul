import { Button, Col, List, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";

const InfoSection = ({ data }: { data: any }) => {
  const { t } = useTranslation();

  const list: any[] = [
    {
      title: t("Ariza raqami"),
      content: <>{data?.appNumber}</>,
    },
    {
      title: t("Arizachi FISH"),
      content: <>{data?.fish}</>,
    },
    {
      title: t("Ariza qabul qilingan sana"),
      content: <>{data?.date}</>,
    },
    {
      title: t("Ariza holati"),
      content: <>{data?.state}</>,
    },
    {
      title: t("Sertifikat fayli"),
      content: <Button type="primary" shape="round" icon={<DownloadOutlined />} size="small">{t("юклаб олиш")}</Button>
    },
  ];

  return (
    <div className="mx-auto max-width-900">
      <List
        bordered
        dataSource={list}
        renderItem={(item: any) => (
          <List.Item>
            <Row className="w100 size-18">
              <Col xs={11} className="light">{item?.title}:</Col>
              <Col xs={13} className="black semibold">{item?.content}</Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  );
};

export default InfoSection;
