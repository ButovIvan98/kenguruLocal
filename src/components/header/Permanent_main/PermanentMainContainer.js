import React from 'react';
import {connect} from "react-redux";
import Permanent_main from "./PermanentMain";
import {newStatus, updateCompanyActiveData} from "../../../redux/headerReducer";

class PermanentMainContainer extends React.Component {
    render() {
        return <Permanent_main {...this.props} status={this.props.StatusBlock}/>
    }
}
let mapStateToProps = (state) => {
    return {
        StatusBlock: state.Sidebar.statusBlockMain,
        DataCompany:state.Sidebar.company,
        companyName:state.Sidebar.currentCompanyName,
        companyLogo:state.Sidebar.currentCompanyLogo,
        companyId:state.Sidebar.currentCompanyId,
        ResponsiblePerson:state.Sidebar.currentCompanyResponsiblePerson,
        auth:state.AuthPage
    }
}
const PermanentContainerMain = connect(mapStateToProps, {newStatus, updateCompanyActiveData})(PermanentMainContainer);
export default PermanentContainerMain;