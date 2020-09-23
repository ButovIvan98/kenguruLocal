import React from 'react';
import classes from './css/myShipments.module.css';
import {NavLink} from "react-router-dom";
import SearchSVG from "../../common/svgImg/searchSVG";
import BlockShipments from "./blockShipments/blockShipments";

const MyShipments = (props) => {
    let listOrder = props.shipments.orderList.map(list => (
        <BlockShipments
            //color={list.color}
            sendingCity={list.sender_city}
            sender={list.sender_contact === null
                ? list.sender_terminal.surname + ' ' + list.sender_terminal.name
                : list.sender_contact.surname + ' ' + list.sender_contact.name
            }
            recipientCity={list.receiver_city}
            recipient={list.receiver_contact === null
                ? list.receiver_terminal.surname + ' ' + list.receiver_terminal.name
                : list.receiver_contact.surname + ' ' + list.receiver_contact.name}
            status={list.status}
            dateOrder={list.date_created.split('T')[0]}
            numberInvoice={list.internal_number}
            price={list.price}
            transportCompany={list.operator}
            tariff={list.rate}
        />
    ))
    return <div className={'container' + ' ' + classes.block}>
        <div className={'row mr-0 ml-0' + ' ' + classes.blockRow}>
            <div className={'col-12 '}>
                <div className={'row'}>
                    <div className={'col-12 pl-0 pr-0'}>
                        <input placeholder={'Введите данные перевозки'} className={classes.search}/>
                        <SearchSVG/>
                        <span className={classes.textHeaderFilter}>Сортировать: </span>
                        <select className={classes.listFilter}>
                            <option>Сначала новые</option>
                            <option>Сначала старые</option>
                            <option>Сначала дорогие</option>
                            <option>Сначала дешевые</option>
                        </select>
                        <svg className={classes.imgSelect} width="10" height="6" viewBox="0 0 10 6" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M1 1L5 5L9 1" stroke="#0B202C"/>
                        </svg>

                    </div>
                </div>
                {listOrder.length === 0
                    ? <div className={'row mt-5'}>
                        <div className={'col-12 mt-2 text-center'}>
                            <span className={classes.textStyle}>Нет созданных отправлений.</span>
                        </div>
                    </div>
                    : listOrder}
            </div>
        </div>
    </div>
}
export default MyShipments