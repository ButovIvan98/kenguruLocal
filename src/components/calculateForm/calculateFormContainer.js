import React from 'react';
import {connect} from "react-redux";
import {
    updateStatusParameters,
    widthData,
    weightData,
    lenghtData,
    heightData,
    quantityData,
    volumeData,
    addCargo,
    statusCalculate
} from '../../redux/calculateFormReducer'
import CalculateForm from "./calculateForm";

class CalculateFormContainer extends React.Component{
    render(){
        return <CalculateForm {...this.props}/>
    }
}   

let mapStateToProps =(state)=>{
    return{
        calculate:state.CalculateFormPage
    }
}
const ExportCalculateFormContainer = connect(mapStateToProps,
    {
        updateStatusParameters,
        addCargo,
        widthData,
        weightData,
        volumeData,
        lenghtData,
        heightData,
        quantityData,
        statusCalculate
    })(CalculateFormContainer);
export default ExportCalculateFormContainer;