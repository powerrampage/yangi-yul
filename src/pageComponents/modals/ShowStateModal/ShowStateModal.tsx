import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Col, Input, Row } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";

import { Modal } from "@/components";
import classes from "./ShowStateModal.module.scss";

type PropsType = {
  open: boolean;
  appNumber?: number;
  close: () => void;
}

const ShowStateModal = ({open, appNumber, close}: PropsType) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [number, setnumber] = useState<any>(appNumber);
  const [code, setcode] = useState("");

  const onSubmit = () => {
    console.log(number, code);
    router.push(`/appeal/state`);
  }

  return (
    <Modal open={open} onCancel={close} title={t("Аризани қидириш")} width={600}>
      <Row gutter={20}>
        <Col xs={24} md={8}>
          <div className="mb-5">{t("Аризани рақами")}</div>
          <Input value={number} onChange={e => setnumber(e.target.value)} size="large" />
        </Col>
        <Col xs={24} md={16}>
          <div className="mb-5">{t("Rasmdagi kodni kiriting")}</div>
          <Row gutter={15}>
            <Col xs={8}>
              <div className={classes.image_box}></div>
            </Col>
            <Col xs={4}>
              <Button icon={<SyncOutlined />} size="large" />
            </Col>
            <Col xs={12}>
              <Input value={code} onChange={e => setcode(e.target.value)} placeholder={t("kiriting")} size="large" />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="mt-30 text-center">
        <Button size="large" shape="round" type="primary" onClick={onSubmit} disabled={!number || !code}>{t("Қидириш")}</Button>
      </div>
    </Modal>
  )
}

export default ShowStateModal;