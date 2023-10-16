import React from 'react';
import classes from './SecondCard.module.scss';
import Previous from "@/assets/svg/second_pre.svg";
import User from "@/assets/user.svg";
import Next from "@/assets/svg/second_next.svg";


const SecondCard = () => {
    return (
        <div className={classes.second_card}>
            <div className={classes.top}>
                    <span className={classes.previous}>
                        <Previous/>
                    </span>
                <div className={classes.img}>
                    <User/>
                </div>
                <span className={classes.next}>
                    <Next/>
                    </span>
            </div>
        </div>
    );
};

export default SecondCard;