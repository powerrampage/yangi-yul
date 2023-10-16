import Head from "next/head";
import { useState } from "react";
import { Button, Input } from "antd";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { BackButton, Container, Head as HeadComp, LabelAndError } from "@/components";

const Confirm = () => {
  const { t } = useTranslation();
  const [code, setcode] = useState<any>(undefined);
  const router = useRouter();

  const resend = () => {
    console.log("resend code");
  }

  const confirm = () => {
    console.log(code);

    router.push(`/getting/step2`);
  }

  return (
    <div>
      <Head>
        <title>{t("ONLAYN ELEKTRON KALIT OLISHNI TASDIQLASH")}</title>
        <meta name="description" content="ONLAYN ELEKTRON KALIT OLISHNI TASDIQLASH" />
      </Head>
      <HeadComp>
        <div className="size-32 semibold">{t("ONLAYN ELEKTRON KALIT OLISHNI TASDIQLASH")}</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>
      <div className="pt-40 pb-60">
        <Container>
          <div className="mx-auto max-width-600 text-center">
            {/* @ts-ignore */}
            <div className="size-18 semibold mb-30">{t("Tasdiqlash kodi telefonga yuborildi")} ********0390</div>

            <div className="mx-auto" style={{width: "240px"}}>
              <LabelAndError label={t("Tasdiqlash kodi")}>
                <Input size="large" onChange={e => setcode(e.target.value)} />
              </LabelAndError>
            </div>

            <div className="mt-10">
              <Button type="link" onClick={resend}>{t("Kodni qayta yuborish")}</Button>
            </div>

            <div className="mt-20">
              <Button type="primary" shape="round" size="large" disabled={!code}onClick={confirm}>{t("Tasdiqlash")}</Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Confirm;
