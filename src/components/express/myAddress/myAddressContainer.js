import React from "react";
import MyAddress from "./myAddress";
import {connect} from "react-redux";

class MyAddressContainer extends React.Component{
    render(){
        return <MyAddress {...this.props}/>
    }
}

let mapStateToProps =(state)=>{
    return{
        myAddress: state.AddressPage
    }
}
const ExportMyAddressContainer = connect(mapStateToProps,{})(MyAddressContainer);
export default ExportMyAddressContainer;