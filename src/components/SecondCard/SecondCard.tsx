import React, {useRef} from 'react';
import classes from './SecondCard.module.scss';
import Previous from "@/assets/svg/second_pre.svg";
import Next from "@/assets/svg/second_next.svg";
import Image from "next/image";
import Slider from "react-slick";
import {Button, Row} from "antd";
import useTranslation from "next-translate/useTranslation";

const SecondCard = () => {
    const slider = useRef<any>(null);
    const {t} = useTranslation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        dotsClass: classes.button__bar,

    };


    return (
        <>
            <div className={classes.slider}>
                <Slider ref={slider} {...settings}>
                    {[...Array(4)].map((item: any, index: number) => (
                        <div key={index} className={classes.second_card}>
                            <div className={classes.top}>
                                <div className={classes.img}>
                                    <Image
                                           src={"/images/user.jpg"} alt="ii" width={100} height={250}
                                           objectFit='cover'/>
                                </div>
                            </div>

                            <div className={classes.body}>
                                <span className={classes.info}>Yangiyo’l shahar hokimi</span>
                                <h4>Sultonov Dilshod Shuhratovich</h4>
                                <ul className={classes.info_content}>
                                    <li>
                                        <p>Манзил: </p><span>Yangiyul shahri,Sharaf Rashidov ko‘chasi , 6-uy</span>
                                    </li>
                                    <li>
                                        <p>Телефон: </p><span>0 370 602-00-60</span>
                                    </li>
                                    <li>
                                        <p>e-mail: </p><span>d.shukhratovich@email.uz</span>
                                    </li>
                                    <li>
                                        <p>WEB sayt: </p><span>https://yangiyulshahar.uz</span>
                                    </li>
                                    <li>
                                        <p>Qabul kunlari: </p><span>Chorshanba 15:00 - 17:00 gacha</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className={classes.action}>
                    <span onClick={() => slider?.current?.slickPrev()} className={classes.previous}><Previous/></span>
                    <span onClick={() => slider?.current?.slickNext()} className={classes.next}><Next/></span>
                </div>

                <Row justify={"center"}>
                    <Button className={classes.send_button}>
                        {t("Murojaat yuborish")}
                    </Button>
                </Row>
            </div>


            {/*<Swiper*/}
            {/*    onSlideChange={() => console.log('slide change')}*/}
            {/*    onSwiper={(swiper) => console.log(swiper)}*/}
            {/*>*/}
            {/*    {[...new Array(100)].map((l, k) => (*/}
            {/*        */}
            {/*    ))}*/}
            {/*</Swiper>*/}
        </>

    );
};

export default SecondCard;