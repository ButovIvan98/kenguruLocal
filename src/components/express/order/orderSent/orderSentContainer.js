import React from 'react';
import {connect} from "react-redux";
import OrderSent from "./orderSent";
import {sendingIdPayment, sendingOrderIdPayment} from "../../../../redux/orderReducer";

class OrderSentContainer extends React.Component {
    componentWillMount() {
        this.props.sendingIdPayment();
    }
    render() {
        return <OrderSent {...this.props} address={this.props.addressPage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        order: state.Order
    }
};
const OrderSentContainerExport = connect(mapStateToProps, {sendingIdPayment})(OrderSentContainer)
export default OrderSentContainerExport;