import React from 'react';
import classes from './css/blockDate.module.css';
import Autocomplete from "@material-ui/lab/Autocomplete";
import {TextField} from "@material-ui/core";

const BlockDate =(props)=>{
    return <div className={'row'}>
        <div className={'col-lg-4 mt-3'}>
            <Autocomplete
                id="combo-box-demo"
                //options={props.calculate.sendingCityList.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Страна" variant="outlined"/>}
                className={classes.inputStyle}
                noOptionsText={'Нет такого города'}
            />
        </div>
        <div className={'col-lg-4 mt-3'}>
            <Autocomplete
                id="combo-box-demo"
                //options={props.calculate.sendingCityList.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Город" variant="outlined"/>}
                className={classes.inputStyle}
                noOptionsText={'Нет такого города'}
            />
        </div>
        <div className={'col-lg-4 mt-3'}>
            <Autocomplete
                id="combo-box-demo"
                //options={props.calculate.sendingCityList.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Улица" variant="outlined"/>}
                className={classes.inputStyle}
                noOptionsText={'Нет такого города'}
            />
        </div>
        <div className={'col-lg-4 mt-3'}>
            <TextField
                label="Дом, корпус"
                variant="outlined"
                className={classes.input}
            />
        </div>
        <div className={'col-lg-4 mt-3'}>
            <TextField
                label="Квартира, офис"
                variant="outlined"
                className={classes.input}
            />
        </div>
        <div className={'col-lg-4 mt-3'}>
            <TextField
                label="Индекс"
                variant="outlined"
                className={classes.input}
            />
        </div>
        <div className={'col-lg-12 mt-lg-3'}>
            <TextField
                label="Комментарий"
                variant="outlined"
                className={classes.input}
            />
        </div>
    </div>
}
export default BlockDate