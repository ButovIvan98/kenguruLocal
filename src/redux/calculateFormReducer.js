import {CalculateAPI, cityAPI} from "../API/api";
import {updateObjectInArray} from "../components/utils/updateElementMassive";

let UPDATE_WIDTH = 'UPDATE_WIDTH';
let UPDATE_HEIGHT = 'UPDATE_HEIGHT';
let UPDATE_LENGHT = 'UPDATE_LENGHT';
let UPDATE_WEIGHT = 'UPDATE_WEIGHT';
let UPDATE_QUANTITY = 'UPDATE_QUANTITY';
let UPDATE_COMMENT = 'UPDATE_COMMENT';
let UPDATE_VOLUME = 'UPDATE_VOLUME';
let STATUS_CALCULATE='STATUS_CALCULATE';

let VALID_WIDTH = 'VALID_STATUS_WIDTH';
let VALID_HEIGHT = 'VALID_HEIGHT';
let VALID_LENGHT = 'VALID_LENGHT';
let VALID_WEIGHT = 'VALID_WEIGHT';
let VALID_QUANTITY = 'VALID_QUANTITY';

let STATUS_DETAILED_PARAMETERS = 'STATUS_DETAILED_PARAMETERS';//Статус подробные параметры
let ADD_CARGO = 'ADD_CARGO';//Добавить поля
let SEARCH_TRANSPORT_COMPANY = 'SEARCH_TRANSPORT_COMPANY';//Поиск транпортных компаний

const SEARCH_CITY_DEPARTURE='SEARCH_CITY_DEPARTURE';//Поиск города отправки
const SEARCH_CITY_DESTINATION='SEARCH_CITY_DESTINATION';//Поиск города доставки

let UPDATE_DATA = 'UPDATE_DATA';//Обновление данных
let UPDATE_TEXT_SENDING = 'UPDATE_TEXT_SENDING';//Город отправления
let UPDATE_TEXT_DESTINATION = 'UPDATE_TEXT_DESTINATION';//Город прибытия

let initialState = {
    cityOfDeparture:{
        listCity:[],
        city:{},
    },
    cityOfDestination:{
        listCity:[],
        city:[],
    },
    statusDetailedParameters: true,
    destinationCityList: [],
    statusCalculate:false,//статус калькуляции(идет расчет или нет)
    listCargo: [
        {
            id: 1,
            weight: '10',
            volume: '10',
            height: '10',
            lenght: '10',
            width: '10',
            quantity: '10',
            status: true,
            validWeight: null,
            validVolume: null,
            validHeight: null,
            validLenght: null,
            validWidth: null,
            validQuantity: null
        }
    ],
    type: 'parcel',
    resultCalculate: [
        {
            id: 1,
            imgCompany: 'https://kenguruexpress.ru/images/services/dimex.png',
            company: 'Dimex',
            tariff: 'Автотранспорт',
            rating: '3.2',
            deliveryTime: '12',
            priceBefore: '754',
            priceAfter: '479'
        },
        {
            id: 2,
            imgCompany: 'https://kenguruexpress.ru/images/services/gtd.jpg',
            company: 'GTD',
            tariff: 'Автотранспорт',
            rating: '3.2',
            deliveryTime: '10',
            priceBefore: '754',
            priceAfter: '568'
        },
        {
            id: 3,
            imgCompany: 'https://kenguruexpress.ru/images/services/glavdostavka.png',
            company: 'Главдоставка',
            tariff: 'Автотранспорт',
            rating: '3.2',
            deliveryTime: '2',
            priceBefore: '1000',
            priceAfter: '879'
        },
        {
            id: 4,
            imgCompany: 'https://kenguruexpress.ru/images/services/pony.jpg',
            company: 'PonyExpress',
            tariff: 'Автотранспорт',
            rating: '3.2',
            deliveryTime: '5',
            priceBefore: '1260',
            priceAfter: '780'
        },
    ]
}
const CalculateFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CALCULATE:
            return {
                ...state,
                statusCalculate: action.bodyStatusCalculation
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
                cityOfDeparture:{
                    listCity: action.bodyListCityDeparture
                }
            }
        case SEARCH_CITY_DESTINATION:
            return {
                ...state,
                cityOfDestination:{
                    listCity: action.bodyListCityDestination
                }
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
const addCargoData = (value) => ({type: ADD_CARGO, bodyIdCargo: value});
const updateStatusCalculation=(status)=>({type:STATUS_CALCULATE,bodyStatusCalculation:status});//Изменение статуса идет в данный момент расчет или нет

const updateCityDepartureInformation=(city,listCity)=>({type:UPDATE_TEXT_SENDING, bodyCityDeparture:city,bodyListCityDeparture:listCity});//Добавление полной информации о городе отправления груза
const updateCityDestinationInformation=(city,listCity)=>({type:UPDATE_TEXT_DESTINATION, bodyCityDestination:city,bodyListCityDestination:listCity});//Добавление полной информации о городе доставки

const updateListCityDeparture=(list)=>({type:SEARCH_CITY_DEPARTURE,bodyListCityDeparture:list});//Добавление списка поиска городов отправки груза
const updateListCityDestination=(list)=>({type:SEARCH_CITY_DESTINATION,bodyListCityDestination:list});//Добавление списка поиска городов доставки груза



export const statusCalculate =(status)=>{
    return(dispatch)=>{
        dispatch(updateStatusCalculation(true));
        window.location.href = '#calculate'
        setTimeout(()=>{dispatch(updateStatusCalculation(false))},10000)
    }
}
export const updateStatusParameters = (status, id) => ({
    type: STATUS_DETAILED_PARAMETERS,
    bodyStatusParameters: !status,
    bodyIdStatus: id
});
const updateData = (data) => ({type: UPDATE_DATA, dataBody: data});

export const addCargo = (value) => {
    return (dispatch) => {
        dispatch(addCargoData(value + 1));
    }
}

export const widthData = (value, id) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            value.length > 0
                ? dispatch(updateWidth(value, id, false))
                : dispatch(updateWidth(value, id, true))
        }
    }
};

export const weightData = (value, id) => {
    debugger
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            value.length > 0
                ? dispatch(updateWeight(value, id, false))
                : dispatch(updateWeight(value, id, true))
        }
    }
};
export const heightData = (value, id) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            value.length > 0
                ? dispatch(updateHeight(value, id, false))
                : dispatch(updateHeight(value, id, true))
        }
    }
};
export const lengthData = (value, id) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            value.length > 0
                ? dispatch(updateLength(value, id, false))
                : dispatch(updateLength(value, id, true))
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
export const updateCityDeparture=(city,listCity)=>{
    return(dispatch)=>{
        cityAPI.cityInformation(city).then(response=>{
            dispatch(updateCityDepartureInformation(response.data[0],listCity));
        }).catch(error=>{

        })
    }
}
/*Автокомплит города отправки*/
export const ListCityDeparture=(city)=>{
    return(dispatch)=>{
        if(city.length >= 3) {
            cityAPI.searchCity(city).then(response => {
                dispatch(updateListCityDeparture(response.data));
            }).catch(error=>{
                });
        }
    }
}
/*Получение полной информации о городе отправки*/
export const updateCityDestination=(city, listCity)=>{
    return(dispatch)=>{
        cityAPI.cityInformation(city).then(response=>{
            dispatch(updateCityDestinationInformation(response.data[0], listCity));
        }).catch(error=>{

        })
    }
}
/*Автокомплит города отправки*/
export const ListCityDestination=(city)=>{
    return(dispatch)=>{
        if(city.length >= 3) {
            cityAPI.searchCity(city).then(response => {
                dispatch(updateListCityDestination(response.data));
            }).catch(error=>{
            });
        }
    }
}
export const volumeData = (value, id) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            value.length > 0
                ? dispatch(updateVolume(value, id, false))
                : dispatch(updateVolume(value, id, true))
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