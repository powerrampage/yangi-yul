import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import useTranslation from "next-translate/useTranslation";

const AcceptSection = () => {
  const { t } = useTranslation();

  const style = {
    height: "80vh",
    minHeight: "600px",
  };

  return (
    <div>
      <div className="mb-30 text-right">
        <Button type="primary" className="btn_success" size="large" shape="round" icon={<CheckOutlined />}>{t("Tasdiqlash")}</Button>
      </div>
      <iframe style={style} src={"/files/cert.pdf"} className="w100 br" allowFullScreen />
    </div>
  );
};

export default AcceptSection;
