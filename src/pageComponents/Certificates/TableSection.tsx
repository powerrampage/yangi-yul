import { Table } from "@/components";
import useTranslation from "next-translate/useTranslation";

const TableSection = () => {
  const { t } = useTranslation();

  const data: any[] = [];
  const columns: any[] = [
    {
      title: t("Sertifikat seriya raqami"),
      dataIndex: "sdffds",
    },
    {
      title: t("Sertifikat yaratuvchisi FIOsi"),
      dataIndex: "sdffds",
    },
    {
      title: t("STIR"),
      dataIndex: "sdffds",
    },
    {
      title: t("Sertifikat egasi FIOsi"),
      dataIndex: "sdffds",
    },
    {
      title: t("Sertifikat muddati"),
      children: [
        {
          title: t("dan"),
          dataIndex: "sdffds",
        },
        {
          title: t("gacha"),
          dataIndex: "sdffds",
        },
      ],
    },
    {
      title: t("Holati"),
      dataIndex: "sdffds",
    },
  ];

  return (
    <div className="mt-30">
      <Table columns={columns} dataSource={data} scroll={{x: 1200, y:"auto"}} />
    </div>
  );
};

export default TableSection;
