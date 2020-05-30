const INPUT_SURNAME = 'INPUT_SURNAME';//Изменения фамилии
const INPUT_MIDDLE_NAME = 'INPUT_MIDDLE_NAME';//Изменения отчества
const INPUT_NAME = 'INPUT_NAME';//Изменения имени
const INPUT_NUMBER = 'INPUT_NUMBER';//Изменения номера
const BUTTON_SENDING_CODE = 'BUTTON_SENDING_CODE';//Отправка кода для подтверждения телефона
const TIMER = 'TIMER';//Таймер отсчета до возможности отправки нового кода подтверждения аккаунта
const ACTIVATE_USER='ACTIVATE_USER';//Активация пользователя
const REVIEW_CODE='REVIEW_CODE';//Проверка кода активации

let initialState = {
    surname:null,//Фамилия
    middleName:null,//Отчество
    name:null,//Имя
    validSurname:false,//Поле фамилия заполнено корректно
    validMiddleName:false,//Поле отчество заполнено корректно
    validName:false,//Поле имя заполнено корректно
    number:null,//Телефон
    validNumber:false,//Поле телефон заполнено корректно
    validButtonCode:false,//Нажата кнопка отправки кода
    validInputCode:false,//Отображает поле для ввода проверочного кода телефона
    countClickButtonCode:0,//Количество высланных кодов
    validTimer:false,//Отображение таймера
    activeUser:false,//Активирован юзер или нет, если да то появляются обычные настройки, если нет то - обязатыльные поля для активации выпадают.
    confirmationCode:'1234',//Текстовое поле кода активации
    validCodeActivate:false,//Проверка правильный ли код или нет
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
                countClickButtonCode: state.countClickButtonCode+1,
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
                validTimer:action.bodyTimer
            }
        case ACTIVATE_USER:
            return {
                ...state,
                activeUser: action.bodyActiveUser
            }
        case REVIEW_CODE:
            return {
                ...state,
                confirmationCode:action.bodyCode,
                validCodeActivate: action.bodyValidCodeActivate
            }
        default:
            return {...state}
    }
};
/*Заполнение данными поля и изменение статуса состояний*/
const surnameData = (surname,status) => ({type: INPUT_SURNAME, bodySurname: surname, bodyValidSurname:status});
const middleNameData = (middleName,status) => ({type: INPUT_MIDDLE_NAME, bodyMiddleName: middleName, bodyValidMiddleName:status});
const nameData = (name,status) => ({type: INPUT_NAME, bodyName: name, bodyValidName:status});
const numberData = (number, status,button) => ({type:INPUT_NUMBER, bodyNumber:number, bodyValidNumber:status,bodyValidButtonCode:button});
const clickButtonCode = (status) => ({type:BUTTON_SENDING_CODE, bodyValidClickButtonCode:status});
const timerData = (time) =>({type:TIMER, bodyTimer:time});
const activeUser = (status) =>({type:ACTIVATE_USER, bodyActiveUser:status});
const activeCodeData=(status, code)=>({type:REVIEW_CODE, bodyValidCodeActivate:status, bodyCode:code});

/*Валидация и обновление информации поля --фамилия*/
export const updateSurname=(surname)=>{
    return(dispatch)=>{
        if(surname.length >= 2){
            dispatch(surnameData(surname,true))
        }
        else {
            dispatch(surnameData(surname,false))
        }
    }
}
/*Валидация и обновление информации поля --отчество*/
export const updateMiddleName=(middleName)=>{
    return(dispatch)=>{
        if(middleName.length >= 2){
            dispatch(middleNameData(middleName,true))
        }
        else {
            dispatch(middleNameData(middleName,false))
        }
    }
}
/*Валидация и обновление информации поля --Имя*/
export const updateName=(name)=>{
    return(dispatch)=>{
        if(name.length >= 2){
            dispatch(nameData(name,true))
        }
        else {
            dispatch(nameData(name,false))
        }
    }
}
/*Валидация и обновление информации поля --Телефон*/
export const updateNumber=(number)=>{
    return(dispatch)=>{
        let phone = parseInt(number.replace(/[^\d]/g,''))
        if((String(phone)).length === 11){
            dispatch(numberData(number,true,true))
        }
        else {
            dispatch(numberData(number,false,false))
        }
    }
}
/*Обработка события Отправить код подтверждения*/
export const updateClickButtonCode=()=>{
    return(dispatch)=>{
        dispatch(clickButtonCode(false));
        dispatch(timerData(true));
        setTimeout(()=>{dispatch(clickButtonCode(true))},5000);
        setTimeout(()=>{dispatch(timerData(false))},4900);
    }
}
/*Проверка кода активации*/
export const codeReviews=(code)=>{
    return(dispatch)=>{
            // let number = parseInt(code.replace(/[^\d]/g, ''))
            //
            // if ((String(number)).length === 4) {
            //     console.log('Член=4')
            //     dispatch(activeCodeData(true, code));
            // } else {
            //     console.log('Член != 4')
            //     dispatch(activeCodeData(false, number));
            // }
        }
}
/*Активация аккаунта пользователя*/
export const activateUser=()=>{
    return(dispatch)=>{
        dispatch(activeUser(true));
    }
}
export default SettingReducer;

