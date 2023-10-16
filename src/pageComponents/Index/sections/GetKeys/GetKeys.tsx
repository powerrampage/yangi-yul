import { useState } from "react";
import { Alert, Button, Space } from "antd";

import useTranslation from "next-translate/useTranslation";

import { Container } from "@/components";
import { OnlineFaceId, OnlineSection, SimpleSection } from "./sections";

const GetKeys = () => {
  const { t } = useTranslation();
  const [type, settype] = useState<"online" | "simple" | "faceid">("online");

  const types: any[] = [
    {
      title: t("ONLAYN SELFI"),
      value: "online",
    },
    {
      title: "ONLAYN FACE ID",
      value: "faceid",
    },
    {
      title: t("ODDIY USUL"),
      value: "simple",
    },
  ];

  return (
    <div className={"pt-90 pb-90"} id="getKey">
      <Container>
        <h3 className="text-center size-24 mb-20 mt-0">{t("ELEKTRON KALITNI QUYIDAGICHA OLISH MUMKIN")}</h3>
        <div className="text-center mb-40">
          <Space size={20}>
            {types?.map((el, k) => (
              <Button type={type === el.value ? "primary" : "default"} shape="round" key={k} onClick={() => settype(el.value)}>
                {el.title}
              </Button>
            ))}
          </Space>
        </div>

        {type === "online" && <OnlineSection />}
        {type === "faceid" && <OnlineFaceId />}
        {type === "simple" && <SimpleSection />}

        <div className="mt-40">
          <Alert
            type="info"
            message={
              <div className="text-center pt-10 pb-10 semibold color italic">
                {t("ERIni eksterritorial tamoyil boʼyicha, yaʼni istalgan hududdagi Davlat xizmatlari markazlari orqali olish mumkin.")}
              </div>
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default GetKeys;
