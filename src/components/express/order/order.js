import React from "react";
import classes from './css/order.module.css';
import bksImg from './orderData/img/bklsrv.png';
import Rating from "@material-ui/lab/Rating";
import OrderData from "./orderData/orderData";
import {TextField} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import classesStyle from "../personalAccount/setting/css/setting.module.css";
import InputMask from "react-input-mask";
import BlockDate from "./blockDate/blockDate";
import BlockPersonalInformation from "./blockPersonalInformation/blockPersonalInformation";
import {Redirect} from "react-router-dom";

const Order = (props) => {
    return <div className={'container-fluid' + classes.blockMain}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-12 mt-3'}>
                    <h2>Оформление заказа</h2>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-lg-9 col-12'}>
                    <div className={'row mt-3' + ' ' + classes.blockMain}>
                        <div className={'col-lg-12 mt-4 self-align-center'}>
                            <OrderData/>
                        </div>
                    </div>
                    <div className={'row mt-3' + ' ' + classes.blockMain}>
                        <div className={'col-lg-6 mt-3'}>
                            <h5>Адрес отправителя</h5>
                        </div>
                        <div className={'col-lg-6 text-right mt-2'}>
                            <button className={classes.buttonAddressBook}>Выбрать из адресной книги</button>
                        </div>
                        <div className={'col-lg-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-lg-12'}>
                            <BlockDate
                                /*параметры*/
                            />
                        </div>
                        <div className={'col-lg-12 mt-3'}>
                            <h5>Контактная информация отправителя</h5>
                        </div>
                        <div className={'col-lg-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-lg-12 mb-lg-3'}>
                            <BlockPersonalInformation
                                /*Параметры*/
                            />
                        </div>
                    </div>
                    <div className={'row mt-3' + ' ' + classes.blockMain}>
                        <div className={'col-lg-6 mt-3'}>
                            <h5>Адрес получателя</h5>
                        </div>
                        <div className={'col-lg-6 text-right mt-2'}>
                            <button className={classes.buttonAddressBook}>Выбрать из адресной книги</button>
                        </div>
                        <div className={'col-lg-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-lg-12'}>
                            <BlockDate
                                /*параметры*/
                            />
                        </div>
                        <div className={'col-lg-12 mt-3'}>
                            <h5>Контактная информация получателя</h5>
                        </div>
                        <div className={'col-lg-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-lg-12 mb-lg-3'}>
                            <BlockPersonalInformation
                                /*Параметры*/
                            />
                        </div>
                    </div>
                    <div className={'row mt-3' + ' ' + classes.blockMain}>
                        <div className={'col-lg-12'}>
                            <div className={'row'}>
                                <div className={'col-lg-6 mt-3 mb-3'}>
                                    <TextField
                                        label="Дата забора"
                                        variant="outlined"
                                        type={'date'}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className={classes.input}
                                    />
                                </div>
                                <div className={'col-lg-6 mt-3 mb-3'}>
                                    <TextField
                                        label="Дата доставки"
                                        variant="outlined"
                                        type={'date'}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className={classes.input}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-3 mt-lg-3 col-12 '}>
                    <div className={'row' + ' ' + classes.scrollingBlock}>
                        <div className={'col-lg-12'}>
                            <div className={'row ml-0 mr-0' + ' ' + classes.blockMain }>
                                <div className={'col-lg-6 mt-2'}>
                                    <span className={classes.text}>Стоимость</span>
                                </div>
                                <div className={'col-lg-6 text-right mt-2'}>
                                    <span className={classes.textMoney}>100 000 ₽</span>
                                </div>
                                <div className={'col-lg-6 mt-2'}>
                                    <span className={classes.text}>Страховка</span>
                                </div>
                                <div className={'col-lg-6 text-right mt-2'}>
                                    <span className={classes.textMoney}>10 000 ₽</span>
                                </div>
                                <div className={'col-lg-6 mt-2'}>
                                    <span className={classes.text}>Упаковка</span>
                                </div>
                                <div className={'col-lg-6 text-right mt-2'}>
                                    <span className={classes.textMoney}>1 000 ₽</span>
                                </div>
                                <div className={'col-lg-12 text-center mt-3 mb-3'}>
                                    <button onClick={()=><Redirect from={'/order'} to={'/order/orderSent'}></Redirect>} className={classes.buttonPayment}>
                                        Оформить заказ за <br/>
                                        <b>111 000 ₽</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Order;
