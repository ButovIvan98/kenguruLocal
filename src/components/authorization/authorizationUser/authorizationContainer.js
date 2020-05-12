import React from 'react';
import SignIn from "./authorization";
import {connect} from "react-redux";
import {
    auth,
    updateEmail,
    updatePassword, updateRememberMe,

} from "../../../redux/authReducer";

class AuthorizationContainer extends React.Component {

    render() {
        return <SignIn {...this.props} />
    }
}
let mapStateToProps = (state) => {
    return {
        authorization: state.AuthPage
    }
};
const AuthorizationContainerExport = connect(mapStateToProps, {
    updateEmail,
    updatePassword,
    auth,
    updateRememberMe
})(AuthorizationContainer);
export default AuthorizationContainerExport