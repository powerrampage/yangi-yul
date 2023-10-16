import React from 'react';
import classes from "./InfoLine.module.scss";
import {Container} from "@/components";

const InfoLine = () => {
    return (
        <div className={classes.line}>
            <Container>
              <div className={classes.box}>
                  <span>Sayt test holatida ishlamoqda !</span>
                  <span>Sayt test holatida ishlamoqda !</span>
                  <span>Sayt test holatida ishlamoqda !</span>
              </div>
            </Container>
        </div>
    );
};

export default InfoLine;