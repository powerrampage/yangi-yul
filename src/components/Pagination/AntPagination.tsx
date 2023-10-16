import { FC } from "react";

import useTranslation from "next-translate/useTranslation";
import { Pagination, PaginationProps } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

type Props = PaginationProps & {
	itemRender?: any;
};

const AntPagination: FC<Props> = ({ ...props }) => {
	const { t }: any = useTranslation();

	function itemRender(current: number, type: string, originalElement: any) {
		if (type === "prev") {
			return (
				<span>
					&nbsp;<LeftOutlined /> {t("Oldingi")}
				</span>
			);
		}
		if (type === "next") {
			return (
				<span>
					{t("Keyingi")} <RightOutlined />&nbsp;
				</span>
			);
		}
		return originalElement;
	}

	return <Pagination className={"ant-pagination"} showSizeChanger={false} itemRender={itemRender} {...props} />;
};

export default AntPagination;
