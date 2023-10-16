import { PatternFormat } from "react-number-format";

import classes from "./PhoneInput.module.scss";

type PropsType = {
  format?: string;
  large?: boolean;
  otherProps?: any;
}

const PhoneInput = ({ format = "(##) ### ## ##", large = false, otherProps }: PropsType) => {
	return <PatternFormat className={classes.input + (large ? ` ${classes.large}` : "")} allowEmptyFormatting mask="_" format={format} {...otherProps} />;
};

export default PhoneInput;
