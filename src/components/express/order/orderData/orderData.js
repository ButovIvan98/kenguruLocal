import React from 'react';
import classes from './css/orderData.module.css';
import img from './img/bklsrv.png';
import bksImg from './img/bklsrv.png';
import Rating from "@material-ui/lab/Rating";

const OrderData = (props) => {
    return <div className={'row self-align-center'}>
        <div className={'col-lg-3  text-center self-align-center'}>
            <img src={bksImg}/>
        </div>
        <div className={'col-lg-3 mt-lg-0 mt-2 col-6 self-align-center'}>
            <span className={classes.header1}>
                Байкал Сервис
            </span>
            <br/>
            <span className={classes.header2}>
                Автотранспорт
            </span>
        </div>
        <div className={'col-lg-2 col-6 mt-lg-0 mt-2'}>
            <span className={classes.header1}>
                <Rating
                    name="simple-controlled"
                    value={4.5}
                    precision={0.1}
                    readOnly={true}
                />
            </span>
            <br/>
            <span className={classes.header2}>
                Рейтинг
            </span>
        </div>
        <div className={'col-lg-2 col-6 mt-lg-0 mt-2\''}>
            <span className={classes.header1}>
                8 дней
            </span>
            <br/>
            <span className={classes.header2}>
                Срок доставки
            </span>
        </div>
        <div className={'col-lg-2 col-6 mt-lg-0 mt-2\''}>
            <span className={classes.header1}>
                Склад-Склад
            </span>
            <br/>
            <span className={classes.header2}>
                Доставка
            </span>
        </div>
    </div>
}
export default OrderData;
