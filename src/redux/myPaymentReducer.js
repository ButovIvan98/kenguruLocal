import Cookies from "js-cookie";
import {addOrder} from "../API/api";

const LIST_PAYMENT='LIST_PAYMENT';//Полный список заказов

let initialState = {
    paymentList: [],
}
const MyPaymentReducer = (state = initialState, action) => {
    switch (action.type){
        case LIST_PAYMENT:
            return {
                ...state,
                orderList: action.bodyOrderList
            }
        default :
            return state
    }
}
const updateListPayment=(list)=>({type:LIST_PAYMENT,bodyOrderList:list})

export const searchListPayment=()=>{
    return(dispatch)=>{
        addOrder.allOrder(Cookies.get('id_company')).then(r=>{
            dispatch(updateListPayment(r.data))
        })
    }
}

export default MyPaymentReducer;