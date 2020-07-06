import {calculateAPI, CalculateAPI, cityAPI} from "../API/api";
import {updateObjectInArray} from "../components/utils/updateElementMassive";

let UPDATE_WIDTH = 'UPDATE_WIDTH';
let UPDATE_HEIGHT = 'UPDATE_HEIGHT';
let UPDATE_LENGHT = 'UPDATE_LENGHT';
let UPDATE_WEIGHT = 'UPDATE_WEIGHT';
let UPDATE_QUANTITY = 'UPDATE_QUANTITY';
let UPDATE_COMMENT = 'UPDATE_COMMENT';
let UPDATE_VOLUME = 'UPDATE_VOLUME';
let STATUS_CALCULATE = 'STATUS_CALCULATE';

let STATUS_DETAILED_PARAMETERS = 'STATUS_DETAILED_PARAMETERS';//Статус подробные параметры
let ADD_CARGO = 'ADD_CARGO';//Добавить поля
let DELETE_CARGO = 'DELETE_CARGO';//Удаление груза

const SEARCH_CITY_DEPARTURE = 'SEARCH_CITY_DEPARTURE';//Поиск города отправки
const SEARCH_CITY_DESTINATION = 'SEARCH_CITY_DESTINATION';//Поиск города доставки

let UPDATE_DATA = 'UPDATE_DATA';//Обновление данных
let UPDATE_TEXT_SENDING = 'UPDATE_TEXT_SENDING';//Город отправления
let UPDATE_TEXT_DESTINATION = 'UPDATE_TEXT_DESTINATION';//Город прибытия
let UPDATE_TYPE_CARGO='UPDATE_TYPE_CARGO';//Изменение типа груза

const ADD_LIST_RESULT = 'ADD_LIST_RESULT';//Результат расчета
const ADD_FILTER_CALCULATE='ADD_FILTER_CALCULATE';//Добавляется отсортированный массив (Дверь-Дверь). Когда пользователь нажал рассчитать ему предлагается сразу такой вариант
const CLEAR_LIST_RESULT = 'CLEAR_LIST_RESULT';//Очистка результатов поиска тк

const FILTER_LIST='FILTER_LIST'//Фильтрация результата рассчета.
const STATUS_FILTER='STATUS_FILTER'//Состояние статуса фильтра

const CLEAR_CARGO='CLEAR_CARGO';//Очистка списка грузов

let initialState = {
    cityOfDeparture: {
        listCity: [],
        city: {},
    },
    cityOfDestination: {
        listCity: [],
        city: [],
    },
    statusDetailedParameters: true,
    destinationCityList: [],
    statusCalculate: false,//статус калькуляции(идет расчет или нет)
    listCargo: [
        {
            id: 1,
            weight: null,
            volume: null,
            height: null,
            lenght: null,
            width: null,
            quantity: null,
            status: true,
            validWeight: null,
            validVolume: null,
            validHeight: null,
            validLenght: null,
            validWidth: null,
            validQuantity: null
        }
    ],
    typeCargo: null,
    resultCalculate: [],
    fullListCalculateResult:[],
    filterDeliveryOption:{
        filterWW:false,
        filterWD:false,
        filterDD:true,
        filterDW:false,
    },
    formResultCalculate:false
}
const CalculateFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CALCULATE:
            return {
                ...state,
                statusCalculate: action.bodyStatusCalculation,
                formResultCalculate: action.bodyStatusForm
            }
        case UPDATE_WIDTH:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdWidth, "id", {
                    width: action.bodyWidth,
                    validWidth: action.bodyValidWidth
                })
            };
        case STATUS_DETAILED_PARAMETERS:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdStatus, "id", {status: action.bodyStatusParameters})
            }
        case UPDATE_HEIGHT:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdHeight, "id", {
                    height: action.bodyHeight,
                    validHeight: action.bodyValidHeight
                })
            };
        case UPDATE_LENGHT:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdLenght, "id", {lenght: action.bodyLength})
            };
        case UPDATE_WEIGHT:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdWeight, "id", {
                    weight: action.bodyWeight,
                    validWeight: action.bodyValidWeight
                })
            }
        case UPDATE_QUANTITY:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdQuantity, "id", {
                    quantity: action.bodyQuantity,
                    validQuantity: action.bodyValidQuantity
                })
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                comment: action.bodyComment
            };
        case ADD_CARGO:
            return {
                ...state,
                listCargo: [
                    ...state.listCargo, {
                        id: action.bodyIdCargo,
                        weight: null,
                        volume: null,
                        height: null,
                        lenght: null,
                        width: null,
                        quantity: null,
                        status: true,
                        validWeight: null,
                        validVolume: null,
                        validHeight: null,
                        validLenght: null,
                        validWidth: null,
                        validQuantity: null
                    }
                ]
            }
        case DELETE_CARGO:
            return {
                ...state,
                listCargo: action.bodyResultCalculate
            }
        case UPDATE_TEXT_SENDING:
            return {
                ...state,
                cityOfDeparture: {
                    listCity: action.bodyListCityDeparture,
                    city: action.bodyCityDeparture
                }
            }
        case UPDATE_TEXT_DESTINATION:
            return {
                ...state,
                cityOfDestination: {
                    listCity: action.bodyListCityDestination,
                    city: action.bodyCityDestination
                }
            }
        case UPDATE_VOLUME:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdVolume, "id", {
                    volume: action.bodyVolume,
                    validVolume: action.bodyValidVolume
                })
            }
        case UPDATE_DATA:
            return {
                ...state,
                resultCalculate: action.dataBody
            }
        case SEARCH_CITY_DEPARTURE:
            return {
                ...state,
                cityOfDeparture: {
                    listCity: action.bodyListCityDeparture
                }
            }
        case SEARCH_CITY_DESTINATION:
            return {
                ...state,
                cityOfDestination: {
                    listCity: action.bodyListCityDestination
                }
            }
        case ADD_LIST_RESULT:
            return {
                ...state,
                fullListCalculateResult:[
                    ...state.fullListCalculateResult, {
                        id: action.bodyIdResult,
                        imgCompany: action.bodyImgCompany,
                        company: action.bodyCompanyName,
                        tariff: action.bodyTariffName,
                        rating: action.bodyRatingCompany,
                        deliveryTime: action.bodyDeliveryTime,
                        priceBefore: action.bodyPriceBefore,
                        priceAfter: action.bodyPriceAfter,
                        pickup: action.bodyPickup,
                        delivery: action.bodyDelivery
                    }
                ]
            }
        case ADD_FILTER_CALCULATE:
            return {
                ...state,
                resultCalculate: [
                    ...state.resultCalculate, {
                        id: action.bodyIdResult,
                        imgCompany: action.bodyImgCompany,
                        company: action.bodyCompanyName,
                        tariff: action.bodyTariffName,
                        rating: action.bodyRatingCompany,
                        deliveryTime: action.bodyDeliveryTime,
                        priceBefore: action.bodyPriceBefore,
                        priceAfter: action.bodyPriceAfter,
                        pickup: action.bodyPickup,
                        delivery: action.bodyDelivery
                    }
                ]
            }
        case CLEAR_LIST_RESULT:
            return {
                ...state,
                resultCalculate: [],
                fullListCalculateResult:[]
            }
        case FILTER_LIST:
            return {
                ...state,
                resultCalculate: action.bodyResultFilter
            }
        case STATUS_FILTER:
            return {
                ...state,
                filterDeliveryOption: {
                    filterWW: action.bodyFilterWW,
                    filterWD: action.bodyFilterWD,
                    filterDD: action.bodyFilterDD,
                    filterDW: action.bodyFilterDW,
                }
            }
        case UPDATE_TYPE_CARGO:
            return {
                ...state,
                typeCargo: action.bodyTypeCargo
            }
        default:
            return {

                ...state
            }
    }
    return state;
};


const updateWidth = (width, id, valid) => ({
    type: UPDATE_WIDTH,
    bodyWidth: width,
    bodyIdWidth: id,
    bodyValidWidth: valid
});
const updateVolume = (volume, id, valid) => ({
    type: UPDATE_VOLUME,
    bodyVolume: volume,
    bodyIdVolume: id,
    bodyValidVolume: valid
})
const updateHeight = (height, id, valid) => ({
    type: UPDATE_HEIGHT,
    bodyHeight: height,
    bodyIdHeight: id,
    bodyValidHeight: valid
});
const updateLength = (length, id, valid) => ({
    type: UPDATE_LENGHT,
    bodyLength: length,
    bodyIdLenght: id,
    bodyValidLenght: valid
});
const updateWeight = (weight, id, valid) => ({
    type: UPDATE_WEIGHT,
    bodyWeight: weight,
    bodyIdWeight: id,
    bodyValidWeight: valid
});
const updateQuantity = (quantity, id, valid) => ({
    type: UPDATE_QUANTITY,
    bodyQuantity: quantity,
    bodyIdQuantity: id,
    bodyValidQuantity: valid
});
export const updateTypeCargo = (typeCargo)=>({type:UPDATE_TYPE_CARGO,bodyTypeCargo:typeCargo});

const addCargoData = (value) => ({type: ADD_CARGO, bodyIdCargo: value});
const deleteCargo = (value) => ({type: DELETE_CARGO, bodyResultCalculate: value})

const updateStatusCalculation = (status,valueForm) => ({type: STATUS_CALCULATE, bodyStatusCalculation: status, bodyStatusForm:valueForm});//Изменение статуса идет в данный момент расчет или нет

const addListCalculateResult = (id, img, company, tariff, rating, time, priceBefore, priceAfter, pickup, delivery) => ({
    type: ADD_LIST_RESULT,
    bodyIdResult: id,
    bodyImgCompany: img,
    bodyCompanyName: company,
    bodyTariffName: tariff,
    bodyRatingCompany: rating,
    bodyDeliveryTime: time,
    bodyPriceBefore: priceBefore,
    bodyPriceAfter: priceAfter,
    bodyPickup: pickup,
    bodyDelivery: delivery
});
const addListFilterResult = (id, img, company, tariff, rating, time, priceBefore, priceAfter, pickup, delivery) => ({
    type: ADD_FILTER_CALCULATE,
    bodyIdResult: id,
    bodyImgCompany: img,
    bodyCompanyName: company,
    bodyTariffName: tariff,
    bodyRatingCompany: rating,
    bodyDeliveryTime: time,
    bodyPriceBefore: priceBefore,
    bodyPriceAfter: priceAfter,
    bodyPickup: pickup,
    bodyDelivery: delivery
});
const clearListResult = () => ({type: CLEAR_LIST_RESULT});
const updateCityDepartureInformation = (city, listCity) => ({
    type: UPDATE_TEXT_SENDING,
    bodyCityDeparture: city,
    bodyListCityDeparture: listCity
});//Добавление полной информации о городе отправления груза
const updateCityDestinationInformation = (city, listCity) => ({
    type: UPDATE_TEXT_DESTINATION,
    bodyCityDestination: city,
    bodyListCityDestination: listCity
});//Добавление полной информации о городе доставки

const updateListCityDeparture = (list) => ({type: SEARCH_CITY_DEPARTURE, bodyListCityDeparture: list});//Добавление списка поиска городов отправки груза
const updateListCityDestination = (list) => ({type: SEARCH_CITY_DESTINATION, bodyListCityDestination: list});//Добавление списка поиска городов доставки груза
const sortListCalculate = (list)=>({type:FILTER_LIST,bodyResultFilter:list});
const statusFilterCalculate = (WW,WD,DD,DW)=>({type:STATUS_FILTER, bodyFilterWW:WW,bodyFilterWD:WD,bodyFilterDD:DD,bodyFilterDW:DW});//WW(склад-склад), WD(склад-дверь), DD(дверь-дверь),DW(дверь-склад)

export const statusCalculate = (status) => {
    return (dispatch) => {
        dispatch(updateStatusCalculation(true, true));
        window.location.href = '#calculate'
        setTimeout(() => {
            dispatch(updateStatusCalculation(false, true))
        }, 10000)
    }
}
export const updateStatusParameters = (status, id) => ({
    type: STATUS_DETAILED_PARAMETERS,
    bodyStatusParameters: !status,
    bodyIdStatus: id
});
const updateData = (data) => ({type: UPDATE_DATA, dataBody: data});
/*Добавление груза*/
export const addCargo = (value) => {
    return (dispatch) => {
        dispatch(addCargoData(value + 1));
    }
}
/*Удаление груза*/
export const deleteCargoList = (listCargo, id) => {
    return (dispatch) => {
        for (let i = 0; i < listCargo.length; i++) {
            if (String(listCargo[i].id) === String(id)) {
                listCargo.splice(i, 1)
                dispatch(deleteCargo(listCargo))
            }
        }
    }
}
export const widthData = (value, id,height,length) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            if(value.length>0){
                dispatch(updateWidth(value, id, false))
                if(height>0 && length>0){
                    let volume=Math.round(height*length*value/1000000);
                    dispatch(updateVolume(volume, id, false));
                }
            }
            else{
                dispatch(updateWidth(value, id, true))
            }
        }
    }
};
export const weightData = (value, id) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            value.length > 0
                ? dispatch(updateWeight(value, id, false))
                : dispatch(updateWeight(value, id, true))
        }
    }
};
export const heightData = (value, id, length, width) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            if(value.length>0){
                dispatch(updateHeight(value, id, false))
                if(width>0 && length>0){
                    let volume=Math.round(width*length*value/1000000);
                    dispatch(updateVolume(volume, id, false));
                }
            }
            else{
                dispatch(updateHeight(value, id, true))
            }
        }
    }
};
export const lengthData = (value, id, width, height) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            if(value.length>0){
                dispatch(updateLength(value, id, false))
                if(width>0 && height>0){
                    let volume=Math.round(width*height*value/1000000);
                    dispatch(updateVolume(volume, id, false));
                }
            }
            else{
                dispatch(updateLength(value, id, true))
            }
        }
    }
};
export const quantityData = (value, id) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            value.length > 0
                ? dispatch(updateQuantity(value, id, false))
                : dispatch(updateQuantity(value, id, true))
        }
    }
};
/*Получение полной информации о городе отправки*/
export const updateCityDeparture = (city, listCity) => {
    return (dispatch) => {
        cityAPI.cityInformation(city).then(response => {
            dispatch(updateCityDepartureInformation(response.data[0], listCity));
        }).catch(error => {

        })
    }
}
/*Автокомплит города отправки*/
export const ListCityDeparture = (city) => {
    return (dispatch) => {
        if (city.length >= 3) {
            cityAPI.searchCity(city).then(response => {
                dispatch(updateListCityDeparture(response.data));
            }).catch(error => {
            });
        }
    }
}
/*Получение полной информации о городе отправки*/
export const updateCityDestination = (city, listCity) => {
    return (dispatch) => {
        cityAPI.cityInformation(city).then(response => {
            dispatch(updateCityDestinationInformation(response.data[0], listCity));
        }).catch(error => {

        })
    }
}
/*Автокомплит города отправки*/
export const ListCityDestination = (city) => {
    return (dispatch) => {
        if (city.length >= 3) {
            cityAPI.searchCity(city).then(response => {
                dispatch(updateListCityDestination(response.data));
            }).catch(error => {
            });
        }
    }
}
/*Изменения объема груза*/
export const volumeData = (value, id) => {
    let params=Math.round(Math.cbrt(value * 1000000,3));
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            if(value.length>0){
                console.log(value)
                dispatch(updateVolume(value, id, false));
                dispatch(updateHeight(params, id, false));
                dispatch(updateWidth(params, id, false));
                dispatch(updateLength(params, id, false));
            }
            else{
                dispatch(updateVolume(value, id, true));
            }
        }
    }
};
/*Сортировка массива по цене*/
export const updateDataCheaper = (data) => {
    function compareNumbersCheaper(a, b) {
        return a.priceAfter - b.priceAfter;
    }

    return (dispatch) => {
        dispatch(updateData(data.sort(compareNumbersCheaper)));
    }
};
/*Сортировка Склад-Склад*/
export const warehouse_warehouse=(listTariff)=>{
    let sortList=[];
    for(let i=0;i<listTariff.length;i++){
        if(String(listTariff[i].pickup)===String(0) && String(listTariff[i].delivery)===String(0)){
            sortList.push(listTariff[i]);
        }
    }
    return(dispatch)=>{
        dispatch(sortListCalculate(sortList));
        dispatch(statusFilterCalculate(true,false,false,false));
    }
}
/*Сортировка Склад-Дверь*/
export const warehouse_door=(listTariff)=>{
    let sortList=[];
    for(let i=0;i<listTariff.length;i++){
        if(String(listTariff[i].pickup)===String(0) && String(listTariff[i].delivery)===String(1)){
            sortList.push(listTariff[i]);
        }
    }
    return(dispatch)=>{
        dispatch(sortListCalculate(sortList));
        dispatch(statusFilterCalculate(false,true,false,false));
    }
}
/*Сортировка Дверь-Дверь*/
export const door_door=(listTariff)=>{
    let sortList=[];
    for(let i=0;i<listTariff.length;i++){
        if(String(listTariff[i].pickup)===String(1) && String(listTariff[i].delivery)===String(1)){
            sortList.push(listTariff[i]);
        }
    }
    return(dispatch)=>{
        dispatch(sortListCalculate(sortList));
        dispatch(statusFilterCalculate(false,false,true,false));
    }
}
/*Сортировка Склад-Дверь*/
export const door_warehouse=(listTariff)=>{
    let sortList=[];
    for(let i=0;i<listTariff.length;i++){
        if(String(listTariff[i].pickup)===String(1) && String(listTariff[i].delivery)===String(0)){
            sortList.push(listTariff[i]);
        }
    }
    return(dispatch)=>{
        dispatch(sortListCalculate(sortList));
        dispatch(statusFilterCalculate(false,false,false,true));
    }
}
/*Стандартные габариты у документов*/
export const defaultParams=()=>{
    return(dispatch)=>{
        dispatch();
        dispatch(updateLength(25));
        dispatch();
        dispatch();
    }
}
/*Отпарвка грузов и рассчет тарифов*/
export const calculateTariff = (cargo, type, idCityDeparture, idCityDestination) => {
    return (dispatch) => {
        let idCargo = [];
        for (let i = 0; i < cargo.length; i++) {
            calculateAPI.addCargo(null,
                type,
                cargo[i].height, cargo[i].lenght,
                cargo[i].width, cargo[i].weight,
                cargo[i].volume, '',
                cargo[i].quantity).then(response => {
                if ((cargo.length - 1) === i) {
                    idCargo.push(response.data.id);
                    calculateAPI.calculate(idCargo, idCityDeparture.id, idCityDestination.id).then(response => {
                        dispatch(clearListResult());
                        dispatch(statusFilterCalculate(false,false,true,false));
                        let chatSocket = new WebSocket(
                            'ws://67.205.165.172:8002/ws/calculation/?key=' + response.data.id);
                        chatSocket.onmessage = function (e) {
                            let data = JSON.parse(e.data);
                            let message = JSON.parse(data['message']);
                            if(String(message.pickup)===String(1) && String(message.delivery)===String(1)) {
                                dispatch(addListFilterResult(
                                    message.id,
                                    'https://kenguruexpress.ru/images/services/dimex.png',
                                    message.operator,
                                    message.title,
                                    message.rating,
                                    message.term,
                                    message.common_price,
                                    message.price,
                                    message.pickup,
                                    message.delivery
                                ))
                            }
                            dispatch(addListCalculateResult(
                                message.id,
                                'https://kenguruexpress.ru/images/services/dimex.png',
                                message.operator,
                                message.title,
                                message.rating,
                                message.term,
                                message.common_price,
                                message.price,
                                message.pickup,
                                message.delivery
                            ))
                        };
                        chatSocket.onclose = function (e) {
                            console.error('Chat socket closed unexpectedly');
                        };
                    }).catch(error => {
                    })
                } else idCargo.push(response.data.id);
            }).catch(error => {
            });
        }
    }
}
/*Сортировка массива по времени доставки*/
export const updateDataFaster = (data) => {
    function compareNumbersFaster(a, b) {
        return a.deliveryTime - b.deliveryTime;
    }

    return (dispatch) => {
        dispatch(updateData(data.sort(compareNumbersFaster)));
    }
};

export default CalculateFormReducer;