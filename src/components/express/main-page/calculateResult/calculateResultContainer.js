import React from 'react';
import CalculateResult from "./calculateResult";
import {connect} from "react-redux";
import {updateDataCheaper, updateDataFaster} from "../../../../redux/calculateFormReducer";

class CalculateResultContainer extends React.Component {
    render() {
        return <CalculateResult {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        calculate: state.CalculateFormPage,
    }
}
let ExportCalculateResultContainer = connect(mapStateToProps, { updateDataFaster, updateDataCheaper })(CalculateResultContainer);
export default ExportCalculateResultContainer;