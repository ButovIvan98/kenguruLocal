import React from 'react';
import ReloadPassword from "./reloadPassword";
import {connect} from "react-redux";
import {reloadPasswordServerData, updateEmailReloadPassword} from "../../../redux/registrationReducer";

class ReloadPasswordContainer extends React.Component {
    render() {
        return <ReloadPassword {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        reloadPassword: state.Registration
    }
};
export const ExportReloadPasswordContainer = connect(mapStateToProps, {updateEmailReloadPassword,reloadPasswordServerData})(ReloadPasswordContainer);
