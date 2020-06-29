import {userAPI} from "../API/api";

const INPUT_SURNAME = 'INPUT_SURNAME';//Изменения фамилии
const INPUT_MIDDLE_NAME = 'INPUT_MIDDLE_NAME';//Изменения отчества
const INPUT_NAME = 'INPUT_NAME';//Изменения имени
const INPUT_NUMBER = 'INPUT_NUMBER';//Изменения номера
const BUTTON_SENDING_CODE = 'BUTTON_SENDING_CODE';//Отправка кода для подтверждения телефона
const TIMER = 'TIMER';//Таймер отсчета до возможности отправки нового кода подтверждения аккаунта
const ACTIVATE_USER = 'ACTIVATE_USER';//Активация пользователя
const REVIEW_CODE = 'REVIEW_CODE';//Проверка кода активации
const ACTIVATION_EMAIL = 'ACTIVATION_EMAIL'//Активация емайла

/*Валидация полей активации профиля*/
const VALID_PHONE = 'VALID_PHONE';
const VALID_MAIL = 'VALID_MAIL';
const VALID_FIO = 'VALID_FIO';


let initialState = {
    validFormEmail: true,
    validFormFIO: false,
    validFormPhone: false,
    surname: null,//Фамилия
    validSurname: false,//Поле фамилия заполнено корректно
    middleName: null,//Отчество
    validMiddleName: false,//Поле отчество заполнено корректно
    name: null,//Имя
    validName: false,//Поле имя заполнено корректно
    number: null,//Телефон
    validNumber: false,//Поле телефон заполнено корректно
    validButtonCode: false,//Нажата кнопка отправки кода
    validInputCode: false,//Отображает поле для ввода проверочного кода телефона
    countClickButtonCode: 0,//Количество высланных кодов
    validTimer: false,//Отображение таймера
    activeUser: true,//Активирован юзер или нет, если да то появляются обычные настройки, если нет то - обязатыльные поля для активации выпадают.
    confirmationCode: null,//Текстовое поле кода активации
    validCodeActivate: null,//Проверка правильный ли код или нет
    activationEmail: false,
};

const SettingReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_SURNAME:
            return {
                ...state,
                surname: action.bodySurname,
                validSurname: action.bodyValidSurname
            };
        case INPUT_MIDDLE_NAME:
            return {
                ...state,
                middleName: action.bodyMiddleName,
                validMiddleName: action.bodyValidMiddleName

            };
        case INPUT_NAME:
            return {
                ...state,
                name: action.bodyName,
                validName: action.bodyValidName
            };
        case BUTTON_SENDING_CODE:
            return {
                ...state,
                countClickButtonCode: state.countClickButtonCode + 1,
                validButtonCode: action.bodyValidClickButtonCode,
                validInputCode: true
            }
        case INPUT_NUMBER:
            return {
                ...state,
                number: action.bodyNumber,
                validNumber: action.bodyValidNumber,
                validButtonCode: action.bodyValidButtonCode
            }
        case TIMER:
            return {
                ...state,
                validTimer: action.bodyTimer
            }
        case ACTIVATE_USER:
            return {
                ...state,
                activeUser: action.bodyActiveUser
            }
        case REVIEW_CODE:
            return {
                ...state,
                confirmationCode: action.bodyCode,
                validCodeActivate: action.bodyValidCodeActivate
            }
        case ACTIVATION_EMAIL:

            return {
                ...state,
                activationEmail: action.bodyActivationEmail
            }
        case VALID_PHONE:
            return {
                ...state,
                validFormPhone: action.bodyValidFormPhone
            }
        case VALID_FIO:
            return {
                ...state,
                validFormFIO: action.bodyValidFormFIO
            }
        case VALID_MAIL:
            return {
                ...state,
                validFormEmail: action.bodyValidFormEmail
            }
        default:
            return {...state}
    }
};
/*Заполнение данными поля и изменение статуса состояний*/
export const updateEmailForm = (status) => ({type: VALID_MAIL, bodyValidFormEmail: !status});
const updateFIOForm = (status) => ({type: VALID_FIO, bodyValidFormFIO: status});
const updatePhoneForm = (status) => ({type: VALID_PHONE, bodyValidFormPhone: status});

const surnameData = (surname, status) => ({type: INPUT_SURNAME, bodySurname: surname, bodyValidSurname: status});
const middleNameData = (middleName, status) => ({
    type: INPUT_MIDDLE_NAME,
    bodyMiddleName: middleName,
    bodyValidMiddleName: status
});
const nameData = (name, status) => ({type: INPUT_NAME, bodyName: name, bodyValidName: status});

const numberData = (number, status, button) => ({
    type: INPUT_NUMBER,
    bodyNumber: number,
    bodyValidNumber: status,
    bodyValidButtonCode: button
});
const clickButtonCode = (status) => ({type: BUTTON_SENDING_CODE, bodyValidClickButtonCode: status});
const timerData = (time) => ({type: TIMER, bodyTimer: time});
const activeUser = (status) => ({type: ACTIVATE_USER, bodyActiveUser: status});
const activeCodeData = (status, code) => ({type: REVIEW_CODE, bodyValidCodeActivate: status, bodyCode: code});
const activeEmail = (value) => ({type: ACTIVATION_EMAIL, bodyActivationEmail: value});

/*Валидация и обновление информации поля --фамилия*/
export const updateSurname = (surname) => {
    return (dispatch) => {
        if (surname.length >= 2) {
            dispatch(surnameData(surname, true))
        } else {
            dispatch(surnameData(surname, false))
        }
    }
}
/*Валидация и обновление информации поля --отчество*/
export const updateMiddleName = (middleName) => {
    return (dispatch) => {
        dispatch(middleNameData(middleName, true))
    }
}
/*Валидация и обновление информации поля --Имя*/
export const updateName = (name) => {
    return (dispatch) => {
        if (name.length >= 2) {
            dispatch(nameData(name, true))
        } else {
            dispatch(nameData(name, false))
        }
    }
}
/*Валидация и обновление информации поля --Телефон*/
export const updateNumber = (number) => {
    return (dispatch) => {
        let phone = Number(number.replace(/[^\d]/g, ''));
        if ((String(phone)).length === 11) {
            dispatch(numberData(number, true, true))

        } else {
            dispatch(numberData(number, false, false));
            console.log(phone)
        }
    }
}
/*Обработка события Отправить код подтверждения*/
export const updateClickButtonCode = (number) => {
    return (dispatch) => {
        let phone = Number(number.replace(/[^\d]/g, ''));
        userAPI.registerPhone(phone).then(response => {
            dispatch(clickButtonCode(false));
            dispatch(timerData(true));
            setTimeout(() => {
                dispatch(clickButtonCode(true))
            }, 60000);
            setTimeout(() => {
                dispatch(timerData(false))
            }, 59000);
        }).catch(error => {

        })
    }
}
/*Проверка кода активации*/
export const codeReviewsNumber = (code, phone) => {
    return (dispatch) => {
        let phoneUser = Number(phone.replace(/[^\d]/g, ''));
        let number = Number(code.replace(/[^\d]/g, ''));
        console.log(phone)
        if (String(number).length == '4') {
            dispatch(activeCodeData(false, code));
            userAPI.activateUserPhone(phoneUser, number).then(response => {
                dispatch(activeUser(false));
                dispatch(activeCodeData(true,null));
            }).catch(error=>{
                dispatch(activeCodeData(false,null));
            })
        } else {
            dispatch(activeCodeData(false, code));
            dispatch(updatePhoneForm(true));
        }
// ? userAPI.activateUserPhone(phone,code).then(response=>{
        //     dispatch();
        // })
    }
};
/*Обновление фамилии*/
export const updateFioUser = (surname, name, middleName) => {
    return (dispatch) => {
        userAPI.updateFIOData(surname, name, middleName).then(response => {
            dispatch(updateFIOForm(true));
        })
    }
}
/*Активация email*/
export const userEmailActive = () => {
    return (dispatch) => {
        let array = (window.location.pathname).split('/')
        userAPI.postActivationEmail(array[array.length - 1], array[array.length - 2]).then(response => {
            dispatch(activeEmail(true));
        }).catch(error => {
            console.log(error.response.data)
        })
        //console.log(JSON.stringify(props.match.params));
    }
}
/*Активация аккаунта пользователя*/
export const activateUser = () => {
    return (dispatch) => {
        dispatch(activeUser(true));
    }
}
/*Информация о юзере*/
export const profileInfo=()=>{
    return(dispatch)=>{
        userAPI.profileInfo().then(response=>{
            console.log(response.data);
            response.data.username!== '' ? dispatch(updateFIOForm(true)) : dispatch(updateFIOForm(false))
            response.data.phone_confirmed ? dispatch(updatePhoneForm(true)) : dispatch(updatePhoneForm(false))
            if(response.data.email_confirmed && response.data.phone_confirmed && response.data.username!== ''){
                dispatch(activeUser(false));
                console.log('ddd');
            }
        })
    }
}
export default SettingReducer;

