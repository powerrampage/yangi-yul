import { Button } from "antd";
import { useRouter } from "next/router";
import { ButtonType } from "antd/es/button";
import { LeftOutlined } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";

const BackButton = ({
  size = "middle",
  shape = "round",
  type = "primary",
}: {
  size?: "large" | "small" | "middle";
  shape?: "round" | "default";
  type?: ButtonType;
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Button {...{ shape, size, type }} icon={<LeftOutlined />} onClick={() => router.back()}>
      {t("орқага")}
    </Button>
  );
};

export default BackButton;
