import React from 'react';
import classes from './css/add_address.module.css';
import TextField from '@material-ui/core/TextField';
import searchImg from '../../../common/searchAndFilter/img/search.png';
import {NavLink} from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AddAddress = (props) => {

    return <div className={'container-fluid' + ' ' + classes.styleBlock}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 mt-2'}>
                    <h3 className={classes.headerText}>
                        Добавить адрес
                    </h3>
                </div>
            </div>
            <div className={'row mt-4' + ' ' + classes.block}>
                <div className={'col-9'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <h5>
                                Заполните адрес
                            </h5>
                        </div>
                        <div className={'col-lg-6 mt-lg-2'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Страна" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого города'}
                            />
                        </div>
                        <div className={'col-lg-6 mt-lg-2'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Город" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого города'}
                            />
                        </div>
                        <div className={'col-lg-12 mt-3'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Улица" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого города'}
                            />
                        </div>
                        <div className={'col-lg-4 mt-3'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Дом" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого города'}
                            />
                        </div>
                        <div className={'col-lg-4 mt-3'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Офис" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого города'}
                            />
                        </div>
                        <div className={'col-lg-4 mt-3'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Индекс" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого города'}
                            />
                        </div>
                        <div className={'col-lg-12 mt-lg-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Компания"
                                variant="outlined"
                            />
                        </div>
                        <div className={'col-lg-12 mt-lg-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Контактное лицо"
                                variant="outlined"
                            />
                        </div>
                        <div className={'col-lg-12 mt-lg-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Комментарий"
                                variant="outlined"
                            />
                        </div>
                        <div className={'col-lg-6 mt-lg-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Телефон"
                                variant="outlined"
                            />
                        </div>
                        <div className={'col-lg-6 mt-lg-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Доп. телефон"
                                variant="outlined"
                            />
                        </div>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className={'row'}>

                    </div>
                </div>
            </div>
        </div>
    </div>
};
export default AddAddress;