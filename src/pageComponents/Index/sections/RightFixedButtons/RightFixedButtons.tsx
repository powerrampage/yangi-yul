import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { CreditCardOutlined, DownloadOutlined, KeyOutlined, UnorderedListOutlined, UsbOutlined } from "@ant-design/icons";

import classes from "./Style.module.scss";

const RightFixedButtons = () => {
  const { t } = useTranslation();
  const [open, setopen] = useState(true);
  const router = useRouter();

  const onScroll = (e: any) => {
    const top = e?.srcElement?.documentElement?.scrollTop;

    if (top > 300) {
      setopen(false);
    } else {
      setopen(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buttons = [
    {
      title: t("To'lash"),
      icon: <CreditCardOutlined />,
      onClick: () => router.push(`/pay`),
    },
    {
      title: t("ERI Parolini olish"),
      icon: <KeyOutlined />,
      onClick: () => router.push(`/get-key-password`),
    },
    {
      title: t("Token Parolini olish"),
      icon: <UsbOutlined />,
      onClick: () => router.push(`/get-usb-key-password`),
    },
    {
      title: t("Sertifikatlar reestri"),
      icon: <UnorderedListOutlined />,
      onClick: () => router.push(`/certificates`),
    },
    {
      title: t("E-IMZO"),
      icon: <DownloadOutlined />,
      onClick: () => {},
    },
  ];

  return (
    <div className={classNames(classes.wrapper, { [classes.open]: open })}>
      {buttons?.map((b, k) => (
        <button key={k} onClick={b.onClick} className={classes.button}>
          {b.icon}
          <span>{b.title}</span>
        </button>
      ))}
    </div>
  );
};

export default RightFixedButtons;
