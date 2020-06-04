import React from "react";
import classes from './css/blockPersonalInformation.module.css';
import {TextField} from "@material-ui/core";
import InputMask from "react-input-mask";
import classesStyle from "../../personalAccount/setting/css/setting.module.css";

const BlockPersonalInformation = (props)=>{
    return <div className={'row'}>
        <div className={'col-lg-4 mt-lg-3 mt-2'}>
            <TextField
                label="Фамилия"
                variant="outlined"
                className={classes.input}
            />
        </div>
        <div className={'col-lg-4 mt-lg-3 mt-2'}>
            <TextField
                label="Имя"
                variant="outlined"
                className={classes.input}
            />
        </div>
        <div className={'col-lg-4 mt-lg-3 mt-2'}>
            <TextField
                label="Отчество"
                variant="outlined"
                className={classes.input}
            />
        </div>
        <div className={'col-lg-3 mt-lg-3 mt-2'}>
            <InputMask mask="+7(999)999 99 99"
                       maskChar=" "
                // onChange={(e) => {
                //     props.updateNumber(e.target.value)
                // }}
                // value={props.setting.number}
            >
                <TextField
                    className={classesStyle.input}
                    label="Телефон"
                    variant="outlined"
                    type={"tel"}
                    disableUnderline
                    //error={props.setting.validNumber ? false : true}
                />
            </InputMask>
        </div>
        <div className={'col-lg-3 mt-lg-3 mt-2'}>
            <InputMask mask="+7(999)999 99 99"
                       maskChar=" "
                // onChange={(e) => {
                //     props.updateNumber(e.target.value)
                // }}
                // value={props.setting.number}
            >
                <TextField
                    className={classesStyle.input}
                    label="Доп. телефон"
                    variant="outlined"
                    type={"tel"}
                    disableUnderline
                    //error={props.setting.validNumber ? false : true}
                />
            </InputMask>
        </div>
        <div className={'col-lg-6 mt-lg-3 mb-3 mt-2'}>
            <TextField
                label="Компания"
                variant="outlined"
                className={classes.input}
            />
        </div>
    </div>
}
export default BlockPersonalInformation