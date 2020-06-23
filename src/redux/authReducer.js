import {userAPI} from "../API/api";
import {listCompany} from "./headerReducer";

const UPDATE_TEXT_LOGIN = 'UPDATE_TEXT_LOGIN';
const UPDATE_TEXT_PASSWORD = 'UPDATE_TEXT_PASSWORD';
const REMEMBER_ME = 'REMEMBER_ME';
const RELOAD_PASSWORD = 'RELOAD_PASSWORD';
const AUTH = 'AUTH';
const UPDATE_PASSWORD_RESET='PASSWORD_RESET';//Обнолвение состояния поля новый пароль.
const RESET_PASSWORD = 'RESET_PASSWORD';//Отправка запроса с новым паролем на восстановление пароля

let initialState = {
    email: null,
    password: null,
    isAuth: false,
    rememberMe: false,
    validEmail: null,//Статус валидности email
    validResetPassword:null,//Успешно ли введены данные(email) и выполнялся запрос для восстановления пароля
    passwordReset:null,//Состояние нового пароля
    validPasswordReset:null,//Валидность нового пароля
    passwordRestored:false//Если запрос с новым паролем на восстановление уходит успешно проставляется значение true
};
const AuthorezetionReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXT_LOGIN:
            return {
                ...state,
                email: action.emailBody,
                validEmail: action.bodyStatus
            };
        case UPDATE_TEXT_PASSWORD:
            return {
                ...state,
                password: action.passwordBody
            };
        case AUTH:
            return {
                ...state,
                isAuth: action.authBody
            };
        case REMEMBER_ME:
            return {
                ...state,
                rememberMe: action.bodyRememberMeStatus
            }
        case RELOAD_PASSWORD:
            return {
                ...state,
                validResetPassword: action.bodyValidResetPassword
            }
        case UPDATE_PASSWORD_RESET:
            return {
                ...state,
                passwordReset: action.bodyPasswordReset,
                validPasswordReset: action.bodyValidPasswordReset
            }
        case RESET_PASSWORD:
            return {
                ...state,
                passwordRestored: action.bodyPasswordRestored
            }
        default:
            return state;
    }
};
const updateEmail = (email, status) => ({type: UPDATE_TEXT_LOGIN, emailBody: email, bodyStatus: status});
export const updatePassword = (password) => ({type: UPDATE_TEXT_PASSWORD, passwordBody: password});
export const authIs = (status) => ({type: AUTH, authBody: status});
export const updateRememberMe = (value) => ({type: REMEMBER_ME, bodyRememberMeStatus: !value});
const updatePasswordReset = (password,status)=>({type:UPDATE_PASSWORD_RESET,bodyValidPasswordReset:status, bodyPasswordReset:password});
const resetPasswordUser = (status)=>({type:RESET_PASSWORD, bodyPasswordRestored:status});

/*Авторизация user-a*/
export const auth = (email, password) => {
    return (dispatch) => {
        userAPI.authUser(password, email).then(response => {
            document.cookie = 'auth_token=' + response.data.auth_token;
            dispatch(authIs(true));
        }).catch(error => {
            console.log(error.response.data)
        })
    }
};
/*Проверка действительности токена*/
export const checkToken = () => {
    return (dispatch) => {
        userAPI.checkToken().then(response => {
            console.log(response.data.status);
            dispatch(authIs(true));
            //dispatch(listCompany());
        }).catch(error => {
            dispatch(authIs(false));
        })
    }
}

/*Проверка email на валидацию и обновление состояния*/
export const Email = (email) => {
    return (dispatch) => {
        if (!/.+@.+\.[A-Za-z]+$/.test(email)) {
            dispatch(updateEmail(email, false));
        } else {
            dispatch(updateEmail(email, true));
        }
    }
};
/*Восстановление пароля запрос на отправку ссылки на почту*/
export const reloadPasswordUser = (email) => {
    return (dispatch) => {
        userAPI.reloadPassword(email).then(response=>{

        }).catch(error=>{

        })
    }
};

/*Восстановление пароля. Ввод нового пароля*/
export const resetPassword=(password)=>{
    return(dispatch)=>{
        if(password.length>7){
            dispatch(updatePasswordReset(password,true));
        }
        else dispatch(updatePasswordReset(password,false));
    }
}
export const resetPasswordClick=(password)=>{
    return(dispatch)=>{
        let array = (window.location.pathname).split('/');
        userAPI.resetPassword(array[array.length - 2], array[array.length - 1],password).then(response=>{
            dispatch(resetPasswordUser(true));
        }).catch(error=>{
            console.log(error.data);
        });
    }
}
export default AuthorezetionReducer;