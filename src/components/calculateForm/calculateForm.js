import React from 'react';
import classes from './calculateForm.module.css';
import Select from 'react-select'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import BlockDataCargo from './blockDataCargo/blockDataCargo';
import carImg from './img/deliver.png';
import boxImg from './img/box.png';

const CalculateForm = (props) => {
    //debugger
    let listCargo = Object.values(props.calculate.listCargo).map(option => (
        <BlockDataCargo
            updateWeight={props.weightData}
            updateHeight={props.heightData}
            updateWidth={props.widthData}
            updateVolume={props.volumeData}
            updateLenght={props.lenghtData}
            updateQuantity={props.quantityData}
            updateStatus={props.updateStatusParameters}
            validVolume={option.validVolume}
            validQuantity={option.validQuantity}
            validWidth={option.validWidth}
            validHeight={option.validHeight}
            validLenght={option.validLenght}
            validWeight={option.validWeight}
            weight={option.weight}
            height={option.height}
            volume={option.volume}
            lenght={option.lenght}
            status={option.status}
            width={option.width}
            quantity={option.quantity}
            id={option.id}
            props={props}/>
    ))
    return <div className={'container-fluid pl-0 pr-0' + ' ' + classes.mainBlock}>
        <div className={'container'}>
            <div className='row text-center'>
                <div className={'col-12 text-center mt-4 mb-3'}>
                    <h3 className={classes.header}>
                        Лучший способ заказать доставку<br/>
                        по самой выгодной цене
                    </h3>
                </div>
                <div className={'col-12' }>
                    <div className={classes.blockCalculate}>
                        <div className={'row '}>
                            <div className={'col-lg-5  pr-1 pl-1'}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={props.calculate.sendingCityList.map((option) => option.title)}
                                    renderInput={(params) => <TextField {...params} label="Город отправки груза"
                                                                        variant="outlined"/>}
                                    className={classes.inputStyle}
                                    noOptionsText={'Нет такого города'}
                                />
                            </div>
                            <div className={'col-lg-5 mt-lg-0 mt-2 pr-1 pl-1'}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={props.calculate.destinationCityList.map((option) => option.title)}
                                    renderInput={(params) => <TextField {...params} label="Город доставки груза"
                                                                        variant="outlined"/>}
                                    className={classes.inputStyle}
                                    noOptionsText={'Нет такого города'}
                                />
                            </div>
                            <div className={'col-lg-2 mt-lg-0 mt-2 pr-1 pl-1'}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={props.calculate.destinationCityList.map((option) => option.title)}
                                    renderInput={(params) => <TextField {...params} label="Тип груза"
                                                                        variant="outlined"/>}
                                    className={classes.inputStyle}
                                    noOptionsText={'Нет такого города'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-12'}>
                    <div className={classes.blockList}>
                        {listCargo}
                    </div>
                </div>
                <div className={'col-12 text-right '}>
                    <div className={classes.blockWhite}>
                        <button className={classes.addCargo}
                                onClick={() => (props.addCargo(props.calculate.listCargo.length))}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="1" d="M8 0V16M16 8H0" stroke="#183C51"/>
                            </svg>
                            Добавить груз
                        </button>
                    </div>
                </div>
                <div className={'col-12'}>
                    <div className={classes.blockBottomCalculate}>
                        <button className={classes.calculation}>Рассчитать</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.wrap}>
            <img src={carImg} className={classes.imgCar + ' ' + classes.truck}/>
            <img src={boxImg} className={classes.imgBox}/>
            <img src={boxImg} className={classes.imgBox + ' ' + classes.imgBox2}/>
        </div>
    </div>
}
export default CalculateForm;