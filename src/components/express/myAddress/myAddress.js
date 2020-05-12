import React from 'react';
import AddressContainerExport from "./add_address/add_addressContainer";
import classes from "./add_address/css/add_address.module.css";
import SearchAndFilter from "../../common/searchAndFilter/searchAndFilter";
import BlockAddress from "./blockAddress/blockAddress";

const MyAddress = (props) => {
    debugger
    return <div className={'container-fluid' + ' ' + classes.styleBlock}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 mt-2'}>
                    <h3 className={classes.headerText}>
                        Мои адреса
                    </h3>
                </div>
                <div className={'col-12'}>
                    <SearchAndFilter/>
                </div>
            </div>
            <BlockAddress data={props.myAddress.dataAddress}/>
        </div>
    </div>
}
export default MyAddress;