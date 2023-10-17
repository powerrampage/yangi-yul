import React from 'react';
import classes from './NewsCard.module.scss';
import Image from "next/image";

import Eye from "@/assets/svg/eye.svg";
import Next from "@/assets/svg/next.svg";
import useTranslation from "next-translate/useTranslation";

const NewsCard = ({title, description}: any) => {
    const {t} = useTranslation();
    return (
        <div className={classes.news}>
            <span className={classes.count}>
                <Eye/> &nbsp; 1 135
            </span>
            <Image
                className={classes.img}
                src={"/images/img.png"} alt="ii" width={400} height={300} objectFit='cover'/>
            <div className={classes.gradient}>
                <div className={classes.content}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <span className={classes.more}>
                Batafsil&nbsp; <Next/>
            </span>
        </div>
    );
};

export default NewsCard;