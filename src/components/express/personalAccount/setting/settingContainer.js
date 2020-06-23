import React from 'react';
import {connect} from "react-redux";
import Setting from "./setting";
import {
    activateUser, activationEmail, activationEmailUser, codeReviews,
    updateClickButtonCode,
    updateMiddleName,
    updateName,
    updateNumber,
    updateSurname, userEmailActive
} from "../../../../redux/settingReducer";

class SettingContainer extends React.Component {
    componentDidMount() {
        if(this.props.setting.activationEmail===false){
            this.props.userEmailActive();
        }
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
        codeReviews,
        userEmailActive
    })(SettingContainer);
export default ExportSettingContainer;