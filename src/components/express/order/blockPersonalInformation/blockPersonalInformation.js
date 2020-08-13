import React from "react";
import classes from './css/blockPersonalInformation.module.css';
import {TextField} from "@material-ui/core";
import InputMask from "react-input-mask";
import classesStyle from "../../personalAccount/setting/css/setting.module.css";

const BlockPersonalInformation = (props) => {
    let seriesAndNumber=props.value.series + props.value.number
    return <div className={'row'}>
        <div className={'col-lg-4 mt-lg-3 mt-2'}>
            <TextField
                label="Фамилия"
                variant="outlined"
                InputLabelProps={{
                    shrink: String(props.value.surname).length!==0 ? true :false
                }}
                className={classes.input}
                onBlur={(e) => {
                    props.validSurname(e.target.value)
                }}
                value={props.value.surname}
                onChange={(e) => {
                    props.updateSurname(e.target.value)
                }}
                error={props.value.validSurname ? false : true}
                helperText={props.value.validSurname ? '' : 'Укажите фамилию'}
            />
        </div>
        <div className={'col-lg-4 mt-lg-3 mt-2'}>
            <TextField
                label="Имя"
                variant="outlined"
                className={classes.input}
                InputLabelProps={{
                    shrink: String(props.value.name).length!==0 ? true :false
                }}
                onBlur={(e) => {
                    props.validName(e.target.value)
                }}
                value={props.value.name}
                onChange={(e) => {
                    props.updateName(e.target.value)
                }}
                error={props.value.validName ? false : true}
                helperText={props.value.validName ? '' : 'Укажите имя'}
            />
        </div>
        <div className={'col-lg-4 mt-lg-3 mt-2'}>
            <TextField
                label="Отчество"
                variant="outlined"
                className={classes.input}
                InputLabelProps={{
                    shrink: String(props.value.middleName).length!==0 ? true :false
                }}
                value={props.value.middleName}
                onChange={(e) => {
                    props.updateMiddleName(e.target.value)
                }}
            />
        </div>
        <div className={'col-lg-3 mt-lg-3 mt-2'}>
            <InputMask
                mask="+7(999)999 99 99"
                maskChar=" "
                onBlur={(e) => {
                    props.validPhone(e.target.value)
                }}
                onChange={(e) => {
                    props.updatePhone(e.target.value)
                }}
                value={props.value.phone}
            >
                <TextField
                    className={classesStyle.input}
                    label="Телефон"
                    InputLabelProps={{
                        shrink: String(props.value.phone).length!==0 ? true :false
                    }}
                    variant="outlined"
                    type={"tel"}
                    disableUnderline
                    error={props.value.validPhone ? false : true}
                    helperText={props.value.validPhone ? '' : 'Укажите телефон'}
                />
            </InputMask>
        </div>
        <div className={'col-lg-3 mt-lg-3 mt-2'}>
            <InputMask mask="+7(999)999 99 99"
                       maskChar=" "
                       onChange={(e) => {
                           props.updateAdditionalPhone(e.target.value)
                       }}
                       value={props.value.additionalPhone}
            >
                <TextField
                    className={classesStyle.input}
                    label="Доп. телефон"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: String(props.value.additionalPhone).length!==0 ? true :false
                    }}
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
                InputLabelProps={{
                    shrink: String(props.value.company).length!==0 ? true :false
                }}
                className={classes.input}
                value={props.value.company}
                onChange={(e) => {
                    props.updateCompany(e.target.value)
                }}
            />
        </div>
        <div className={'col-12'}>
                <TextField
                    label="Комментарий"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: String(props.value.comment).length!==0 ? true :false
                    }}
                    className={classes.input}
                    value={props.value.comment}
                    onChange={(e) => {
                        props.updateComment(e.target.value)
                    }}
                />
        </div>
        {!props.delivery
            ?  <div className={'col-12 mt-3'}>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <InputMask mask="9999 999999"
                                   maskChar=" "
                                   onChange={(e) => {
                                       console.log(props)
                                       props.updateSeriesAndNumberPassport(e.target.value);
                                   }}
                                   value={seriesAndNumber}
                        >
                            <TextField
                                className={classesStyle.input}
                                label="Серия и номер паспорта"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: String(seriesAndNumber).length!==0 ? true :false
                                }}
                                disableUnderline
                                //error={props.setting.validNumber ? false : true}
                            />
                        </InputMask>
                    </div>
                    <div className={'col-4'}>
                        <InputMask mask="9999-9999-99"
                                   maskChar=" "
                                   onChange={(e) => {
                                       props.innCompany(e.target.value)
                                   }}
                                   value={props.value.innLegalEntity}
                        >
                            <TextField
                                className={classesStyle.input}
                                label="ИНН юр.лица"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: String(props.value.innLegalEntity).length!==0 ? true :false
                                }}
                                disableUnderline
                                //error={props.setting.validNumber ? false : true}
                            />
                        </InputMask>
                    </div>
                    <div className={'col-4'}>
                        <TextField
                            label="Email получателя"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: String(props.value.emailRecipient).length!==0 ? true :false
                            }}
                            className={classes.input}
                            value={props.value.emailRecipient}
                            onChange={(e) => {
                                props.emailRecipient(e.target.value)
                            }}
                        />
                    </div>
                </div>
            </div>
            : ''
        }
    </div>
}
export default BlockPersonalInformation