import Head from "next/head";
import Link from "next/link";
import { Button, Space } from "antd";
import useTranslation from "next-translate/useTranslation";
import { DownloadOutlined, InfoCircleOutlined } from "@ant-design/icons";

import FormSection from "./FormSection";
import { BackButton, Container, Head as HeadComp } from "@/components";

const Step1 = () => {
  const { t, lang } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("ELEKTRON KALIT ONLAYN ARIZASI")}</title>
        <meta name="description" content={t("ELEKTRON KALIT ONLAYN ARIZASI")} />
      </Head>

      <HeadComp>
        <div className="size-32 bold">{t("ELEKTRON KALIT ONLAYN ARIZASI")}</div>
        <div className="mt-10">
          <Space size={20}>
            <BackButton size="small" type="default" />
            <Link href={`/files/instruction_online_ecp.pdf`} download={`instruction_online_ecp_${lang}.pdf`} target="_blank">
              <Button type="primary" icon={<DownloadOutlined />} size="small" shape="round">
                {t("Qoʼllanma")}
              </Button>
            </Link>
            <a href="https://my.soliq.uz/searchtin/index?user_type=1" target="_blank">
              <Button type="primary" icon={<InfoCircleOutlined />} size="small" shape="round">
                {t("STIR bilish")}
              </Button>
            </a>
          </Space>
        </div>
      </HeadComp>

      <div className="pt-40 pb-60">
        <Container>
          <FormSection />
        </Container>
      </div>
    </>
  );
};

export default Step1;
