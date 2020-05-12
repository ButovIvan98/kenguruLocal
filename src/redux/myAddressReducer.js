const ADD_ADDRESS ='ADD_ADDRESS';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const DELETE_ADDRESS = 'DELETE_ADDRESS';

let initialState = {
    dataAddress:[
        {
            nameUser:'Иван Иванов',
            nameCompany:'ООО "Рога и Копыта"',
            addressCountry:'Россия',
            addressCity:'Москва',
            addressStreet:'Ленина',
            addressNumberHouse:'46',
            addressNumberOffice:'1',
            phone:'+7(999)476-83-92',
        },
        {
            nameUser:'Кирилл Саньков',
            nameCompany:'ООО "Вжлинк"',
            addressCountry:'Россия',
            addressCity:'Москва',
            addressStreet:'Молодежная',
            addressNumberHouse:'32',
            addressNumberOffice:'109',
            phone:'+7(999)476-83-10',
        }
    ]
}
const MyAddressReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default MyAddressReducer;