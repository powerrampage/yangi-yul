import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import FormSection from "./FormSection";
import { BackButton, Container, Head as HeadComp } from "@/components";

const Step1 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>
          {t("ELEKTRON KALIT ONLAYN ARIZASI")} ({t("FACE ID orqali olish")})
        </title>
        <meta name="description" content={t("ELEKTRON KALIT ONLAYN ARIZASI")} />
      </Head>

      <HeadComp>
        <div className="size-32 bold">
          {t("ELEKTRON KALIT ONLAYN ARIZASI")} ({t("FACE ID orqali olish")})
        </div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
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
