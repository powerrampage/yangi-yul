import {Dropdown} from "antd";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import classes from "./Header.module.scss";
import ArrowDown from "@/assets/svg/arrow-down.svg";
import UZ from "@/assets/svg/UZ.svg";
import RU from "@/assets/svg/RU.svg";

const Languages = () => {
    const {lang} = useTranslation();

    const handleChangeLocale = (lang: string) => {
        setLanguage(lang);
    };

    const items: any[] = [
        {
            key: "ru",
            label: (
                <span className="pointer" onClick={() => handleChangeLocale("ru")}>
          Русский
        </span>
            ),
        },
        {
            key: "uz",
            label: (
                <span className="pointer" onClick={() => handleChangeLocale("uz")}>
          O'zbekcha
        </span>
            ),
        },
    ];

    return (
        <Dropdown menu={{items}} placement="bottom" arrow>
            <span className={classes.local}>
       {lang === "uz" ? <UZ className="color"/> : <RU className="color"/> } &nbsp;{lang === "uz" ? "UZ" : "РУ"}&nbsp;<ArrowDown/>
      </span>
        </Dropdown>
    );
};

export default Languages;
