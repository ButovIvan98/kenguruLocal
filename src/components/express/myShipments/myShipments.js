import React from 'react';
import classNamees from './css/myShipments.module.css';
import {NavLink} from "react-router-dom";

const MySpipments = (props) => {
    let listOrder = props.MySpipments.map(list => (
        <NavLink className={classNamees.navLink} to={'/1'}>
            <div className={'row mb-3 mt-3 ' + ' ' + classNamees.listOrder}>
                <hr className={'d-block d-lg-none' + ' ' + classNamees.line}/>
                <div className={'col-lg-2 mb-lg-0 mb-3 col-12 '} style={{borderLeft: '2px solid' + ' ' + list.color}}>
                    <span className={classNamees.textHeader}>{list.sendingCity}</span>
                    <p className={classNamees.text}>{list.sender}</p>
                </div>
                <div className={'col-lg-1 mt-2 d-none d-lg-block'}>
                    <hr className={classNamees.lineDouble}/>
                </div>
                <div className={'col-lg-2 mb-lg-0 mb-3 col-12' + ' ' + classNamees.cityIn}>
                    <span className={classNamees.textHeader}>{list.recipientCity}</span>
                    <p className={classNamees.text}>{list.recipient}</p>
                    <p className={classNamees.statusOrder} style={{color: list.color}}>{list.status}</p>
                </div>
                <div className={'col-lg-2 col-6'}>
                    <span className={classNamees.textHeader}>{list.dateOrder}</span>
                    <p className={classNamees.text}>Дата заказа</p>
                </div>
                <div className={'col-lg-2 mb-lg-0 mb-2 col-6'}>
                    <span className={classNamees.textHeader}>{list.numberInvoice}</span>
                    <p className={classNamees.text}>Номер накладной</p>
                </div>
                <div className={'col-lg-1 col-6 pl-lg-0 pr-lg-0'}>
                    <span className={classNamees.textHeader} style={{color: '#28a4eb'}}>{list.price} ₽</span>
                    <p className={classNamees.text}>Цена</p>
                </div>
                <div className={'col-lg-2 col-6'}>
                    <span className={classNamees.textHeader}>{list.transportCompany}</span>
                    <p className={classNamees.text}>{list.tariff}</p>
                </div>
            </div>
        </NavLink>
    ))
    return <div className={'container' + ' ' + classNamees.block}>
        <div className={'row mr-0 ml-0' + ' ' + classNamees.blockRow}>
            <div className={'col-12 '}>
                <div className={'row'}>
                    <div className={'col-12 pl-0 pr-0'}>
                        <input placeholder={'Введите данные перевозки'} className={classNamees.search}/>
                        <svg className={'d-lg-inline d-none' + ' ' + classNamees.imgSearch} width="30" height="30"
                             viewBox="0 0 30 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                                <path
                                    d="M13 3C7.489 3 3 7.489 3 13C3 18.511 7.489 23 13 23C15.3965 23 17.5974 22.149 19.3223 20.7363L25.293 26.707C25.3851 26.803 25.4955 26.8796 25.6176 26.9324C25.7397 26.9852 25.8712 27.0131 26.0042 27.0144C26.1373 27.0158 26.2692 26.9906 26.3924 26.9403C26.5156 26.89 26.6275 26.8157 26.7216 26.7216C26.8157 26.6275 26.89 26.5156 26.9403 26.3924C26.9906 26.2692 27.0158 26.1373 27.0144 26.0042C27.0131 25.8712 26.9852 25.7397 26.9324 25.6176C26.8796 25.4955 26.803 25.3851 26.707 25.293L20.7363 19.3223C22.149 17.5974 23 15.3965 23 13C23 7.489 18.511 3 13 3ZM13 5C17.4301 5 21 8.56988 21 13C21 17.4301 17.4301 21 13 21C8.56988 21 5 17.4301 5 13C5 8.56988 8.56988 5 13 5Z"
                                    fill="#0B202C"/>
                            </g>
                        </svg>
                        <span className={classNamees.textHeaderFilter}>Сортировать: </span>
                        <select className={classNamees.listFilter}>
                            <option>Сначала новые</option>
                            <option>Сначала старые</option>
                            <option>Сначала дорогие</option>
                            <option>Сначала дешевые</option>
                        </select>
                        <svg className={classNamees.imgSelect} width="10" height="6" viewBox="0 0 10 6" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M1 1L5 5L9 1" stroke="#0B202C"/>
                        </svg>

                    </div>
                </div>

                {listOrder}
            </div>
        </div>
    </div>
}
export default MySpipments