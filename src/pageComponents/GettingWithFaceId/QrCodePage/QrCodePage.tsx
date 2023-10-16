import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import { BackButton, Container, Head as HeadComp } from "@/components";

const QrCodePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("QR CODE NI SKANER QILING")}</title>
      </Head>

      <HeadComp>
        <div className="size-32 bold">{t("QR CODE NI SKANER QILING")}</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>

      <div className="pt-40 pb-60">
        <Container>
          <div className="text-center">
            <img src="/img/qr-code.png" style={{ width: "320px" }} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default QrCodePage;
