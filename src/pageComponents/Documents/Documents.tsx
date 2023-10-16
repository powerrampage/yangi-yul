import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import { BackButton, Container, Head as HeadComp } from "@/components";

const Documents = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("Hujjatlar")}</title>
        <meta name="description" content={t("Hujjatlar")} />
      </Head>

      <HeadComp>
        <div className="size-32 bold">{t("HUJJATLAR")}</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>

      <div className="pt-40 pb-60">
        <Container></Container>
      </div>
    </>
  );
};

export default Documents;
