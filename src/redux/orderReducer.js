let initialState = {
    addressBook:[
        {
            id: 1,
            user: 1,
            nameLocality:'Москва',//Наименование города
            locality: 1,//Код города
            street: 'test',//Наименование улицы
            street_type: '',//Тип улицы (пл. ул. и тд)
            house: "test",//Дом
            house_type: "test",//Тип дома
            block: "test",//Курпус дома (А и Б и тд)
            block_type: "test",//Тип корпуса
            flat: "test",//Квартира
            flat_type: "test",//Тип квартиры (кв, офис и тд)
            zip: "test",//Индекс
            company: "test",//Наименование компании
            surname: "test",//Фамилия
            name: "test",//Имя
            patronymic: "test",//Отчество
            phone: "test",//Телефон
            phone_extension: "test",//Добавочный номер
            phone2: "test",//Телефон 2
            phone2_extension: "test",//Добавочный номер 2
            comment: "test"//Комментарий
        }
    ],
    orderInfo:{
        idOrder:null,//id заказа
        imgCompany:null,//Логотип компании
        nameCompany:null,//Наименование компании
        tariff:null,//Тариф доставки
        rating:null,//Рейтинг
        deliveryTime:null,//Срок доставки
        conditionDelivery:null//Условия доставки(склад-склад, дверь-склад и тд.)
    },
    addressSender:{//Адрес отправителя
        city: [
            {id:'1', idCity:'1',city:'Барнаул'},
            {id:'2', idCity:'2',city:'Москва'},
            {id:'3', idCity:'5',city:'Новокузнецк'},
            {id:'4', idCity:'4',city:'Баево'},
            {id:'5', idCity:'3',city:'Алейск'},
        ],
        street:[
            {id:'1', street:'Ленина'},
            {id:'2', street:'Мамонтово'},
            {id:'3', street:'Юрина'},
            {id:'4', street:'Баварина'},
            {id:'5', street:'Сталина'},
        ],
        house:null,
        flat:null,
        index:null,
        comment:null,
    },
    sender: {//Отправитель
        surname: null,
        name:null,
        middleName:null,
        phone:null,
        additionalPhone:null,//Добавочный номер
        company:null
    },
    addressRecipient: {//Адрес получателя
        city: [
            {id:'1', idCity:'1',city:'Барнаул'},
            {id:'2', idCity:'2',city:'Москва'},
            {id:'3', idCity:'5',city:'Новокузнецк'},
            {id:'4', idCity:'4',city:'Баево'},
            {id:'5', idCity:'3',city:'Алейск'},
        ],
        street:[
            {id:'1', street:'Ленина'},
            {id:'2', street:'Мамонтово'},
            {id:'3', street:'Юрина'},
            {id:'4', street:'Баварина'},
            {id:'5', street:'Сталина'},
        ],
        house:null,
        flat:null,
        index:null,
        comment:null,
    },
    recipient: {//Получатель
        surname: null,
        name:null,
        middleName:null,
        phone:null,
        additionalPhone:null,//Добавочный номер
        company:null
    },
    dateShipping:null,//Дата забора
}