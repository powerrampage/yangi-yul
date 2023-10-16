import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import { Col, Row, Space, Table as AntTable, TableProps } from "antd";

import classes from "./Table.module.scss";

type Props = TableProps<any> & {
  bordered?: boolean;
  width?: boolean;
  height?: number;
  scrollable?: boolean;
  wrapClassName?: string;
  filter?: any;
  defaultSize?: any;
  defaultSortOrder?: any;
  breadcrumbs?: any;
};

const Table: FC<Props> = ({
  bordered = true,
  scrollable,
  height = 300,
  wrapClassName,
  defaultSize = "10",
  filter = false,
  dataSource,
  defaultSortOrder,
  breadcrumbs,
  ...props
}) => {
  const { t } = useTranslation();

  const classnames = `${wrapClassName} ${classes.table} ${scrollable ? classes.scrollTable : ""}`;

  return (
    <div className={classnames}>
      {filter && (
        <div className="mb20">
          <Row justify="space-between" align="middle" gutter={[10, 10]}>
            <Col>
              <div className={classes.icon}>
                <Space size="middle">{filter?.left}</Space>
              </div>
            </Col>
            <Col>
              <Space size="middle">{filter?.right}</Space>
            </Col>
          </Row>
        </div>
      )}
      {breadcrumbs && <div className="mb20">{breadcrumbs}</div>}
      <AntTable
        scroll={scrollable ? { x: 2000, y: height } : undefined}
        dataSource={Array.isArray(dataSource) ? dataSource : []}
        {...props}
        locale={{
          triggerDesc: t("Yuqoridan pastga saralash") as string,
          triggerAsc: t("Pastdan yuqoriga saralash") as string,
          cancelSort: t("Saralashni bekor qilish") as string,
          emptyText: t("Ma'lumot mavjud emas"),
        }}
        size={props?.size}
        bordered={bordered}
        pagination={false}
      />
    </div>
  );
};

export default Table;
