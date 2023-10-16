import { Empty as AntEmpty } from "antd";

import useTranslation from "next-translate/useTranslation";

const Empty = () => {
	const { t } = useTranslation();

	return <AntEmpty description={t("ma'lumot mavjud emas")} />;
};

export default Empty;
