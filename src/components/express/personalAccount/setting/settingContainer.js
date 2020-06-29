import React from 'react';
import {connect} from "react-redux";
import Setting from "./setting";
import {
    activateUser, codeReviewsNumber, profileInfo,
    updateClickButtonCode, updateEmailForm, updateFioUser,
    updateMiddleName,
    updateName,
    updateNumber,
    updateSurname, userEmailActive
} from "../../../../redux/settingReducer";

class SettingContainer extends React.Component {
    componentDidMount() {
        this.props.profileInfo();
    }

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
        codeReviewsNumber,
        userEmailActive,
        updateEmailForm,
        updateFioUser,
        profileInfo
    })(SettingContainer);
export default ExportSettingContainer;