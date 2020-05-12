import React from "react";
import classNamees from './blockMainSelect.module.css';
import {NavLink} from "react-router-dom";

const BlockMainSelect = (props) => {


    let updateDataCompany=(id,name,logo,person)=>{
        props.props.updateCompanyActiveData(id,name,logo,person);
        props.props.newStatus(props.status);
    }
    let listCompanyData=props.listCompany.map(nav=>(
        <div onClick={()=>(updateDataCompany(nav.id,nav.name, nav.logo,nav.responsiblePerson))} className={'row mr-0 ml-0 mb-2'  + ' ' + classNamees.blockCompany}>
            <div className={'col-auto pr-0 align-self-center'}>
                <img src={nav.logo} className={classNamees.imgProfile}/>
            </div>
            <div className={'col-auto text-left pr-0'}>
                <span className={classNamees.nameCompany}>{nav.name}</span><br/>
                <span className={classNamees.authorizedFaceCompany}>{nav.responsiblePerson}</span>
            </div>
        </div>
    ))
    let updateStatus=()=>{
        props.props.newStatus(props.status);
    };

    return <div style={{display: props.status}} className={classNamees.listBlock}>
        <NavLink to={'/'} className={classNamees.mainBlockLink}><span onClick={updateStatus}>Личный кабинет</span></NavLink><br/>
        <NavLink to={'/'} className={classNamees.mainBlockLink}><span onClick={updateStatus}>Настройки</span></NavLink><br/>
        <NavLink to={'/'} className={classNamees.mainBlockLink}><span onClick={updateStatus}>Выход</span></NavLink><br/>
        <div className={'row mb-2'}>
            <div className={'col-12 text-center'}>
                <span className={classNamees.mainBlockHeader}>Аккаунты</span>
            </div>
        </div>
        <div className={'row'}>
            <div className={'col-12' + ' ' + classNamees.blockLine} >
                {listCompanyData}
            </div>
        </div>
    </div>
}
export default BlockMainSelect;