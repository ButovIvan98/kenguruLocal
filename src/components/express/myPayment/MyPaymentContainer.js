import React from 'react';
import {connect} from "react-redux";
import MyPayment from "./myPayment";
import {searchListPayment} from "../../../redux/myPaymentReducer";

class MyPaymentContainer extends React.Component {
    componentDidMount() {
        this.props.searchListPayment();
    }

    render() {
        return <MyPayment {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        payments: state.Payment
    }
};
let ExportMyPaymentContainer = connect(mapStateToProps,{searchListPayment})(MyPaymentContainer);
export default ExportMyPaymentContainer;
