import React  from "react";
import classes from './addCompany.module.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InfoManager from "../../common/infoManager/infoManager";
import {NavLink} from "react-router-dom";

const AddCompany =(props)=>{
    return <div className={'container-fluid' + ' ' + classes.mainBlock}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 mt-3'}>
                    <h2>
                        Добавление компании
                    </h2>
                </div>
                <div className={'col-9 mt-3' + ' ' + classes.block}>
                    <div className={'row'}>
                        <div className={'col-12 text-center'}>
                            <h5 >
                                Информация о компании
                            </h5>
                        </div>
                        <div className={'col-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-6'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="ИНН" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого ИНН'}
                            />
                        </div>
                        <div className={'col-6'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Название" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого названия'}
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="ОГРН" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого ОГРН'}
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Юридический адрес" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого адреса'}
                            />
                        </div>
                        <div className={'col-lg-6 mt-2'}>
                            <span> <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Юр. адрес совпадает с фактическим"
                                className={classes.labelCheckbox}
                            /></span><br/>
                            <span>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Плательщик НДС"
                                    className={classes.labelCheckbox}

                                />
                            </span>
                        </div>
                        <div className={'col-lg-6 mt-2'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Фактический адрес" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого ИНН'}
                            />
                        </div>
                        <div className={'col-12 mt-4 text-center'}>
                            <h5 >
                               Информация о банковском счете
                            </h5>
                        </div>
                        <div className={'col-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-6 mt-2'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="БИК" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого ОГРН'}
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <Autocomplete
                                id="combo-box-demo"
                                //options={props.calculate.sendingCityList.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Расчетный счет" variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого адреса'}
                            />
                        </div>
                        <div className={'col-12 mt-4 text-center'}>
                            <h5 >
                                Информация об уполномоченном лице
                            </h5>
                        </div>
                        <div className={'col-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                className={classes.inputData}
                                label="Фамилия"
                                variant="outlined"
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                className={classes.inputData}
                                label="Имя"
                                variant="outlined"
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                className={classes.inputData}
                                label="Отчество"
                                variant="outlined"
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                className={classes.inputData}
                                label="Должность"
                                variant="outlined"
                            />
                        </div>
                        <div className={'col-lg-12 mt-3 text-center self-align-center'}>
                            <NavLink to={'/addCompany/loadingFile'} className={classes.addAddress}>
                                <span>Далее</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-3 mt-3'}>
                    <InfoManager/>
                </div>
            </div>
        </div>
    </div>
}
export default AddCompany;