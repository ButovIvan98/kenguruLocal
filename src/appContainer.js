import React from 'react';
import {connect} from "react-redux";
import App from "./App";
import {checkToken} from "./redux/authReducer";

class AppContainer extends React.Component {
    componentDidMount() {
        this.setState(this.props.checkToken());
    }
    render() {
        return <App {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        auth:state.AuthPage
    }
}
let ExportAppContainer = connect(mapStateToProps,
    {checkToken})(AppContainer);
export default ExportAppContainer;