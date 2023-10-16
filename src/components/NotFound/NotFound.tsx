import Link from "next/link";
import { Button, Result } from "antd";

import useTranslation from "next-translate/useTranslation";
import { HomeOutlined } from "@ant-design/icons";

import classes from "./NotFound.module.scss";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <div className="pt60 pb60">
        <div className="container">
          <Result status={404} title={t("Sahifa mavjud emas")} extra={(
            <Link href={'/'}><Button type="primary" shape="round" icon={<HomeOutlined />}>{t("Bosh sahifa")}</Button></Link>
          )} />
        </div>
      </div>
    </div>
  )
}

export default NotFound;