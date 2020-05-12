let initialState = {
    list: [
        {
            id: '1',
            color: 'grey',
            sender: 'Иван Юрьевич Б.',
            sendingCity: 'Новосибирск',
            status: 'Нет оплаты',
            recipient: 'Кирилл Евгеньевич',
            recipientCity: 'Барнаул',
            dateOrder: '2019-11-19',
            numberInvoice: '9849849852',
            price: '2 478',
            transportCompany: 'DPD',
            tariff: 'DPD Online Express'
        },
        {
            id: '2',
            color: 'red',
            sender: 'Иван Юрьевич Б.',
            sendingCity: 'Новосибирск',
            status: 'Отменен',
            recipient: 'Кирилл Евгеньевич',
            recipientCity: 'Барнаул',
            dateOrder: '2019-11-19',
            numberInvoice: '9849849852',
            price: '2 478',
            transportCompany: 'Деловые линии',
            tariff: 'Эконом'
        },
        {
            id: '2',
            color: 'green',
            sender: 'Иван Юрьевич Б.',
            sendingCity: 'Томск',
            status: 'Доставлено',
            recipient: 'Кирилл Евгеньевич',
            recipientCity: 'Омск',
            dateOrder: '2019-11-19',
            numberInvoice: '9849849852',
            price: '800',
            transportCompany: 'Cdek',
            tariff: 'Эконом'
        },
    ],
}
const MyShipmentsReducer = (state = initialState, action) => {
    return state;
}
export default MyShipmentsReducer;