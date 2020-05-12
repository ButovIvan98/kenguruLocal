import React from 'react';
import classNamees from './Variable_main.module.css';
import {NavLink} from "react-router-dom";

const Variable_main = (props) => {
    let navigationElement = props.Express_main.map(nav => (
        <div className={'col-auto d-none d-lg-block mt-2' + ' ' + classNamees.indexBlockMain}>
            <NavLink to={nav.id} activeclassName={classNamees.active}>
                <p className={classNamees.textHeader}>
                    {nav.title}
                </p></NavLink>
        </div>))
    return <div className={'container-fluid'}>
        <div className={'row' + ' ' + classNamees.blockMain}>
            {navigationElement}
        </div>
    </div>
};
export default Variable_main;