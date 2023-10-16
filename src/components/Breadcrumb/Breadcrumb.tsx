import Link from "next/link";
import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";
import { HomeOutlined, LeftOutlined } from "@ant-design/icons";
import { Breadcrumb as AntBreadcrumb, Button, Space } from "antd";

type Item =
  | {
      label: any;
      link?: string;
    }
  | undefined;

type PropsType = {
  list?: Item[];
  hasBack?: boolean;
  hasHome?: boolean;
};

const Breadcrumb = ({ list, hasBack, hasHome = true }: PropsType) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Space size="large">
      {hasBack && (
        <Button type="text" icon={<LeftOutlined />} onClick={() => router.back()}>
          {t("Orqaga")}
        </Button>
      )}
      <AntBreadcrumb separator="-">
        {hasHome && (
          <AntBreadcrumb.Item key={-1}>
            <Link href={"/"}>
              <HomeOutlined />
            </Link>
          </AntBreadcrumb.Item>
        )}

        {list?.map((item, k) => {
          if (!!item) {
            return (
              <AntBreadcrumb.Item key={k}>{item?.link ? <Link href={item.link}>{item.label}</Link> : <span>{item.label}</span>}</AntBreadcrumb.Item>
            );
          }
          return <></>;
        })}
      </AntBreadcrumb>
    </Space>
  );
};

export default Breadcrumb;
