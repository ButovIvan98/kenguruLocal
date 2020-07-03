import * as axios from "axios";
import Cookies from 'js-cookie';


export const instance = () => {
    return axios.create({
            baseURL: 'http://67.205.165.172:8000',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + Cookies.get('auth_token'),
                'Accept': 'application/json'
            }
        }
    )
}

const auth = axios.create({
    baseURL: 'http://67.205.165.172:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const calculateAPI={
    calculate(cargo, idCityDeparture,idCityDestination){
        return auth.post('/rates/create/',{sender_city:idCityDeparture, receiver_city:idCityDestination, cargoes:cargo})
    },
    addCargo(type, delivery_type, height,length,width,weight,volume,volumetric_weight,quantity,comment){
        return auth.post('/product/',{type, delivery_type, height, length, width, weight, volume, volumetric_weight, quantity, comment})
    }
}
export const companyAPI = {
    listCompanyHeader() {
        return instance().get('/profile/')
    }
}
export const cityAPI={
    cityInformation(city){
        return auth.post('/geo/locality/',{locality:city,count:1})
    },
    searchCity(city){
        return auth.post('/geo/locality/',{locality:city,count:10})
    }
}
export const userAPI = {
    /*Запорс на информацию о пользователе*/
    profileInfo(){
        return instance().get(`/profile/${Cookies.get('id_company')}/`)
    },
    /*Отпрвка ФИО*/
    updateFIOData(surname, name, middleName) {
        return instance().post('/users/me', {first_name: name, last_name: surname, patronymic: middleName})
    },
    /*Отправка кода*/
    activateUserPhone(phone, code) {
        return instance().post('/users/phone/verify', {phone, code})
    },
    /*Отправка номера на подтверждение*/
    registerPhone(phone) {
        return instance().post('/users/phone/register', {phone: phone})
    },
    resetPassword(uid, token, password) {
        return auth.post('/auth/users/reset_password_confirm/', {uid, token, new_password: password})
    },
    /*Отправка запроса на ссылки на восстановление пароля*/
    reloadPassword(email) {
        return auth.post('/auth/users/reset_password/', {email})
    },
    /*Запрос для удаления токена если пользователь выходит с сайта.*/
    deleteToken() {
        return instance().post('/auth/token/logout/')
    },
    /*Проверка действительности токена в cookies и на сервере.*/
    checkToken() {
        return instance().get('/auth/users/me/')
    },
    /*Запрос на авторизацию пользователя на сайте.*/
    authUser(password, login) {
        return auth.post('/auth/token/login/', {password, email: login})
    },
    /*Запрос на подверждение почты по ссылке.*/
    postActivationEmail(token, uid) {
        return auth.post('/auth/users/activation/', {uid, token})
    },
    /*Запрос на регистрацию пользователя*/
    getUsers(login, password) {
        return auth.post(`/auth/users/`, {email: password, password: login})
    },
    // getMe() {
    //     return instance.get(`auth/me`).then(response => {
    //         return response.data;
    //     })
    // },
    // deleteFollowed(id) {
    //     return instance.delete(`follow/${id}`).then(response => {
    //         return response.data;
    //     })
    // },
    // postFollowed(id) {
    //     return instance.post(`follow/${id}`).then(response => {
    //         return response.data;
    //     })
    // },
    // getProfileData(id) {
    //     return instance.get(`profile/` + id)
    // }
};
export const ProfileAPI = {
    // putStatus(status) {
    //     return instance.post('profile/status', {status: status})
    // },
    // getStatus(userID) {
    //     return instance.get(`profile/status/` + userID)
    // }
};
//Регистрация + авторизация
export const RegistrationAPI = {
    // putRegistration(surname, name, middleName, phone, email, password) {
    //     return instance.post('user/auth/logout', {
    //         middle: surname,
    //         first: name,
    //         last: middleName,
    //         password: password,
    //         email: email,
    //         phone: phone
    //     }).then()
    // },
    // putAthorization(email, password) {
    //     return instance.post('user/auth/login', {email: email, password: password})
    // }
    // putAthorization(email,password){
    //     return instance.get('user/auth/logout')
    // }
};
//Калькуляция и добавление груза
export const CalculateAPI = {
    // addСargo(width, height, length, weight, quantity, comment, type) {
    //     return instance.post('express/cargo/create', {width, height, length, weight, quantity, comment, type}).then();
    // }
}