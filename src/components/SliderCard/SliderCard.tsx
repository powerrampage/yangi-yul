import React from 'react';
import classes from './SliderCard.module.scss';
import Image from "next/image";
import {Button} from "antd";
import useTranslation from "next-translate/useTranslation";
import Previous from "@/assets/svg/previous.svg";
import Next from "@/assets/svg/next.svg";

const SliderCard = () => {
    const {t} = useTranslation();

    return (
        <div className={classes.slider}>
            <Image
                className={classes.img}
                src={"/images/img.png"} alt="ii" width={850} height={580} objectFit='cover'/>
            <div className={classes.gradient}>
                <div className={classes.content}>
                    <Button >{t("so’ngi yangiliklar")}</Button>
                    <p className={classes.date}>09.10.2023 й.</p>
                    <h3 className={classes.title}>Kuz - qish mavsumiga tayyorgarlik</h3>
                    <p>Bugun Yangiyo‘l shahar hokimi boshchiligida shahar prokurori, shahar IIB boshlig‘i, hokim
                        o‘rinbosarlari va shahardagi barcha korxona-tashkilot rahbarlari ishtirokida uchrashuv
                        o‘tkazildi. Bunda kuz-qish mavsumiga tayyorgarlik ko‘rish borasida amalga oshirilayotgan ishlar
                        holati tanqidiy-tahlil qilindi. Shuningdek, uchrashuv davomida kommunal sohadagi mavjud
                        kamchiliklar o‘z vaqtida bajarilmaganligi yuzasidan tegishli mas'ullarga qatiy ogohlatirishlar
                        berildi.</p>
                    <div className={classes.action}>
                    <span className={classes.previous}>
                        <Previous/>
                        &nbsp;
                        {t("Oldingisi")}
                    </span>
                        <span className={classes.next}>
                        {t("Keyingisi")}
                            &nbsp;
                            <Next/>
                    </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SliderCard;