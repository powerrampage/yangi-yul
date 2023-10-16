import { Tooltip } from "antd";
import { Controller } from "react-hook-form";
import { PaperClipOutlined } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";

import classes from "./UploadFile.module.scss";

type PropsType = {
  file?: any;
  field: string;
  control: any;
  label?: any;
  inputProps?: any;
  required?: boolean;
  isLarge?: boolean;
}

const UploadFile = ({ file, field, control, label, inputProps, required = false, isLarge = false }: PropsType) => {
  const { t } = useTranslation();

  const text = file ? file?.name : (label || t("Файл бириктиринг"));
  const id = `${field}_id`;

  return (
    <>
      <Tooltip title={text}>
        <div>
          <label htmlFor={id} className={classes.label + (isLarge ? ` ${classes.lg}` : "")}>
            <span className={classes.text}>{text}</span>
            <span className={classes.icon}><PaperClipOutlined /></span>
          </label>
        </div>
      </Tooltip>
      <div className={classes.hiddenInput}>
        <Controller
          name={field} control={control} rules={{ required }}
          render={({ field }) => <input value={undefined} id={id} type="file" onChange={e => field.onChange(e.target?.files?.[0])} {...inputProps} />}
        />
      </div>
    </>
  )
}

export default UploadFile;