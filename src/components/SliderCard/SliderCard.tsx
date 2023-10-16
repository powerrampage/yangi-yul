import React from 'react';
import classes from './SliderCard.module.scss';
import Image from "next/image";

const SliderCard = () => {
    return (
        <div className={classes.slider}>
            <Image
                className={classes.img}
                src={"/images/img.png"} alt="ii" width={850} height={580}     objectFit='cover'/>

            <div className={classes.gradient}>
                <div className={classes.content}>

                </div>

            </div>
        </div>
    );
};

export default SliderCard;