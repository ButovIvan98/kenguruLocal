import React from 'react';
import {connect} from "react-redux";
import OrderSent from "./orderSent";
import {sendingOrderIdPayment} from "../../../../redux/orderReducer";

class OrderSentContainer extends React.Component {
    componentDidMount() {
        this.props.sendingOrderIdPayment();
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
const OrderSentContainerExport = connect(mapStateToProps, {sendingOrderIdPayment})(OrderSentContainer)
export default OrderSentContainerExport;