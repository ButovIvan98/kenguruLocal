import Cookies from "js-cookie";
import {payment} from "../API/api";

const LIST_PAYMENT='LIST_PAYMENT';//Полный список заказов

let initialState = {
    paymentList: [],
}
const MyPaymentReducer = (state = initialState, action) => {
    switch (action.type){
        case LIST_PAYMENT:
            return {
                ...state,
                paymentList: action.bodyPaymentList
            }
        default :
            return state
    }
}
const updateListPayment=(list)=>({type:LIST_PAYMENT,bodyPaymentList:list})

export const searchListPayment=()=>{
    return(dispatch)=>{
        payment.allPayment(Cookies.get('id_company')).then(r=>{
            dispatch(updateListPayment(r.data))
        })
    }
}

export default MyPaymentReducer;