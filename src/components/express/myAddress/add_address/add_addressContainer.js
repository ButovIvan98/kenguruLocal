import React from 'react';
import {connect} from "react-redux";
import AddAddress from "./add_address";
import {
    updateTextCity,
    updateTextCountry,
    updateTextFlat,
    updateTextHouse,
    updateTextIndex,
    updateTextStreet
} from "../../../../redux/addressReducer";


class AddressForm extends React.Component {

    render() {
        return <AddAddress {...this.props} address={this.props.addressPage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        addressPage: state.Address
    }
};
const AddressContainerExport = connect(mapStateToProps, {
    updateTextCountry,
    updateTextCity,
    updateTextStreet,
    updateTextHouse,
    updateTextFlat,
    updateTextIndex
})(AddressForm);
export default AddressContainerExport;