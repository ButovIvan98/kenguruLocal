import Cookies from "js-cookie";

const UPDATE_STATUS='UPDATE_STATUS';
const UPDATE_ACTIVE_COMPANY ='UPDATE_ACTIVE_COMPANY';
let initialState = {
    Express_main: [
        {id: '/', title: 'Калькулятор', active: 'classNamees.active'},
        {id: '/myShipments', title: 'Мои отправления', active: 'classNamees.active'},
        {id: '/myPayment', title: 'Счета и оплата', active: 'classNamees.active'},
        {id: '/myAddress', title: 'Адресная книга', active: 'classNamees.active'},
    ],
    Cargo_main: [
        {id: '/car', title: 'Найти машины', active: 'classNamees.active'},
        {id: '/cargo', title: 'Найти грузы', active: 'classNamees.active'},
        {id: '/my_car', title: 'Мои машины', active: 'classNamees.active'},
        {id: '/my_cargo', title: 'Мои грузы', active: 'classNamees.active'},
        {id: '/my_contact', title: 'Адресная книга', active: 'classNamees.active'},
    ],
    statusBlockMain:'none',
    company:[
        {id:0,logo:'https://pngimg.com/uploads/apple_logo/apple_logo_PNG19670.png', name:'ОАО "apple"',responsiblePerson:'Саньков К.Е.'},
        {id:1,logo:'https://turbologo.ru/blog/wp-content/uploads/2018/10/wordpress-600x381.png', name:'ОАО"Вольскцемент"',responsiblePerson:'Великосельских М.В.'},
        {id:2,logo:'https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/mercedes-benz-emblem-1926-1920x1080.png', name:'ОАО "Mercedes-Benz"',responsiblePerson:'Дудин Н.А.'},
        {id:3,logo:'https://i.pinimg.com/originals/d5/c7/3c/d5c73cdc88a63224ec80532c548982c9.png', name:'ОАО "DELL"',responsiblePerson:'Бутов И.Ю.'},
    ],
    currentCompanyName:'ОАО "DELL',
    currentCompanyLogo:'https://i.pinimg.com/originals/d5/c7/3c/d5c73cdc88a63224ec80532c548982c9.png',
    currentCompanyId:'3',
    currentCompanyResponsiblePerson:'Саньков К.Е.',
};
const SidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATUS:
            return {
                ...state,
                statusBlockMain: action.statusBody
            }
        case UPDATE_ACTIVE_COMPANY:
            return {
                ...state,
                currentCompanyName:action.bodyActionNameCompany,
                currentCompanyLogo:action.bodyActionLogoCompany,
                currentCompanyId: action.bodyActionIdCompany,
                currentCompanyResponsiblePerson: action.bodyActionPersonCompany
            }
        default:
            return state;
    }
}
const updateStatus = (status) => ({type: UPDATE_STATUS, statusBody: status});
const updateCompanyActive = (idCompany,nameCompany, logoCompany,person) => ({type: UPDATE_ACTIVE_COMPANY, bodyActionNameCompany: nameCompany,bodyActionLogoCompany:logoCompany,bodyActionIdCompany:idCompany,bodyActionPersonCompany:person});
export const newStatus = (status)=>{
    return(dispatch)=>{
        if(status==='block'){
            dispatch(updateStatus('none'));
        }
        else
        {
            dispatch(updateStatus('block'))
        }
    }
};
export const updateCompanyActiveData=(id,nameCompany,logoCompany,person)=>{

    return(dispatch)=>{
        dispatch(updateCompanyActive(id,nameCompany,logoCompany,person));
        Cookies.set('idCompany', id)
    }
}
export default SidebarReducer;