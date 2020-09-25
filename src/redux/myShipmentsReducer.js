import Cookies from "js-cookie";
import {addOrder} from "../API/api";

const LIST_ORDER='LIST_ORDER';//Полный список заказов

let initialState = {
    orderList: [],
    selectedOrder:{
    sender:{

    },
    recipient:{

    }
    }
}
const MyShipmentsReducer = (state = initialState, action) => {
    switch (action.type){
        case LIST_ORDER:
            return {
                ...state,
                orderList: action.bodyOrderList
            }
        default :
            return state
    }
}
const updateListOrder=(list)=>({type:LIST_ORDER,bodyOrderList:list})

export const searchListOrder=()=>{
    return(dispatch)=>{
        addOrder.allOrder(Cookies.get('id_company')).then(r=>{
            dispatch(updateListOrder(r.data))
        })
    }
}

export default MyShipmentsReducer;