import React from "react";
import classes from './css/order.module.css';
import OrderData from "./orderData/orderData";
import {TextField} from "@material-ui/core";
import BlockDate from "./blockDate/blockDate";
import BlockPersonalInformation from "./blockPersonalInformation/blockPersonalInformation";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Order = (props) => {
    return <div className={'container-fluid' + classes.blockMain}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-12 mt-3'}>
                    <h2 className={classes.header}>Оформление заказа</h2>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-lg-9 col-12'}>
                    <div className={'row mt-3 ml-0 mr-0 ' + ' ' + classes.blockMain}>
                        <div className={'col-lg-12 mt-4 self-align-center'}>
                            <OrderData/>
                        </div>
                    </div>
                    <div className={'row mt-3 ml-0 mr-0 ' + ' ' + classes.blockMain}>
                        <div className={'col-lg-6 mt-3'}>
                            <h5 className={classes.headerText}>Адрес отправителя</h5>
                        </div>
                        <div className={'col-lg-6 col-12 text-center text-lg-right mt-2'}>
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
                            <h5 className={classes.headerText}>Контактная информация отправителя</h5>
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
                    <div className={'row mt-3 ml-0 mr-0' + ' ' + classes.blockMain}>
                        <div className={'col-lg-6 mt-3'}>
                            <h5 className={classes.headerText}>Адрес получателя</h5>
                        </div>
                        <div className={'col-lg-6 col-12 text-center text-lg-right mt-2'}>
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
                    <div className={'row mt-3 ml-0 mr-0 mb-lg-0 mb-3' + ' ' + classes.blockMain}>
                        <div className={'col-lg-6 mt-3'}>
                            <h5 className={classes.headerText}>Дополнительные услуги</h5>
                        </div>
                        <div className={'col-lg-6 col-12 text-center text-lg-right mt-2'}>
                            <button className={classes.buttonAddressBook}>Выбрать из адресной книги</button>
                        </div>
                        <div className={'col-lg-12'}>
                            <div className={'row align-self-center'}>
                                <div className={'col-lg-6 align-self-center'}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                 name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Доставка лично в руки"
                                    />
                                </div>
                                <div className={'col-lg-6 align-self-center'}>
                                    <b>+ 300 ₽</b>
                                </div>
                            </div>
                            <div className={'row align-self-center'}>
                                <div className={'col-lg-6 align-self-center'}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                 name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Доставка лично в руки"
                                    />
                                </div>
                                <div className={'col-lg-6 align-self-center'}>
                                    <b>+ 300 ₽</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'row mt-3 ml-0 mr-0 mb-lg-0 mb-3' + ' ' + classes.blockMain}>
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
                                <div className={'col-6 mt-2'}>
                                    <span className={classes.text}>Стоимость</span>
                                </div>
                                <div className={'col-6 text-right mt-2'}>
                                    <span className={classes.textMoney}>100 000 ₽</span>
                                </div>
                                <div className={'col-6 mt-2'}>
                                    <span className={classes.text}>Страховка</span>
                                </div>
                                <div className={'col-6 text-right mt-2'}>
                                    <span className={classes.textMoney}>10 000 ₽</span>
                                </div>
                                <div className={'col-6 mt-2'}>
                                    <span className={classes.text}>Упаковка</span>
                                </div>
                                <div className={'col-6 text-right mt-2'}>
                                    <span className={classes.textMoney}>1 000 ₽</span>
                                </div>
                                <div className={'col-12 text-center mt-3 mb-3'}>
                                    <button className={classes.buttonPayment}>
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
