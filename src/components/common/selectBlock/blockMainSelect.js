import React from "react";
import classes from './blockMainSelect.module.css';
import {NavLink} from "react-router-dom";

const BlockMainSelect = (props) => {


    let updateDataCompany=(id,name,logo,person)=>{
        props.props.updateCompanyActiveData(id,name,logo,person);
        props.props.newStatus(props.status);
    }
    let listCompanyData=props.listCompany.map(nav=>(
        <div onClick={()=>(updateDataCompany(nav.id,nav.name, nav.logo,nav.responsiblePerson))} className={'row mr-0 ml-0 mb-2'  + ' ' + classes.blockCompany}>
            <div className={'col-auto pr-0 align-self-center'}>
                <img src={nav.logo} className={classes.imgProfile}/>
            </div>
            <div className={'col-auto text-left pr-0'}>
                <span className={classes.nameCompany}>{nav.name}</span><br/>
                <span className={classes.authorizedFaceCompany}>{nav.responsiblePerson}</span>
            </div>
        </div>
    ))
    let updateStatus=()=>{
        props.props.newStatus(props.status);
    };

    return <div style={{display: props.status}} className={classes.listBlock}>
        <NavLink to={'/personalAccount'} className={classes.mainBlockLink}><span onClick={updateStatus}>Личный кабинет</span></NavLink><br/>
        <NavLink to={'/'} className={classes.mainBlockLink}><span onClick={updateStatus}>Настройки</span></NavLink><br/>
        <NavLink to={'/'} className={classes.mainBlockLink}><span onClick={updateStatus}>Выход</span></NavLink><br/>
        <div className={'row mb-2'}>
            <div className={'col-12 text-center'}>
                <span className={classes.mainBlockHeader}>Аккаунты</span>
            </div>
        </div>
        <div className={'row'}>
            <div className={'col-12' + ' ' + classes.blockLine} >
                {listCompanyData}
            </div>
        </div>
        <div className={'col-12 mt-2 text-center'}>
            <NavLink onClick={updateStatus} className={classes.linkAddCompany} to={'/addCompany'}>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0V14M14 7H0" stroke="url(#paint0_linear)" stroke-width="2"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="10.5" y1="1.22426e-06" x2="-3.4987" y2="6.84921"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#34A5E5"/>
                            <stop offset="1" stop-color="white"/>
                        </linearGradient>
                    </defs>
                </svg> Добавить компанию
            </NavLink>
        </div>
    </div>
}
export default BlockMainSelect;