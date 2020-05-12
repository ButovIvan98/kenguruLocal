let initialState = {
    price: '247',
    status: 'На рассмотрении',
    colorStatus: 'orange',
    invoiceNumber: '65445545654',
    volume: '10',
    weight: '3',
    photo: 'https://kenguruexpress.ru/images/services/dpd.png',
    dateOrder: '2019-03-20',
    dateShipment: '2019-05-21',
    companyShipment: 'ООО"СК-Первый"',
    contactPersonShipment: 'Иван Юрьевич Б.',
    phoneShipment: '89994768392',
    addressShipment: 'г. Новосибирск, ул.Горморг 213, кв./оф. 213',
    commentShipment: '----------',
    dateRecipient: '2019-04-02',
    companyRecipient: 'ООО"Газпром"',
    contactPersonRecipient: 'Кирилл Евгеньевич Саньков',
    phoneRecipient: '8-999-476-83-92',
    addressRecipient: 'г.Барнаул ул.Некрасова 41',
    commentRecipient: '----------'
};
const MyShipmentsInformationReducer = (state = initialState, action) => {
    return state;
}
export default MyShipmentsInformationReducer;