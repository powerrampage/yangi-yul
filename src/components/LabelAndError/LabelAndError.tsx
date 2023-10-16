
import useTranslation from "next-translate/useTranslation";
import classes from "./Style.module.scss";

type Props = {
	label?: any;
	error?: any;
	message?: string | any;
	className?: string;
	children: any;
	required?: boolean;
};

const LabelAndError = ({ label, error, children, message, className, required = false }: Props) => {
	const { t } = useTranslation();

	return (
		<div className={classes.wrap + (className ? ` ${className}` : "")}>
			<label>
				{label} {required && <span className="red">*</span>}
			</label>
			{children}
			{!!error && <div className={classes.error}>{message || t("тўлдирилиши шарт")}</div>}
		</div>
	);
};

export default LabelAndError;
