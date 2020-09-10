import React from 'react';
import {connect} from "react-redux";
import {searchListOrder} from "../../../redux/myShipmentsReducer";
import MyShipments from "./myShipments";

class MyShipmentsContainer extends React.Component {
    componentDidMount() {
        this.props.searchListOrder();
    }

    render() {
        return <MyShipments {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        shipments: state.MyShipmentsPage
    }
};
let ExportMyShipmentsContainer = connect(mapStateToProps,{searchListOrder})(MyShipmentsContainer);
export default ExportMyShipmentsContainer;
