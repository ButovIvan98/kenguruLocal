import React from 'react';
import classNamees from './modalMobileMenu.module.css';
import KenguruIcons from "../../svgImg/kenguruIcons";
import {NavLink} from "react-router-dom";
import classes from "../../../header/Permanent_main/Permanent_main.module.css";
import Avatar from "@material-ui/core/Avatar";
const ModalMobileMenu = (props) => {
    let closeModal = () => {
        const input = document.querySelector('#gridModal')
        const div = document.querySelector('.modal-backdrop')
        const body = document.querySelector('.modal-open')
        input.setAttribute('class', 'modal fade');
        input.setAttribute('aria-hidden', 'true')
        input.setAttribute('style', 'display:none')
        div.remove()
        body.setAttribute('class', '')
    }
    let listCompanyData = props.listCompany.map(nav => (
        <div onClick={()=>{
         props.props.newStatus(props.props.StatusBlock.statusBlockMain);
         props.props.updateCompanyActiveData(
             nav.id,
             nav.company_title,
             nav.is_legal,
             nav.is_owner_company,
             nav.is_personal,
             nav.photo,
            (nav.last_name + ' ' + nav.first_name)
         )}}
             className={'row  mr-0 ml-0 mb-2' + ' ' + classNamees.blockCompany}>
            <div className={'col-auto pr-0 align-self-center'}>
                <Avatar>
                    {
                        nav.is_personal
                            ? ((nav.last_name + ' ' + nav.first_name).substring(0, 2)).toUpperCase()
                            : ((nav.company_title).substring(0, 2)).toUpperCase()
                    }
                </Avatar>
            </div>
            <div className={'col-auto text-left pr-0'}>
                <span className={classNamees.nameCompany}>{nav.is_personal
                    ? 'Физ. лицо'
                    : (String(nav.company_title).length > 25
                        ? String(nav.company_title).substr(0, 22) + ' ...'
                        : nav.company_title)}</span><br/>
                <span className={classNamees.authorizedFaceCompany}>{nav.last_name + ' ' + nav.first_name}</span>
            </div>
        </div>
    ));
    return <div className="modal fade" id="gridModal" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className={'modal-dialog' + ' ' + classNamees.modalDialog} role="document">
            <div className={'modal-content' + ' ' + classNamees.modalContent}>
                <div className={'modal-header' + ' ' + classNamees.modalHeader}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-8'}>
                                <KenguruIcons/>
                            </div>
                            <div className={'col-4 text-right align-self-center'}>
                                <button type="button" className={'close' + ' ' + classNamees.close} data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'modal-body' + ' ' + classNamees.modalBody}>
                    <div className={'container'}>
                        <div className={'row'}>
                            {
                                props.props.auth.isAuth
                                    ? <div className={'col-12'}>
                                        <div className={'row  mr-0 ml-0 mb-2' + ' ' + classNamees.blockCompany}>
                                            <div className={'col-auto pr-0 align-self-center'}>
                                                <Avatar>{props.props.activeCompany.shortName}</Avatar>
                                            </div>
                                            <div className={'col-auto text-left pr-0'}>
                                                <span
                                                    className={classNamees.nameCompany}> {props.props.activeCompany.isPersonal
                                                    ? ( String(props.props.activeCompany.username).length>25
                                                        ? String(props.props.activeCompany.username).substr(0,23) + ' ...'
                                                        : props.props.activeCompany.username)
                                                    : (String(props.props.activeCompany.companyTitle).length > 25
                                                        ? String(props.props.activeCompany.companyTitle).substr(0,23) + ' ...'
                                                        : props.props.activeCompany.companyTitle)}</span><br/>
                                                <span
                                                    className={classNamees.authorizedFaceCompany}>{props.props.ResponsiblePerson}</span>
                                            </div>
                                        </div>
                                    </div>
                                    : <div className={'col-12'} onClick={() => {
                                        closeModal()
                                    }}>
                                        <NavLink id={'navLinkClose'} className={classNamees.btnAddCompany}
                                                 to={'/login'}><span>Авторизация</span></NavLink>
                                    </div>
                            }
                            <div className={'col-12 text-center'}>
                                <span className={classNamees.modalHeaderText}>Навигация</span>
                            </div>
                            <div className={'col-12'}>
                                <div className={'row' + ' ' + classNamees.link}>
                                    <div className={'col-12 mb-1'} onClick={() => {
                                        closeModal()
                                    }}>
                                        <NavLink to={'/transportCompany'} data-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">Отслеживание груза</span></NavLink>
                                    </div>
                                    <div className={'col-12 mb-1'} onClick={() => {closeModal()}}>
                                        <NavLink to={'/transportCompany'} data-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">Транспортные компании</span></NavLink>
                                    </div>
                                    <div className={'col-12 mb-1'} onClick={() => {closeModal()}}>
                                        <NavLink to={'/paymentMethod'} data-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">Способы оплаты</span></NavLink>
                                    </div>
                                    <div className={'col-12 mb-1'} onClick={() => {closeModal()}}>
                                        <NavLink to={'/contact'} data-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">Контакты</span></NavLink>
                                    </div>
                                </div>
                            </div>
                            {
                                props.props.auth.isAuth
                                    ? <div className={'col-12'}>
                                        <div className={'row'}>
                                            <div className={'col-12 mb-2 text-center'}>
                                                <span className={classNamees.modalHeaderText}>Профиль</span>
                                            </div>
                                            <div className={'col-12' + ' ' + classNamees.link}>
                                                <div className={'row'}>
                                                    <div className={'col-12 mb-1'} onClick={() => {closeModal()}}>
                                                        <NavLink to={'/my_shipments'} data-dismiss="modal"
                                                                 aria-label="Close"><span
                                                            aria-hidden="true">Мои отправления</span></NavLink>
                                                    </div>
                                                    <div className={'col-12 mb-1'} onClick={() => {closeModal()}}>
                                                        <NavLink to={'/my_payment'} data-dismiss="modal" aria-label="Close"><span
                                                            aria-hidden="true">Счета и оплата</span></NavLink>
                                                    </div>
                                                    <div className={'col-12 mb-1'} onClick={() => {closeModal()}}>
                                                        <NavLink to={'/my_address'} data-dismiss="modal" aria-label="Close"><span
                                                            aria-hidden="true">Адресная книга</span></NavLink>
                                                    </div>
                                                    <div className={'col-12 mb-1'} onClick={() => {closeModal()}}>
                                                        <NavLink to={'/personalAccount'}><span>Личный кабинет</span></NavLink>
                                                    </div>
                                                    <div className={'col-12 mb-1'} onClick={() => {closeModal()}}>
                                                        <NavLink to={'/setting'}><span>Настройки</span></NavLink>
                                                    </div>
                                                    <div className={'col-12 mb-1'} onClick={() => {closeModal()}}>
                                                        <NavLink to={'/login'}><span
                                                            onClick={() => {
                                                                props.props.logout()
                                                            }} aria-hidden="true">Выход</span></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'col-12 text-center'}>
                                                <span className={classNamees.modalHeaderText}>Компании</span>
                                            </div>
                                            <div className={'col-12 mt-2' + ' ' + classNamees.blockLine}>
                                                {listCompanyData}
                                            </div>
                                            <div className={'col-12 mt-2 text-center'} onClick={() => {closeModal()}}>
                                                <NavLink className={classNamees.btnAddCompany} to={'/addCompany'}>Добавить
                                                    компанию</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default ModalMobileMenu;