import React from 'react';
import classes from './ServiceCard.module.scss'

const ServiceCard = ({title, icon}:any) => {
    return (
        <div className={classes.service_card}>
            <div className={classes.box}>
                {icon}
            </div>
            <span className={classes.title}>
                {title}
            </span>
        </div>
    );
};

export default ServiceCard;