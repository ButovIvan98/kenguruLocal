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

let VALID_WIDTH = 'VALID_STATUS_WIDTH';
let VALID_HEIGHT = 'VALID_HEIGHT';
let VALID_LENGHT = 'VALID_LENGHT';
let VALID_WEIGHT = 'VALID_WEIGHT';
let VALID_QUANTITY = 'VALID_QUANTITY';

let STATUS_DETAILED_PARAMETERS = 'STATUS_DETAILED_PARAMETERS';//Статус подробные параметры
let ADD_CARGO = 'ADD_CARGO';//Добавить поля
let DELETE_CARGO='DELETE_CARGO';//Удаление груза
let SEARCH_TRANSPORT_COMPANY = 'SEARCH_TRANSPORT_COMPANY';//Поиск транпортных компаний

const SEARCH_CITY_DEPARTURE = 'SEARCH_CITY_DEPARTURE';//Поиск города отправки
const SEARCH_CITY_DESTINATION = 'SEARCH_CITY_DESTINATION';//Поиск города доставки

let UPDATE_DATA = 'UPDATE_DATA';//Обновление данных
let UPDATE_TEXT_SENDING = 'UPDATE_TEXT_SENDING';//Город отправления
let UPDATE_TEXT_DESTINATION = 'UPDATE_TEXT_DESTINATION';//Город прибытия

const ADD_LIST_RESULT='ADD_LIST_RESULT';//Результат расчета
const CLEAR_LIST_RESULT='CLEAR_LIST_RESULT';//Очистка результатов поиска тк

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
    type: 'parcel',
    resultCalculate: []
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
        case  ADD_LIST_RESULT:
            return {
                ...state,
                resultCalculate: [
                    ...state.resultCalculate,{
                        id: action.bodyIdResult,
                        imgCompany: action.bodyImgCompany,
                        company: action.bodyCompanyName,
                        tariff: action.bodyTariffName,
                        rating: action.bodyRatingCompany,
                        deliveryTime: action.bodyDeliveryTime,
                        priceBefore: action.bodyPriceBefore,
                        priceAfter: action.bodyPriceAfter
                    }
                ]
            }
        case CLEAR_LIST_RESULT:
            return {
                ...state,
                resultCalculate: []
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
const deleteCargo = (value)=>({type:DELETE_CARGO, bodyResultCalculate:value})

const updateStatusCalculation = (status) => ({type: STATUS_CALCULATE, bodyStatusCalculation: status});//Изменение статуса идет в данный момент расчет или нет

const addListCalculateResult=(id,img,company,tariff,rating,time,priceBefore,priceAfter) =>({
    type:ADD_LIST_RESULT,
    bodyIdResult:id,
    bodyImgCompany:img,
    bodyCompanyName:company,
    bodyTariffName:tariff,
    bodyRatingCompany:rating,
    bodyDeliveryTime:time,
    bodyPriceBefore:priceBefore,
    bodyPriceAfter:priceAfter
    });
const clearListResult=()=>({type: CLEAR_LIST_RESULT});
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

export const statusCalculate = (status) => {
    return (dispatch) => {
        dispatch(updateStatusCalculation(true));
        window.location.href = '#calculate'
        setTimeout(() => {
            dispatch(updateStatusCalculation(false))
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
export const deleteCargoList=(listCargo,id)=>{
    return(dispatch)=>{
        let newListCargo=[];
        for(let i=0;i<listCargo.length;i++){
            if(String(listCargo[i].id)===String(id)){
                console.log('!----------!');
                console.log(listCargo);
                console.log(id);
                console.log(newListCargo);
                console.log('!----------!');
                listCargo.splice(i, 1)
                dispatch(deleteCargo(listCargo))
                console.log('----------');
                console.log(listCargo);
                console.log(id);
                console.log('----------');
            }
        }
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


/*Отпарвка грузов и рассчет тарифов*/
export const calculateTariff = (cargo, idCityDeparture, idCityDestination) => {
    return (dispatch) => {
        let flag = true;
        let idCargo = [];
        let idString='';
        for(let i=0; i<cargo.length; i++){
            calculateAPI.addCargo(null,
                'cargo',
                cargo[i].height, cargo[i].lenght,
                cargo[i].width, cargo[i].weight,
                cargo[i].volume, '',
                cargo[i].quantity).then(response => {
                if((cargo.length - 1) === i){
                    idCargo.push(response.data.id);
                    calculateAPI.calculate(idCargo, idCityDeparture.id, idCityDestination.id).then(response => {
                        dispatch(clearListResult());
                        let chatSocket = new WebSocket(
                            'ws://67.205.165.172:8002/ws/calculation/?key=' + response.data.id);
                        chatSocket.onmessage = function(e) {
                            let data = JSON.parse(e.data);
                            let message = JSON.parse(data['message']);
                            console.log(message);
                            dispatch(addListCalculateResult(message.id,'https://kenguruexpress.ru/images/services/dimex.png',message.operator,message.title,message.rating,message.term,message.common_price,message.price ))
                        };
                        chatSocket.onclose = function(e) {
                            console.error('Chat socket closed unexpectedly');
                        };
                    }).catch(error => {
                    })
                }
                else idCargo.push(response.data.id);
            }).catch(error=> {
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