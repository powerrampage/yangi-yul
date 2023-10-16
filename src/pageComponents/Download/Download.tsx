import Head from "next/head";
import { Button } from "antd";
import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";

import { Container } from "@/components";
import classes from "./Download.module.scss";
import DownloadModal from "../modals/DownloadModal";

const Download = () => {
  const { t } = useTranslation();
  const [open, setopen] = useState(false);
  const openModal = () => setopen(true);
  const closeModal = () => setopen(false);

  return (
    <>
      <Head>
        <title>{t("E-IMZO modulni yuklab olish")}</title>
        <meta name="description" content={t("E-IMZO modulni yuklab olish")} />
      </Head>
      <div className={classes.wrapper}>
        <div className={classes.bg}></div>
        <Container>
          <div className="text-center">
            <div className="size-28 mb-30">{t("E-IMZO modulni yuklab olish uchun quyidagi tugmani bosing")}</div>

            <Button type="primary" size="large" shape="round" icon={<DownloadOutlined />} onClick={openModal}>
              {t("Yuklab olish")}
            </Button>

            <DownloadModal open={open} close={closeModal} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Download;
