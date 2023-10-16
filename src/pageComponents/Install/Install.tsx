import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Divider, Steps } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";

import { BackButton, Card, Container, Head as HeadComp } from "@/components";

const Install = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("E-imzo modulini oʼrnatish")}</title>
        <meta name="description" content={t("E-imzo modulini oʼrnatish")} />
      </Head>
      <HeadComp>
        <div className="size-32 bold">{t("E-IMZO MODULINI O'RNATISH")}</div>
        <div className="mt-10">
          <BackButton size="small" type="default" />
        </div>
      </HeadComp>
      <div className="pt-40 pb-60">
        <Container>
          <div className="text-center size-20 mb-30">{t("E-imzo modulini Firefox Mozillada o'rnatish")}</div>

          <div className="mx-auto max-width-900">
            <Steps
              // progressDot
              current={99}
              status="process"
              direction="vertical"
              items={[
                {
                  description: (
                    <Card className="dark text-center">
                      {t("Dastlab E-IMZO modulni yuklab olish lozim")}.{" "}
                      <Link href="/download">
                        {t("Yuklab olish")} <DownloadOutlined />
                      </Link>
                    </Card>
                  ),
                  status: "process"
                },
                {
                  description: (
                    <Card className="dark text-center">
                      <div>{t("Soʼngra modulni administrator nomidan rasmda koʼrsatilgandek oʼrnatish lozim")}</div>
                      <Divider />
                      <img src="/img/install/img-eimzo-1.jpg" alt="e-imzo" style={{ width: "100%", maxWidth: "720px" }} />
                      <Divider />
                      {t(
                        'Buning uchun fayl ustiga sichqonchaning oʼng tugmasini bosib, menyudagi "Запуск от имени администратора" tugmasini bosing.'
                      )}
                    </Card>
                  ),
                  status: "process"
                },
                {
                  description: (
                    <Card className="dark text-center">
                      <div>{t('Paydo boʼlgan formada "Далее" tugmasini bosing')}</div>
                      <Divider />
                      <img src="/img/install/img-eimzo-2.jpg" alt="e-imzo" style={{ width: "100%", maxWidth: "520px" }} />
                    </Card>
                  ),
                  status: "process"
                },
                {
                  description: (
                    <Card className="dark text-center">
                      <div>{t('Keyin "Установить" rasmda koʼrsatilgandek')}</div>
                      <Divider />
                      <img src="/img/install/img-eimzo-3.jpg" alt="e-imzo" style={{ width: "100%", maxWidth: "520px" }} />
                    </Card>
                  ),
                  status: "process"
                },
                {
                  description: (
                    <Card className="dark text-center">
                      <div>{t('Soʼngra "Завершить" ni bosib, oʼrnatishni tugatasiz.')}</div>
                      <Divider />
                      <img src="/img/install/img-eimzo-4.jpg" alt="e-imzo" style={{ width: "100%", maxWidth: "520px" }} />
                    </Card>
                  ),
                  status: "process"
                },
                {
                  description: (
                    <Card className="dark text-center">
                      <div>{t('Oʼrnatish jarayoni tugatilgandan soʼng ekranda asosiy sertifikatni yuklash soʼraladi. "Да" tugmasini bosing.')}</div>
                      <Divider />
                      <img src="/img/install/img-eimzo-5.jpg" alt="e-imzo" style={{ width: "100%", maxWidth: "520px" }} />
                      <Divider />
                      {t("Shu bilan jarayon toʼxtaydi va esi.uz saytiga oʼtib ishni davom ettirishingiz mumkin.")}
                    </Card>
                  ),
                  status: "process"
                },
                {
                  description: (
                    <Card className="dark text-center">
                      <div>{t('Soʼngra Mozilla FireFox brauzeri manzil qatorida teriladi')} <a href="https://127.0.0.1:64443/" target="_blank">https://127.0.0.1:64443/</a></div>
                      <Divider />
                      <img src="/img/install/img-eimzo-7.jpg" alt="e-imzo" className="w100" />
                    </Card>
                  ),
                  status: "process"
                },
                {
                  description: (
                    <Card className="dark text-center">
                      <div>{t('"Я понимаю риск" ni bosing')}</div>
                      <Divider />
                      <img src="/img/install/img-eimzo-8.jpg" alt="e-imzo" style={{ width: "100%", maxWidth: "560px" }} />
                    </Card>
                  ),
                  status: "process"
                },
                {
                  description: (
                    <Card className="dark text-center">
                      <div>{t('Soʼngra "Добавить исключение" ni bosing')}</div>
                      <Divider />
                      <img src="/img/install/img-eimzo-9.jpg" alt="e-imzo" style={{ width: "100%", maxWidth: "560px" }} />
                    </Card>
                  ),
                  status: "process"
                },
                {
                  description: (
                    <Card className="dark text-center">
                      <div>{t('Yangi darchada "Постоянно хранить это исключение" ni belgilang va "Подтвердить исключение безопасности" tugmasini bosing.')}</div>
                      <Divider />
                      <img src="/img/install/img-eimzo-10.jpg" alt="e-imzo" style={{ width: "100%", maxWidth: "520px" }} />
                      <Divider />
                      {t("Mozilla FireFox brauzeri foydalanish uchun tayyor. Saytga oʼtishingiz mumkin esi.uz va ishni davom ettirishingiz mumkin.")}
                    </Card>
                  ),
                  status: "process"
                },
              ]}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Install;
