import React from 'react'
import InformationCompany from "./informationCompany/informationCompany";
import ExportCalculateFormContainer from "../../calculateForm/calculateFormContainer";
import classes from '../../calculateForm/calculateForm.module.css'
import InformationModuleCompany from "./informationModuleCompany/informationModuleCompany";
import ExportCalculateResultContainer from "./calculateResult/calculateResultContainer";

const MainPage = (props)=>{
    return <div className={'container-fluid' + ' ' + classes.main }>
        <ExportCalculateFormContainer/>
        <ExportCalculateResultContainer/>
        <InformationCompany/>
        <InformationModuleCompany/>
    </div>
}
export default MainPage;