import React from 'react';
import {connect} from "react-redux";
import Order from "./order";
import {
    addChoiceAddressRecipient,
    addChoiceAddressSender,
    addTerminalRecipient,
    addTerminalSender,
    choiceAddressRecipient,
    choiceAddressSender,
    choiceCompanyRecipient,
    choiceCompanySender,
    informationHouseRecipient,
    informationHouseSender,
    informationStreetRecipient,
    informationStreetSender,
    listCompanyRecipient,
    listCompanySender,
    orderRegister,
    searchHouseRecipient,
    searchHouseSender,
    searchStreetRecipient,
    searchStreetSender,
    seriesAndNumberPassport,
    updateAdditionalPhoneRecipient,
    updateAdditionalPhoneSender,
    updateCommentRecipient,
    updateCommentSender,
    updateDateIssue,
    updateDateShipping,
    updateEmailRecipient,
    updateFlatRecipient,
    updateFlatSender,
    updateInnCompanyRecipient,
    updateIssuedByPassport,
    updateLegalRecipient,
    updateMiddleNameRecipient,
    updateMiddleNameSender,
    updateNameCompanyRecipient,
    updateNameCompanySender,
    updateNameRecipient,
    updateNameSender,
    updatePhoneRecipient,
    updatePhoneSender,
    updateSurnameRecipient,
    updateSurnameSender,
    updateValidCompany,
    updateValidDateIssue,
    updateValidDateShipping,
    updateValidEmailRecipient,
    updateValidInnLegalEntity,
    updateValidIssuedByPassport,
    updateValidSeriesAndNumber,
    updateValidTerminalRecipient,
    updateValidTerminalSender,
    updateZipRecipient,
    updateZipSender,
    validHouseRecipient,
    validHouseSender,
    validNameRecipient,
    validNameSender,
    validPhoneRecipient,
    validPhoneSender,
    validStreetRecipient,
    validStreetSender,
    validSurnameRecipient,
    validSurnameSender,
    validZipRecipient,
    validZipSender
} from "../../../redux/orderReducer";

class OrderContainer extends React.Component{
    componentDidMount() {
        //this.props.addListAddressBookOrder()
    }

    render(){
        return <Order {...this.props}/>
    }
}

let mapStateToProps =(state)=>{
    return{
        order:state.Order,
        address:state.AddressPage
    }
}
const ExportOrderContainer = connect(mapStateToProps, {
    updateSurnameSender, updateNameSender, updateMiddleNameSender,
    updatePhoneSender, updateAdditionalPhoneSender, updateNameCompanySender,
    updateSurnameRecipient, updateNameRecipient, updateMiddleNameRecipient,
    updatePhoneRecipient, updateAdditionalPhoneRecipient, updateNameCompanyRecipient,
    validSurnameSender, validNameSender, validPhoneSender, validSurnameRecipient,
    validNameRecipient, validPhoneRecipient, searchStreetSender, informationStreetSender,
    searchHouseSender, informationHouseSender, updateZipSender, updateFlatSender,
    searchStreetRecipient, informationStreetRecipient, searchHouseRecipient,
    informationHouseRecipient, updateZipRecipient, updateFlatRecipient,
    addTerminalSender, addTerminalRecipient, choiceAddressSender,
    choiceAddressRecipient, addChoiceAddressSender, addChoiceAddressRecipient,
    seriesAndNumberPassport, updateInnCompanyRecipient, updateEmailRecipient,
    updateCommentSender, updateCommentRecipient, orderRegister,
    updateLegalRecipient, listCompanySender, listCompanyRecipient,
    choiceCompanyRecipient, choiceCompanySender,
    updateDateIssue, updateIssuedByPassport, validStreetSender,
    validHouseSender, validZipSender, validStreetRecipient,
    validHouseRecipient, validZipRecipient, updateValidTerminalRecipient,
    updateValidTerminalSender,
    updateValidSeriesAndNumber,
    updateValidIssuedByPassport,updateValidCompany,updateValidDateIssue,
    updateValidEmailRecipient,updateValidInnLegalEntity,updateDateShipping,
    updateValidDateShipping,

})(OrderContainer);
export default ExportOrderContainer;