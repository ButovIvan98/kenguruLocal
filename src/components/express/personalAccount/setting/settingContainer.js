import React from 'react';
import {connect} from "react-redux";
import Setting from "./setting";
import {
    activateUser, codeReviews,
    updateClickButtonCode,
    updateMiddleName,
    updateName,
    updateNumber,
    updateSurname
} from "../../../../redux/settingReducer";

class SettingContainer extends React.Component {
    render() {
        return <Setting {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        setting: state.Setting,
    }
}
let ExportSettingContainer = connect(mapStateToProps,
    {
        updateSurname,
        updateMiddleName,
        updateName,
        updateNumber,
        updateClickButtonCode,
        activateUser,
        codeReviews,
    })(SettingContainer);
export default ExportSettingContainer;