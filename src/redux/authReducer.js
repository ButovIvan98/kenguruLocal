const UPDATE_TEXT_LOGIN = 'UPDATE_TEXT_LOGIN';
const UPDATE_TEXT_PASSWORD = 'UPDATE_TEXT_PASSWORD';
const REMEMBER_ME = 'REMEMBER_ME';

const AUTH = 'AUTH';

let initialState = {
    email: '',
    password: '122',
    isAuth: true,
    token: '',
    rememberMe:false
};
const AuthorezetionReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXT_LOGIN:
            return {
                ...state,
                email: action.emailBody
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
        default:
            return state;
    }
};
export const updateEmail = (email) => ({type: UPDATE_TEXT_LOGIN, emailBody: email});
export const updatePassword = (password) => ({type: UPDATE_TEXT_PASSWORD, passwordBody: password});
export const authIs = (status) => ({type: AUTH, authBody: status});
export const updateRememberMe =(value)=>({type:REMEMBER_ME, bodyRememberMeStatus:!value});

/*Авторизация user-a*/
export const auth = (email, password) => {
    return (dispatch) => {

        dispatch(authIs(true));
        // RegistrationAPI.putAthorization(email, password).then(response => {
        //     if (response.data.success) {
        //         Cookies.set('authToken', response.data.data.authToken, {expires: 365})
        //         dispatch(authIs(true));
        //         //browserHistory.push({pathname: '/pathname', state: {message: "hello, im a passed message!"}});
        //     } else {
        //         dispatch(authIs(false));
        //         console.log('Cookies не добавлены')
        //     }
        // });
    }
};
export default AuthorezetionReducer;