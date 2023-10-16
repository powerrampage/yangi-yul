import { NumericFormat } from 'react-number-format';

type PropsType = {
	num?: number | string;
};

const FormatNumber = ({ num = 0 }: PropsType) => {
	return <NumericFormat thousandSeparator=" " displayType="text" value={num} />;
};

export default FormatNumber;
