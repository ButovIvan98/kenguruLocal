import React from 'react';
import {connect} from "react-redux";
import {
    updateStatusParameters, widthData, weightData, heightData,
    quantityData, volumeData, addCargo, statusCalculate,
    updateCityDeparture, ListCityDeparture, updateCityDestination,
    ListCityDestination, lengthData
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
        lengthData,
        heightData,
        quantityData,
        statusCalculate,
        ListCityDeparture,
        updateCityDeparture,
        updateCityDestination,
        ListCityDestination
    })(CalculateFormContainer);
export default ExportCalculateFormContainer;