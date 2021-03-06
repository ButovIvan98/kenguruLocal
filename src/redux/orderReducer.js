import {
    validationFormDate,
    validationFormEmail,
    validationFormHouse, validationFormIndex,
    validationFormName,
    validationFormPhone, validationFormStreet,
    validationFormSurname
} from "../components/common/validationForm/validForm";
import {addAddressAPI, addCompanyAPI, addOrder, cityAPI, orderAPI} from "../API/api";
import Cookies from "js-cookie";
//Информация о транспортной компании и тарифе
let UPDATE_INFORMATION_TK = 'UPDATE_INFORMATION_TK'
let CLEAR_REDUCER = 'CLEAR_REDUCER'//Очистка редюсера от всех изменений ранее внесенных
//Информация об отправителе
let UPDATE_SURNAME_SENDER = 'UPDATE_SURNAME_SENDER';//Изменение фамилии отправителя
let UPDATE_NAME_SENDER = 'UPDATE_NAME_SENDER';//Изменение имени отправителя
let UPDATE_MIDDLE_NAME_SENDER = 'UPDATE_MIDDLE_NAME_SENDER';//Изменение отчества отправителя
let UPDATE_PHONE_SENDER = 'UPDATE_PHONE_SENDER'//Изменение номера телефона отправителя
let UPDATE_ADDITIONAL_PHONE_SENDER = 'UPDATE_ADDITIONAL_PHONE_SENDER'//Изменение дополнительного номера телефона отправителя
let UPDATE_NAME_COMPANY_SENDER = 'UPDATE_NAME_COMPANY_SENDER'//Изменение наименование компании отправителя
let UPDATE_COMMENT_SENDER = 'UPDATE_COMMENT_SENDER'//Изменение комментария отправителя
//Информация о получателе
let UPDATE_SURNAME_RECIPIENT = 'UPDATE_SURNAME_RECIPIENT';//Изменение фамилии получателя
let UPDATE_NAME_RECIPIENT = 'UPDATE_NAME_RECIPIENT';//Изменения имени получателя
let UPDATE_MIDDLE_NAME_RECIPIENT = 'UPDATE_MIDDLE_NAME_RECIPIENT';//Изменения отчества получателя
let UPDATE_PHONE_RECIPIENT = 'UPDATE_PHONE_RECIPIENT'//Изменение номера телефона получателя
let UPDATE_ADDITIONAL_PHONE_RECIPIENT = 'UPDATE_ADDITIONAL_PHONE_RECIPIENT'//Изменение дополнительного номера телефона получателя
let UPDATE_NAME_COMPANY_RECIPIENT = 'UPDATE_NAME_COMPANY_RECIPIENT'//Изменение наименование компании получателя
let UPDATE_COMMENT_RECIPIENT = 'UPDATE_COMMENT_RECIPIENT'//Изменение комментария получателя
let UPDATE_LEGAL_ENTITY = 'UPDATE_LEGAL_ENTITY'//Получатель юридическое лицо или физическое
//Проверка полей на валидацию
let VALID_SURNAME_SENDER = 'VALID_SURNAME_SENDER'//Проверка поля на валидность фамилии
let VALID_NAME_SENDER = 'VALID_NAME_SENDER'//Проверка поля на валидность имени
let VALID_PHONE_SENDER = 'VALID_PHONE_SENDER'//Проверка поля на валидность телефона
let VALID_SURNAME_RECIPIENT = 'VALID_SURNAME_RECIPIENT'//Проверка поля на валидность фамилии
let VALID_NAME_RECIPIENT = 'VALID_NAME_RECIPIENT'//Проверка поля на валидность имени
let VALID_PHONE_RECIPIENT = 'VALID_PHONE_RECIPIENT'//Проверка поля на валидность телефона
let VALID_STREET_SENDER = 'VALID_STREET_SENDER'//Проверка на то что улица отправления заполненна
let VALID_HOUSE_SENDER = 'VALID_HOUSE_SENDER'//Проверка что дом отправления заполнен
let VALID_ZIP_SENDER = 'VALID_ZIP_SENDER'//Проверка что индекст отправления заполнен
let VALID_STREET_RECIPIENT = 'VALID_STREET_RECIPIENT'//Проверка что улица доставки заполнена
let VALID_HOUSE_RECIPIENT = 'VALID_HOUSE_RECIPIENT'//Проверка что дом доставки заполнен
let VALID_ZIP_RECIPIENT = 'VALID_ZIP_RECIPIENT'//Проверка что индекс доставки заполнен
let VALID_SERIES_NUMBER_PASSPORT = 'VALID_SERIES_NUMBER_PASSPORT'//Проверка что серия и номер паспорта заполнены
let VALID_ISSUED_BY_PASSPORT = 'VALID_ISSUED_BY_PASSPORT'//Проверка что поле кем выдан паспорт заполнен
let VALID_COMPANY = 'VALID_COMPANY'//Проверка что поле компания заполнено
let VALID_DATE_ISSUE = 'VALID_DATE_ISSUE'//Проверка что поле дата выдачи паспорта заполенно
let VALID_EMAIL_RECIPIENT = 'VALID_EMAIL_RECIPIENT'//Проверка что поле емаил компании получателя заполнен
let VALID_INN_LEGAL_ENTITY = 'VALID_INN_LEGAL_ENTITY'//Проверка что поле инн компании получателя заполнено
let VALID_TERMINAL_SENDER = 'VALID_TERMINAL_SENDER'//Проверка что терминал отправителя добавлен
let VALID_TERMINAL_RECIPIENT = 'VALID_TERMINAL_RECIPIENT'//Проверка что терминал получателя добавлен
//Информация об адресе отправления
let UPDATE_CITY_SENDER = 'UPDATE_CITY_SENDER'//Обновление наименования города отправителя
let UPDATE_STREET_SENDER = 'UPDATE_STREET_SENDER'//Обновление наименования улицы отправителя
let UPDATE_HOUSE_SENDER = 'UPDATE_HOUSE_SENDER'//Обновление номера дома отправителя
let LIST_STREET_SENDER = 'LIST_STREET_SENDER'//Обновление списка улиц отправителя
let LIST_HOUSE_SENDER = 'LIST_HOUSE_SENDER'//Обновление списка домов отправителя
let UPDATE_FLAT_SENDER = 'UPDATE_FLAT_SENDER'//Обнавление квартиры отправителя
let UPDATE_ZIP_SENDER = 'UPDATE_ZIP_SENDER'//Обновление индекса отправителя
//Информация об адресе получателя
let UPDATE_CITY_RECIPIENT = 'UPDATE_CITY_RECIPIENT'//Обновление наименования города получателя
let UPDATE_STREET_RECIPIENT = 'UPDATE_STREET_RECIPIENT'//Обновление наименования улицы получателя
let UPDATE_HOUSE_RECIPIENT = 'UPDATE_HOUSE_RECIPIENT'//Обновление номера дома получателя
let LIST_STREET_RECIPIENT = 'LIST_STREET_RECIPIENT'//Обновление списка улиц получателя
let LIST_HOUSE_RECIPIENT = 'LIST_HOUSE_RECIPIENT'//Обновление списка домов получателя
let UPDATE_FLAT_RECIPIENT = 'UPDATE_FLAT_RECIPIENT'//Обнавление квартиры получателя
let UPDATE_ZIP_RECIPIENT = 'UPDATE_ZIP_RECIPIENT'//Обновление индекса получателя
//Заполнение и работа с адресной книгой.
let FULL_INFO_COMPANY_SENDER = 'FULL_INFO_COMPANY_SENDER'//Добавление полной информармации о компании
let FULL_INFO_COMPANY_RECIPIENT = 'FULL_INFO_COMPANY_RECIPIENT'//Добавление полной информармации о компании
let LIST_COMPANY_SENDER = 'LIST_COMPANY_SENDER'//Список компаний отправителя
let LIST_COMPANY_RECIPIENT = 'LIST_COMPANY_RECIPIENT'//Список компаний получателя
let LIST_ADDRESS_BOOK = 'LIST_ADDRESS_BOOK'//Список адресов в адресной книге
let LIST_ADDRESS_BOOK_SENDER = 'LIST_ADDRESS_BOOK_SENDER'//Список адресов для отправителя
let LIST_ADDRESS_BOOK_RECIPIENT = 'LIST_ADDRESS_BOOK_RECIPIENT'//Список адресов для получателя
let CHOICE_ADDRESS_SENDER = 'CHOICE_ADDRESS_SENDER'//Выбранный адрес из адресной книги для отправителя
let CHOICE_ADDRESS_RECIPIENT = 'CHOICE_ADDRESS_RECIPIENT'//Выбранный адрес из адресной книги для получателя
//Выбор и заполнение терминалов
let LIST_TERMINAL_SENDER = 'LIST_TERMINAL_SENDER'//Получение и заполнение списка терминалов
let LIST_TERMINAL_RECIPIENT = 'LIST_TERMINAL_RECIPIENT'//Получение и заполнение списка терминалов
let TERMINAL_SENDER = 'TERMINAL_SENDER'//Выбранные терминал отправления
let TERMINAL_RECIPIENT = 'TERMINAL_RECIPIENT'//Выбранные терминал прибытия
let ID_ADDRESS_SENDER = 'ID_ADDRESS_SENDER'//Заполнение id адреса отправителя
let ID_ADDRESS_RECIPIENT = 'ID_ADDRESS_RECIPIENT'//Заполнение id адреса получателя
//Данные для получателя при отправке юр. лицом
let UPDATE_DATE_ISSUE_PASSPORT = 'UPDATE_DATA_ISSUE_PASSPORT'//Дата получения паспорта
let ISSUED_BY_PASSPORT = 'ISSUED_BY_PASSPORT'//Кем выдан паспорт
let SERIES_NUMBER_PASSPORT = 'SERIES_NUMBER_PASSPORT'//Добавление серии и номера паспорта
let INN_COMPANY_RECIPIENT = 'INN_COMPANY_RECIPIENT'//Добавление инн юр. лица для получателя
let EMAIL_RECIPIENT = 'EMAIL_RECIPIENT'//Емеил получателя для отправки доверенности
let DATE_SHIPPING='DATE_SHIPPING'//Дата забора груза
let VALID_DATE_SHIPPING='VALID_DATE_SHIPPING'//Валидация для даты забора

/*Статус заказа*/
const ORDER = 'ORDER';
const PLACE_ORDER_LEGAL = 'PLACE_ORDER_LEGAL'//Заказа создает юридическое лицо
const PLACE_ORDER_NATURAL = 'PLACE_ORDER_NATURAL'//Заказ создает физическое лицо

let initialState = {
    srcPay: null,//ссылка для оплаты заказа для физических лиц
    placeOrderNaturalPerson: false,//если отправитель физическое лицо
    placeOrderLegalEntity: false,//если отправитель юридическое лицо
    order: false,//Отправлен ли заказ или нет true-да false-нет
    addressBook: [],
    informationCompany: null,//Информация о тарифе и компании
    sender: {
        type_user: 'sender',//Отправитель
        addressBook: [],//Адресная книга
        terminalSender: [//Терминалы отправителя если выбран тип забора как склад
        ],
        terminal: null,
        validTerminal: true,
        address: null,//Адресная строка полученная из адресной книги
        idAddress: '',//id закрепленного за адресом в адресной книге
        choiceAddressBook: false,//Выбирается ли адрес из адресной книги.
        addressSender: {//Адрес отправителя
            listStreet: [],//Список улиц полученный через DadaTa
            listHouse: [],//Список домов полученный через DadaTa
            city: null,//Выбранный город
            street: null,//Выбранная улица
            validStreet: true,//Валидация выбранной улицы
            house: null,//Выбранный дом
            validHouse: true,//Валидация выбранного дома
            flat: null,//Квартира
            zip: '',//Индекс
            validZip: true,//Валидация индекса
        },
        contactPerson: {//Отправитель
            legalEntity: false,
            surname: '',//Фамилия
            validSurname: true,//Валидация фамилии
            name: '',//Имя
            validName: true,//Валидация имени
            middleName: '',//Отчество если имеется
            phone: '',//Основной телефон
            validPhone: true,//Валидация телефона
            additionalPhone: '',//Добавочный номер
            company: '',//Наименование компании
            fullInfoCompany: null,//Полная информация о компании
            listCompany: [],//Список компаний
            comment: '',//Добавленный комментарий к заказу
            validCompany: true,
        },
    },
    recipient: {
        dateShipping: null,//Дата забора
        validDateShipping:true,//Валидность даты забора
        type_user: 'receiver',//Получатель
        addressBook: [],//Адресная книга
        terminalRecipient: [//Терминалы получателя если выбран тип доставки как склад
        ],
        terminal: null,
        validTerminal: true,
        address: null,//Адресная строка полученная из адресной книги
        idAddress: '',//id закрепленного за адресом в адресной книге
        choiceAddressBook: false,//Выбирается ли адрес из адресной книги.
        addressRecipient: {//Адрес отправителя
            listStreet: [],//Список улиц полученный через DadaTa
            listHouse: [],//Список домов полученный через DadaTa
            street: null,//Выбранная улица
            validStreet: true,//Валидация выбранной улицы
            city: null,//Выбранный город
            house: null,//Выбранный дом
            validHouse: true,//Валидация выбранного дома
            flat: null,//Квартира
            zip: '',//Индекс
            validZip: true,//Валидация индекса
        },
        contactPerson: {//Получатель
            legalEntity: false,//Юридическое лицо (true-false)
            surname: '',//Фамилия
            validSurname: true,//Валидация фамилии получателя
            name: '',//Имя
            validName: true,//Валидация имени получателя
            middleName: '',//Отчество если имеется
            phone: '',//Основной телефон
            validPhone: true,//Валидация телефона
            additionalPhone: '',//Добавочный номер
            listCompany: [],//Список компаний
            company: '',//Наименование компании
            fullInfoCompany: '',//Полная информация о компании
            series: '',//Серия паспорта получателя
            number: '',//Номер паспорта получателя
            issuedByPassport: '',//Кем выдан паспорт
            dateIssue: '',//Дата выдачи
            emailRecipient: '',//Емаил адрес получателя для отправки доверенности
            innLegalEntity: '',//ИНН компании получателя, если отправляется как юр лицом
            comment: '',//Добавленный комментарий к заказу
            validSeriesAndNumber: true,//Валидация серии и номера паспорта
            validIssuedByPassport: true,//Валидация поля кем дан паспорт
            validCompany: true,//Валидация наименования компании
            validDateIssue: true,//Валидация поля дата выдачи паспорта
            validEmailRecipient: true,//Валидация поля емаил получателя
            validInnLegalEntity: true,//Валидация поля инн компании получателя
        },
    },
}
const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_REDUCER:
            return {
                srcPay: null,//ссылка для оплаты заказа для физических лиц
                placeOrderNaturalPerson: false,//если отправитель физическое лицо
                placeOrderLegalEntity: false,//если отправитель юридическое лицо
                order: false,//Отправлен ли заказ или нет true-да false-нет
                addressBook: [],
                informationCompany: null,//Информация о тарифе и компании
                sender: {
                    type_user: 'sender',//Отправитель
                    addressBook: [],//Адресная книга
                    terminalSender: [//Терминалы отправителя если выбран тип забора как склад
                    ],
                    terminal: null,
                    validTerminal: true,
                    address: null,//Адресная строка полученная из адресной книги
                    idAddress: '',//id закрепленного за адресом в адресной книге
                    choiceAddressBook: false,//Выбирается ли адрес из адресной книги.
                    addressSender: {//Адрес отправителя
                        listStreet: [],//Список улиц полученный через DadaTa
                        listHouse: [],//Список домов полученный через DadaTa
                        city: null,//Выбранный город
                        street: null,//Выбранная улица
                        validStreet: true,//Валидация выбранной улицы
                        house: null,//Выбранный дом
                        validHouse: true,//Валидация выбранного дома
                        flat: null,//Квартира
                        zip: '',//Индекс
                        validZip: true,//Валидация индекса
                    },
                    contactPerson: {//Отправитель
                        legalEntity: false,
                        surname: '',//Фамилия
                        validSurname: true,//Валидация фамилии
                        name: '',//Имя
                        validName: true,//Валидация имени
                        middleName: '',//Отчество если имеется
                        phone: '',//Основной телефон
                        validPhone: true,//Валидация телефона
                        additionalPhone: '',//Добавочный номер
                        company: '',//Наименование компании
                        fullInfoCompany: null,//Полная информация о компании
                        listCompany: [],//Список компаний
                        comment: '',//Добавленный комментарий к заказу
                        validCompany: true,
                    },
                },
                recipient: {
                    dateShipping: null,//Дата забора
                    validDateShipping:true,//Валидность даты забора
                    type_user: 'receiver',//Получатель
                    addressBook: [],//Адресная книга
                    terminalRecipient: [//Терминалы получателя если выбран тип доставки как склад
                    ],
                    terminal: null,
                    validTerminal: true,
                    address: null,//Адресная строка полученная из адресной книги
                    idAddress: '',//id закрепленного за адресом в адресной книге
                    choiceAddressBook: false,//Выбирается ли адрес из адресной книги.
                    addressRecipient: {//Адрес отправителя
                        listStreet: [],//Список улиц полученный через DadaTa
                        listHouse: [],//Список домов полученный через DadaTa
                        street: null,//Выбранная улица
                        validStreet: true,//Валидация выбранной улицы
                        city: null,//Выбранный город
                        house: null,//Выбранный дом
                        validHouse: true,//Валидация выбранного дома
                        flat: null,//Квартира
                        zip: '',//Индекс
                        validZip: true,//Валидация индекса
                    },
                    contactPerson: {//Получатель
                        legalEntity: false,//Юридическое лицо (true-false)
                        surname: '',//Фамилия
                        validSurname: true,//Валидация фамилии получателя
                        name: '',//Имя
                        validName: true,//Валидация имени получателя
                        middleName: '',//Отчество если имеется
                        phone: '',//Основной телефон
                        validPhone: true,//Валидация телефона
                        additionalPhone: '',//Добавочный номер
                        listCompany: [],//Список компаний
                        company: '',//Наименование компании
                        fullInfoCompany: '',//Полная информация о компании
                        series: '',//Серия паспорта получателя
                        number: '',//Номер паспорта получателя
                        issuedByPassport: '',//Кем выдан паспорт
                        dateIssue: '',//Дата выдачи
                        emailRecipient: '',//Емаил адрес получателя для отправки доверенности
                        innLegalEntity: '',//ИНН компании получателя, если отправляется как юр лицом
                        comment: '',//Добавленный комментарий к заказу
                        validSeriesAndNumber: true,//Валидация серии и номера паспорта
                        validIssuedByPassport: true,//Валидация поля кем дан паспорт
                        validCompany: true,//Валидация наименования компании
                        validDateIssue: true,//Валидация поля дата выдачи паспорта
                        validEmailRecipient: true,//Валидация поля емаил получателя
                        validInnLegalEntity: true,//Валидация поля инн компании получателя
                    },
                },
            }
        case DATE_SHIPPING:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    dateShipping: action.bodyDateChipping
                }
            }
        case VALID_DATE_SHIPPING:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    validDateShipping: action.bodyValidDateShipping
                }
            }
        case UPDATE_SURNAME_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        surname: action.bodySurnameSender
                    }
                }
            }
        case UPDATE_NAME_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        name: action.bodyNameSender
                    }
                }
            }
        case UPDATE_MIDDLE_NAME_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        middleName: action.bodyMiddleNameSender
                    }
                }
            }
        case UPDATE_PHONE_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        phone: action.bodyPhoneSender
                    }
                }
            }
        case UPDATE_ADDITIONAL_PHONE_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        additionalPhone: action.bodyAdditionalPhoneSender
                    }
                }
            }
        case UPDATE_NAME_COMPANY_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        company: action.bodyCompanySender
                    }
                }
            }
        case UPDATE_COMMENT_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        comment: action.bodyCommentSender
                    }
                }
            }

        case VALID_SURNAME_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        validSurname: action.bodyValidSurnameSender
                    }
                }
            }
        case VALID_NAME_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        validName: action.bodyValidNameSender
                    }
                }
            }
        case VALID_PHONE_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        validPhone: action.bodyValidPhoneSender
                    }
                }
            }

        case LIST_STREET_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        listStreet: action.bodyListStreetSender
                    }
                }
            }
        case LIST_HOUSE_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        listHouse: action.bodyListHouseSender
                    }
                }
            }
        case UPDATE_STREET_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        street: action.bodyStreetSender
                    }
                }
            }
        case UPDATE_HOUSE_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        house: action.bodyHouseSender
                    }
                }
            }
        case UPDATE_CITY_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        city: action.bodyCitySender
                    }
                }
            }
        case UPDATE_FLAT_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        flat: action.bodyFlatSender
                    }
                }
            }
        case UPDATE_ZIP_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        zip: action.bodyZipSender
                    }
                }
            }


        case VALID_STREET_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        validStreet: action.bodyValidStreetSender
                    }
                }
            }
        case VALID_HOUSE_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        validHouse: action.bodyValidHouseSender
                    }
                }
            }
        case VALID_ZIP_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressSender: {
                        ...state.sender.addressSender,
                        validZip: action.bodyValidZipSender
                    }
                }
            }

        case UPDATE_SURNAME_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        surname: action.bodySurnameRecipient
                    }
                }
            }
        case UPDATE_NAME_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        name: action.bodyNameRecipient
                    }
                }
            }
        case UPDATE_MIDDLE_NAME_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        middleName: action.bodyMiddleNameRecipient
                    }
                }
            }
        case UPDATE_PHONE_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        phone: action.bodyPhoneRecipient
                    }
                }
            }
        case UPDATE_ADDITIONAL_PHONE_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        additionalPhone: action.bodyAdditionalPhoneRecipient
                    }
                }
            }
        case UPDATE_NAME_COMPANY_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        company: action.bodyCompanyRecipient
                    }
                }
            }
        case UPDATE_COMMENT_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        comment: action.bodyCommentRecipient
                    }
                }
            }
        case UPDATE_LEGAL_ENTITY:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        legalEntity: action.bodyLegalEntityRecipient
                    }
                }
            }

        case VALID_SURNAME_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        validSurname: action.bodyValidSurnameRecipient
                    }
                }
            }
        case VALID_NAME_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        validName: action.bodyValidNameRecipient
                    }
                }
            }
        case VALID_PHONE_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        validPhone: action.bodyValidPhoneRecipient
                    }
                }
            }
        case VALID_SERIES_NUMBER_PASSPORT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        validSeriesAndNumber: action.bodyValidSeriesAndNumberPassport
                    }
                }
            }
        case VALID_ISSUED_BY_PASSPORT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        validIssuedByPassport: action.bodyValidIssuedByPassport
                    }
                }
            }
        case VALID_COMPANY:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        validCompany: action.bodyValidCompany
                    }
                }
            }
        case VALID_DATE_ISSUE:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        validDateIssue: action.bodyValidDateIssue
                    }
                }
            }
        case VALID_EMAIL_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        validEmailRecipient: action.bodyValidEmailRecipient
                    }
                }
            }
        case VALID_INN_LEGAL_ENTITY:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        validInnLegalEntity: action.bodyValidInnLegalEntity
                    }
                }
            }

        case LIST_STREET_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        listStreet: action.bodyListStreetRecipient
                    }
                }
            }
        case LIST_HOUSE_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        listHouse: action.bodyListHouseRecipient
                    }
                }
            }
        case UPDATE_STREET_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        street: action.bodyStreetRecipient
                    }
                }
            }
        case UPDATE_HOUSE_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        house: action.bodyHouseRecipient
                    }
                }
            }
        case UPDATE_CITY_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        city: action.bodyCityRecipient
                    }
                }
            }
        case UPDATE_FLAT_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        flat: action.bodyFlatRecipient
                    }
                }
            }
        case UPDATE_ZIP_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        zip: action.bodyZipRecipient
                    }
                }
            }

        case VALID_STREET_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        validStreet: action.bodyValidStreetRecipient
                    }
                }
            }
        case VALID_HOUSE_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        validHouse: action.bodyValidHouseRecipient
                    }
                }
            }
        case VALID_ZIP_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressRecipient: {
                        ...state.recipient.addressRecipient,
                        validZip: action.bodyValidZipRecipient
                    }
                }
            }

        case UPDATE_INFORMATION_TK:
            return {
                ...state,
                informationCompany: action.bodyInformationCompany
            }

        case LIST_ADDRESS_BOOK:
            return {
                ...state,
                addressBook: action.bodyAddressBook
            }
        case LIST_ADDRESS_BOOK_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    addressBook: action.bodyAddressBookSender
                }
            }
        case LIST_ADDRESS_BOOK_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    addressBook: action.bodyAddressBookRecipient
                }
            }
        case LIST_COMPANY_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        listCompany: action.bodyListCompanySender
                    }
                }
            }
        case LIST_COMPANY_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        listCompany: action.bodyListCompanyRecipient
                    }
                }
            }
        case FULL_INFO_COMPANY_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    contactPerson: {
                        ...state.sender.contactPerson,
                        fullInfoCompany: action.bodyFullInfoCompanySender
                    }
                }
            }
        case FULL_INFO_COMPANY_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        fullInfoCompany: action.bodyFullInfoCompanyRecipient
                    }
                }
            }

        case CHOICE_ADDRESS_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    address: action.bodyAddressSender,
                    idAddress: action.bodyIdAddressSender,
                    choiceAddressBook: action.bodyChoiceAddressBookSender,
                }
            }
        case CHOICE_ADDRESS_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    address: action.bodyAddressRecipient,
                    idAddress: action.bodyIdAddressRecipient,
                    choiceAddressBook: action.bodyChoiceAddressBookRecipient
                }
            }
        case ID_ADDRESS_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    idAddress: action.bodyNewIdAddressSender
                }
            }
        case ID_ADDRESS_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    idAddress: action.NewIdAddressRecipient
                }
            }

        case LIST_TERMINAL_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    terminalSender: action.bodyTerminalSender
                }
            }
        case LIST_TERMINAL_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    terminalRecipient: action.bodyTerminalRecipient
                }
            }
        case TERMINAL_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    terminal: action.bodyClickTerminalSender
                }
            }
        case TERMINAL_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    terminal: action.bodyClickTerminalRecipient
                }
            }

        case SERIES_NUMBER_PASSPORT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        series: action.bodySeriesRecipient,
                        number: action.bodyNumberRecipient
                    }
                }
            }
        case INN_COMPANY_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        innLegalEntity: action.bodyInnLegalEntityRecipient
                    }
                }
            }
        case EMAIL_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        emailRecipient: action.bodyEmailRecipient
                    }
                }
            }
        case ISSUED_BY_PASSPORT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        issuedByPassport: action.bodyIssuedByPassport
                    }
                }
            }
        case UPDATE_DATE_ISSUE_PASSPORT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    contactPerson: {
                        ...state.recipient.contactPerson,
                        dateIssue: action.bodyDateIssue
                    }
                }
            }
        case ORDER:
            return {
                ...state,
                order: action.bodyOrder
            }
        case PLACE_ORDER_LEGAL:
            return {
                ...state,
                placeOrderLegalEntity: action.bodyPlaceOrderLegalEntity
            }
        case PLACE_ORDER_NATURAL:
            return {
                ...state,
                placeOrderNaturalPerson: action.bodyPlaceOrderNaturalPerson,
                srcPay: action.bodySrcPay
            }
        case VALID_TERMINAL_SENDER:
            return {
                ...state,
                sender: {
                    ...state.sender,
                    validTerminal: action.bodyValidTerminalSender
                }
            }
        case VALID_TERMINAL_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    validTerminal: action.bodyValidTerminalRecipient
                }
            }
        default:
            return state
    }
}
const placeOrderNaturalPerson = (status, src) => ({
    type: PLACE_ORDER_NATURAL,
    bodyPlaceOrderNaturalPerson: status,
    bodySrcPay: src
})
const placeOrderLegalPerson = (status) => ({type: PLACE_ORDER_LEGAL, bodyPlaceOrderLegalEntity: status})
const updateStatusOrder = (status) => ({type: ORDER, bodyOrder: status})
export const updateDateIssue = (date) => ({type: UPDATE_DATE_ISSUE_PASSPORT, bodyDateIssue: date})
export const updateIssuedByPassport = (date) => ({type: ISSUED_BY_PASSPORT, bodyIssuedByPassport: date})
export const updateSurnameSender = (surname) => ({type: UPDATE_SURNAME_SENDER, bodySurnameSender: surname})
export const updateNameSender = (name) => ({type: UPDATE_NAME_SENDER, bodyNameSender: name})
export const updateMiddleNameSender = (middleName) => ({
    type: UPDATE_MIDDLE_NAME_SENDER,
    bodyMiddleNameSender: middleName
})
export const updatePhoneSender = (phone) => ({type: UPDATE_PHONE_SENDER, bodyPhoneSender: phone})
export const updateAdditionalPhoneSender = (phone) => ({
    type: UPDATE_ADDITIONAL_PHONE_SENDER,
    bodyAdditionalPhoneSender: phone
})
export const updateNameCompanySender = (company) => ({type: UPDATE_NAME_COMPANY_SENDER, bodyCompanySender: company})
export const updateCommentSender = (comment) => ({type: UPDATE_COMMENT_SENDER, bodyCommentSender: comment})
export const validSurnameSender = (surname) => ({
    type: VALID_SURNAME_SENDER,
    bodyValidSurnameSender: validationFormSurname(surname)
})
export const validNameSender = (name) => ({type: VALID_NAME_SENDER, bodyValidNameSender: validationFormName(name)})
export const validPhoneSender = (phone) => ({
    type: VALID_PHONE_SENDER,
    bodyValidPhoneSender: validationFormPhone(phone)
})

export const updateSurnameRecipient = (surname) => ({type: UPDATE_SURNAME_RECIPIENT, bodySurnameRecipient: surname})
export const updateNameRecipient = (name) => ({type: UPDATE_NAME_RECIPIENT, bodyNameRecipient: name})
export const updateMiddleNameRecipient = (middleName) => ({
    type: UPDATE_MIDDLE_NAME_RECIPIENT,
    bodyMiddleNameRecipient: middleName
})
export const updatePhoneRecipient = (phone) => ({type: UPDATE_PHONE_RECIPIENT, bodyPhoneRecipient: phone})
export const updateAdditionalPhoneRecipient = (phone) => ({
    type: UPDATE_ADDITIONAL_PHONE_RECIPIENT,
    bodyAdditionalPhoneRecipient: phone
})
export const updateNameCompanyRecipient = (company) => ({
    type: UPDATE_NAME_COMPANY_RECIPIENT,
    bodyCompanyRecipient: company
})
export const updateCommentRecipient = (comment) => ({type: UPDATE_COMMENT_RECIPIENT, bodyCommentRecipient: comment})
export const updateLegalRecipient = (status) => ({type: UPDATE_LEGAL_ENTITY, bodyLegalEntityRecipient: status})
export const validSurnameRecipient = (surname) => ({
    type: VALID_SURNAME_RECIPIENT,
    bodyValidSurnameRecipient: validationFormSurname(surname)
})
export const validNameRecipient = (name) => ({
    type: VALID_NAME_RECIPIENT,
    bodyValidNameRecipient: validationFormName(name)
})
export const validPhoneRecipient = (phone) => ({
    type: VALID_PHONE_RECIPIENT,
    bodyValidPhoneRecipient: validationFormPhone(phone)
})

export const updateCitySender = (city) => ({type: UPDATE_CITY_SENDER, bodyCitySender: city})
const updateListStreetSender = (list) => ({type: LIST_STREET_SENDER, bodyListStreetSender: list})
const updateStreetSender = (street) => ({type: UPDATE_STREET_SENDER, bodyStreetSender: street})
const updateListHouseSender = (list) => ({type: LIST_HOUSE_SENDER, bodyListHouseSender: list})
const updateHouseSender = (house) => ({type: UPDATE_HOUSE_SENDER, bodyHouseSender: house})
export const updateFlatSender = (flat) => ({type: UPDATE_FLAT_SENDER, bodyFlatSender: flat})
export const updateZipSender = (zip) => ({type: UPDATE_ZIP_SENDER, bodyZipSender: zip})
export const validStreetSender = (status) => ({type: VALID_STREET_SENDER, bodyValidStreetSender: status})
export const validHouseSender = (status) => ({type: VALID_HOUSE_SENDER, bodyValidHouseSender: status})
export const validZipSender = (status) => ({type: VALID_ZIP_SENDER, bodyValidZipSender: status})

export const updateCityRecipient = (city) => ({type: UPDATE_CITY_RECIPIENT, bodyCityRecipient: city})
const updateListStreetRecipient = (list) => ({type: LIST_STREET_RECIPIENT, bodyListStreetRecipient: list})
const updateStreetRecipient = (street, status) => ({type: UPDATE_STREET_RECIPIENT, bodyStreetRecipient: street})
const updateListHouseRecipient = (list) => ({type: LIST_HOUSE_RECIPIENT, bodyListHouseRecipient: list})
const updateHouseRecipient = (house) => ({type: UPDATE_HOUSE_RECIPIENT, bodyHouseRecipient: house})
export const updateFlatRecipient = (flat) => ({type: UPDATE_FLAT_RECIPIENT, bodyFlatRecipient: flat})
export const updateZipRecipient = (zip) => ({type: UPDATE_ZIP_RECIPIENT, bodyZipRecipient: zip})
export const validStreetRecipient = (status) => ({type: VALID_STREET_RECIPIENT, bodyValidStreetRecipient: status})
export const validHouseRecipient = (status) => ({type: VALID_HOUSE_RECIPIENT, bodyValidHouseRecipient: status})
export const validZipRecipient = (status) => ({type: VALID_ZIP_RECIPIENT, bodyValidZipRecipient: status})

export const updateInformationCompany = (info) => ({type: UPDATE_INFORMATION_TK, bodyInformationCompany: info})
const updateListCompanySender = (list) => ({type: LIST_COMPANY_SENDER, bodyListCompanySender: list})
const updateListCompanyRecipient = (list) => ({type: LIST_COMPANY_RECIPIENT, bodyListCompanyRecipient: list})
const updateFullInfoCompanySender = (data) => ({type: FULL_INFO_COMPANY_SENDER, bodyFullInfoCompanySender: data})
const updateFullInfoCompanyRecipient = (data) => ({
    type: FULL_INFO_COMPANY_RECIPIENT,
    bodyFullInfoCompanyRecipient: data
})

export const addListTerminalSender = (address) => ({type: LIST_TERMINAL_SENDER, bodyTerminalSender: address});
export const addListTerminalRecipient = (address) => ({type: LIST_TERMINAL_RECIPIENT, bodyTerminalRecipient: address});
export const addTerminalSender = (terminal) => ({type: TERMINAL_SENDER, bodyClickTerminalSender: terminal});
export const addTerminalRecipient = (terminal) => ({type: TERMINAL_RECIPIENT, bodyClickTerminalRecipient: terminal});

const addListAddressBookSender = (address) => ({type: LIST_ADDRESS_BOOK_SENDER, bodyAddressBookSender: address})
const addListAddressBookRecipient = (address) => ({
    type: LIST_ADDRESS_BOOK_RECIPIENT,
    bodyAddressBookRecipient: address
})
export const choiceAddressSender = (address) => ({
    type: CHOICE_ADDRESS_SENDER,
    bodyAddressSender: address,
    bodyIdAddressSender: address.id,
    bodyChoiceAddressBookSender: true
})
export const choiceAddressRecipient = (address) => ({
    type: CHOICE_ADDRESS_RECIPIENT,
    bodyAddressRecipient: address,
    bodyIdAddressRecipient: address.id,
    bodyChoiceAddressBookRecipient: true
})
const addIdAddressSender = (id) => ({type: ID_ADDRESS_SENDER, bodyNewIdAddressSender: id})
const addIdAddressRecipient = (id) => ({type: ID_ADDRESS_RECIPIENT, bodyNewIdAddressRecipient: id})

const updateSeriesAndNumberPassport = (series, number) => ({
    type: SERIES_NUMBER_PASSPORT,
    bodySeriesRecipient: series,
    bodyNumberRecipient: number
})
export const updateInnCompanyRecipient = (inn) => ({
    type: INN_COMPANY_RECIPIENT,
    bodyInnLegalEntityRecipient: inn.replace(/[^+\d]/g, '')
})
export const updateEmailRecipient = (email) => ({type: EMAIL_RECIPIENT, bodyEmailRecipient: email})
export const updateValidSeriesAndNumber = (status) => ({
    type: VALID_SERIES_NUMBER_PASSPORT,
    bodyValidSeriesAndNumberPassport: status
})
export const updateValidIssuedByPassport = (status) => ({
    type: VALID_ISSUED_BY_PASSPORT,
    bodyValidIssuedByPassport: status
})
export const updateValidCompany = (status) => ({type: VALID_COMPANY, bodyValidCompany: status})
export const updateValidDateIssue = (status) => ({type: VALID_DATE_ISSUE, bodyValidDateIssue: status})
export const updateValidEmailRecipient = (status) => ({type: VALID_EMAIL_RECIPIENT, bodyValidEmailRecipient: status})
export const updateValidInnLegalEntity = (status) => ({type: VALID_INN_LEGAL_ENTITY, bodyValidInnLegalEntity: status})
export const updateValidTerminalSender = (status) => ({type: VALID_TERMINAL_SENDER, bodyValidTerminalSender: status})
export const updateValidTerminalRecipient = (status) => ({
    type: VALID_TERMINAL_RECIPIENT,
    bodyValidTerminalRecipient: status
})
export const clearReducer = () => ({type: CLEAR_REDUCER})
export const updateDateShipping=(date)=>({type:DATE_SHIPPING, bodyDateChipping:date})
export const updateValidDateShipping=(status)=>({type:VALID_DATE_SHIPPING, bodyValidDateShipping:validationFormDate(status)})

/*Поиск списка улиц отправления по введенным параметрам*/
export const searchStreetSender = (locality_type, locality_fias, street) => {
    return (dispatch) => {
        if (String(street).length > 1) {
            cityAPI.searchStreet(locality_type, locality_fias, street).then(r => {
                dispatch(updateListStreetSender(r.data));
            })
        }
    }
}
/*Поиск списка компаний для отправителей*/
export const listCompanySender = (company) => {
    return (dispatch) => {
        if (String(company).length > 1) {
            addCompanyAPI.searchDetail(company).then(r => {
                dispatch(updateListCompanySender(r.data))
            })
        }
    }
}
/*Выбор компании определенной для отправителя*/
export const choiceCompanySender = (list, company) => {
    return (dispatch) => {
        list.map(r => {
            if ((r.value + '( ИНН:' + r.inn + ')') === company) {
                dispatch(updateFullInfoCompanySender(r));
                dispatch(updateNameCompanySender(r.value));
            }
        })
    }
}
/*Поиск списка компаний для получателей*/
export const listCompanyRecipient = (company) => {
    return (dispatch) => {
        if (String(company).length > 1) {
            addCompanyAPI.searchDetail(company).then(r => {
                dispatch(updateListCompanyRecipient(r.data))
            })
        }
    }
}
/*Выбор компании для получателя*/
export const choiceCompanyRecipient = (list, company) => {
    return (dispatch) => {
        list.map(r => {
            if ((r.value + '( ИНН:' + r.inn + ')') === company) {
                dispatch(updateFullInfoCompanyRecipient(r));
                dispatch(updateNameCompanyRecipient(r.value));
                dispatch(updateInnCompanyRecipient(r.inn))
            }
        })
    }
}
/*Получение подробной информации по выбранной улице отправления*/
export const informationStreetSender = (street, listStreet) => {
    return (dispatch) => {
        listStreet.map(r => {
            if (r.street === street) {
                dispatch(updateStreetSender(r));
            }
        })
    }
}
/*Поиск списка домов отправления по введенным параметрам*/
export const searchHouseSender = (locality_fias, house) => {
    return (dispatch) => {
        if (String(house) > 0) {
            cityAPI.searchHouse(locality_fias, house).then(r => {
                dispatch(updateListHouseSender(r.data));
            })
        }
    }
}
/*Получение подробной информации по выбранному дому отправления*/
export const informationHouseSender = (streetFias, house, listHouse) => {
    return (dispatch) => {
        listHouse.map(r => {
                if (r.house === house) {
                    cityAPI.houseInformation(streetFias, r.unrestricted_value).then(r => {
                            dispatch(updateHouseSender(r.data[0]))
                            dispatch(updateZipSender(r.data[0].zip))
                        }
                    )
                }
            }
        )
    }
}

/*Поиск списка улиц отправления по введенным параметрам*/
export const searchStreetRecipient = (locality_type, locality_fias, street) => {
    return (dispatch) => {
        if (String(street).length > 1) {
            cityAPI.searchStreet(locality_type, locality_fias, street).then(r => {
                dispatch(updateListStreetRecipient(r.data));
            })
        }
    }
}
/*Получение подробной информации по выбранной улице отправления*/
export const informationStreetRecipient = (street, listStreet) => {
    return (dispatch) => {
        listStreet.map(r => {
            if (r.street === street) {
                dispatch(updateStreetRecipient(r));
            }
        })
    }
}
/*Поиск списка домов отправления по введенным параметрам*/
export const searchHouseRecipient = (locality_fias, house) => {
    return (dispatch) => {
        if (String(house).length > 0) {
            cityAPI.searchHouse(locality_fias, house).then(r => {
                dispatch(updateListHouseRecipient(r.data));
            })
        }
    }
}
/*Получение подробной информации по выбранному дому отправления*/
export const informationHouseRecipient = (streetFias, house, listHouse) => {
    return (dispatch) => {
        listHouse.map(r => {
                if (r.house === house) {
                    cityAPI.houseInformation(streetFias, r.unrestricted_value).then(r => {
                            dispatch(updateHouseRecipient(r.data[0]))
                            dispatch(updateZipRecipient(r.data[0].zip))
                        }
                    )
                }
            }
        )
    }
}
/*Добавление терминалов по искомым городам*/
export const addTerminal = (citySender, cityRecipient, tkInfo) => {
    return (dispatch) => {
        console.log(tkInfo)
        if (tkInfo.pickup === false) {
            orderAPI.allTerminal(citySender, (tkInfo.company).toLowerCase()).then(r => {
                dispatch(addListTerminalSender(r.data))
            })
        }
        if (tkInfo.delivery === false) {
            orderAPI.allTerminal(cityRecipient, (tkInfo.company).toLowerCase()).then(r => {
                dispatch(addListTerminalRecipient(r.data))
            })
        }
    }
}
/*Добавление достпуных адресов для отправителя*/
export const addAddressBookSender = (city) => {
    let listAddressSender = [];
    addAddressAPI.listAddress().then(r => {
        r.data.map(e => {
            if (e.locality_title === city) {
                listAddressSender.push(e);
            }
        })
    })
    return (dispatch) => {
        dispatch(addListAddressBookSender(listAddressSender))
    }
}
/*Добавление достпуных адресов для получателя*/
export const addAddressBookRecipient = (city) => {
    let listAddressRecipient = []
    addAddressAPI.listAddress().then(r => {
        r.data.map(e => {
            if (String(e.locality_title) === String(city)) {
                listAddressRecipient.push(e);
            }
        })
    })
    return (dispatch) => {
        dispatch(addListAddressBookRecipient(listAddressRecipient));
    }
}
/*Выбранный адрес из адресной книги для отправителя*/
export const addChoiceAddressSender = (address) => {
    return (dispatch) => {
        dispatch(choiceAddressSender(address));
        dispatch(updateSurnameSender(address.surname));
        dispatch(updateNameSender(address.name));
        dispatch(updateMiddleNameSender(address.patronymic));
        dispatch(updatePhoneSender(address.phone));
        dispatch(updateAdditionalPhoneSender(address.phone2));
        dispatch(updateNameCompanySender(address.company))
        dispatch(updateZipSender(address.index_number))
        dispatch(updateFlatSender(address.flat))
        dispatch(updateStreetSender(address));
        dispatch(updateHouseSender(address));
        dispatch(updateCommentSender(address.comment))
    }
}
/*Выбранный адрес из адресной книги для получателя*/
export const addChoiceAddressRecipient = (address) => {
    return (dispatch) => {
        dispatch(choiceAddressRecipient(address));
        dispatch(updateSurnameRecipient(address.surname));
        dispatch(updateNameRecipient(address.name));
        dispatch(updateMiddleNameRecipient(address.patronymic));
        dispatch(updatePhoneRecipient(address.phone));
        dispatch(updateAdditionalPhoneRecipient(address.phone2));
        dispatch(updateNameCompanyRecipient(address.company))
        dispatch(updateZipRecipient(address.index_number))
        dispatch(updateFlatRecipient(address.flat))
        dispatch(updateStreetRecipient(address))
        dispatch(updateHouseRecipient(address))
        dispatch(updateCommentRecipient(address.comment))
    }
}
/*Добавление и разделение серии и номера паспорта*/
export const seriesAndNumberPassport = (dataPassport) => {
    let series = (dataPassport.split(' '))[0]
    let number = (dataPassport.split(' '))[1]
    return (dispatch) => {
        dispatch(updateSeriesAndNumberPassport(series, number));
    }
}
/*Добавление адреса в адресную книгу*/
const addAddressBook = (address, contactPerson) => {
    function someAsyncFunction() {
        return new Promise(function (resolve, reject) {
            addAddressAPI.addBookAddress(
                Cookies.get('id_company'),
                address.city.id, address.street.street,
                address.street.street_type,
                address.house.house,
                address.house.house_type,
                address.house.block,
                address.house.block_type,
                address.flat,
                'кв',
                address.zip,
                contactPerson.company,
                contactPerson.surname,
                contactPerson.name,
                contactPerson.middleName,
                contactPerson.phone,
                '',
                contactPerson.additionalPhone,
                '',
                contactPerson.comment,
                address.house.latitude,
                address.house.longitude,
                address.house.house_fias_id
            ).then(function (someValue) {
                resolve(someValue);
            });
        })
    }

    return someAsyncFunction();
}
/*Формирование терминала*/
export const addTerminalBook = (fullInfoUser, infoTK, sender) => {
    function someAsyncFunction() {
        return new Promise(function (resolve, reject) {
            orderAPI.addTerminal(
                infoTK.id, fullInfoUser.type_user, fullInfoUser.terminal.external_code,
                fullInfoUser.contactPerson.legalEntity,
                fullInfoUser.contactPerson.fullInfoCompany===null ? null : fullInfoUser.contactPerson.fullInfoCompany.value,
                fullInfoUser.contactPerson.fullInfoCompany===null ? null : fullInfoUser.contactPerson.fullInfoCompany.inn,
                fullInfoUser.contactPerson.fullInfoCompany===null ? null : fullInfoUser.contactPerson.fullInfoCompany.management_name,
                fullInfoUser.contactPerson.fullInfoCompany===null ? null : fullInfoUser.contactPerson.fullInfoCompany.address,
                sender, fullInfoUser.contactPerson.surname,
                fullInfoUser.contactPerson.name, fullInfoUser.contactPerson.middleName, fullInfoUser.contactPerson.phone,
                fullInfoUser.contactPerson.series, fullInfoUser.contactPerson.number, fullInfoUser.contactPerson.issuedByPassport,
                (String(fullInfoUser.contactPerson.dateIssue).length < 1 ? null : fullInfoUser.contactPerson.dateIssue), fullInfoUser.contactPerson.emailRecipient
            ).then(function (someValue) {
                resolve(someValue);
            });
        })
    }

    return someAsyncFunction();
}
/*Отправка запроса на добавления заказа*/
const addOrderUser = (price, sender_terminal, receiver_terminal, user, sender_contact, receiver_contact, rate,date_pickup) => {
    return (dispatch) => {
        addOrder.order(10, sender_terminal, receiver_terminal, user, sender_contact, receiver_contact, rate,date_pickup).then(r => {
                dispatch(updateStatusOrder(true));
                if (String(r.data.url).length > 10) {
                    dispatch(placeOrderNaturalPerson(true, r.data.url))
                } else {
                    dispatch(placeOrderLegalPerson(true));
                }
            }
        )
    }
}
/*Отправка заказа если условие доставки Дверь-Дверь*/
const orderRegisterDoorDoor = (fullInformationSender, fullInformationRecipient, fullInfoTK) => {
    let idSender = '';
    let idRecipient = '';
    return (dispatch) => {
        if (fullInformationSender.idAddress === '') {/*Если id адреса отправителя пустой*/
            addAddressBook(fullInformationSender.addressSender, fullInformationSender.contactPerson).then(r => {
                idSender = r.data.id;
                if (fullInformationRecipient.idAddress === '') {
                    /*Если id города получателя пустое*/
                    addAddressBook(fullInformationRecipient.addressRecipient, fullInformationRecipient.contactPerson).then(r => {
                        idRecipient = r.data.id;
                        dispatch(addOrderUser(
                            fullInfoTK.priceBefore, null,
                            null, Number(Cookies.get('id_company')),
                            idSender, idRecipient, fullInfoTK.id,
                            fullInformationRecipient.dateShipping))
                    })
                } else {
                    idRecipient = fullInformationRecipient.idAddress
                    dispatch(addOrderUser(fullInfoTK.priceBefore,
                        null, null,
                        Number(Cookies.get('id_company')), idSender, idRecipient,
                        fullInfoTK.id, fullInformationRecipient.dateShipping))
                }
            })
        } else {
            idSender = fullInformationSender.idAddress
            if (fullInformationRecipient.idAddress === '') {/*Если id города получателя пустое*/
                addAddressBook(fullInformationRecipient.addressRecipient, fullInformationRecipient.contactPerson).then(r => {
                    idRecipient = r.data.id;
                    dispatch(addOrderUser(fullInfoTK.priceBefore, null,
                        null, Number(Cookies.get('id_company')), idSender, idRecipient,
                        fullInfoTK.id, fullInformationRecipient.dateShipping))
                })
            } else {
                idRecipient = fullInformationRecipient.idAddress
                dispatch(addOrderUser(fullInfoTK.priceBefore, null, null,
                    Number(Cookies.get('id_company')), idSender, idRecipient, fullInfoTK.id, fullInformationRecipient.dateShipping))
            }
        }
    }
}
/*Отправка заказа если условия доставки Дверь-Склад*/
const orderRegisterDoorTerminal = (fullInformationSender, fullInformationRecipient, fullInfoTK) => {
    let idSender = '';
    let idRecipient = ''
    let sender = String(fullInformationSender.contactPerson.company).length === 0
        ? (fullInformationSender.contactPerson.surname + ' ' + fullInformationSender.contactPerson.name + ' ' + fullInformationSender.contactPerson.middleName)
        : fullInformationSender.contactPerson.company
    return (dispatch) => {
        if (String(fullInformationSender.idAddress).length === 0) {
            addAddressBook(fullInformationSender.addressSender, fullInformationSender.contactPerson).then(r => {
                idSender = r.data.id;
                addTerminalBook(fullInformationRecipient, fullInfoTK, sender).then(r => {
                    idRecipient = r.data.id
                    dispatch(addOrderUser(fullInfoTK.priceBefore, null,
                        idRecipient, Number(Cookies.get('id_company')), idSender, null, fullInfoTK.id, fullInformationRecipient.dateShipping))
                })
            })
        } else {
            idSender = fullInformationSender.idAddress
            addTerminalBook(fullInformationRecipient, fullInfoTK, sender).then(r => {
                idRecipient = r.data.id
                dispatch(addOrderUser(fullInfoTK.priceBefore, null,
                    idRecipient, Number(Cookies.get('id_company')), idSender, null, fullInfoTK.id, fullInformationRecipient.dateShipping))
            })
        }
    }
}
/*Отправка заказа если условия доставки Склад-дверь*/
const orderRegisterTerminalDoor = (fullInformationRecipient, fullInformationSender, fullInfoTK) => {
    let idRecipient = '';
    let idSender = '';
    let sender = String(fullInformationSender.contactPerson.company).length === 0
        ? (fullInformationSender.contactPerson.surname + ' ' + fullInformationSender.contactPerson.name + ' ' + fullInformationSender.contactPerson.middleName)
        : fullInformationSender.contactPerson.company
    return (dispatch) => {
        if (fullInformationRecipient.idAddress === '') {
            addAddressBook(fullInformationRecipient.addressRecipient, fullInformationRecipient.contactPerson).then(r => {
                idRecipient = r.data.id;
                addTerminalBook(fullInformationSender, fullInfoTK, sender).then(r => {
                    idSender = r.data.id
                    dispatch(addOrderUser(fullInfoTK.priceBefore, idSender,
                        null, Number(Cookies.get('id_company')), null, idRecipient, fullInfoTK.id,
                        fullInformationRecipient.dateShipping))
                })
            })
        } else {
            idRecipient = fullInformationRecipient.idAddress
            addTerminalBook(fullInformationSender, fullInfoTK, sender).then(r => {
                idSender = r.data.id
                dispatch(addOrderUser(fullInfoTK.priceBefore, idSender,
                    null, Number(Cookies.get('id_company')), null,
                    idRecipient, fullInfoTK.id, fullInformationRecipient.dateShipping))
            })
        }
    }
}
/*Отправка заказа если условия достаки терминал-терминал*/
const orderRegisterTerminalTerminal = (fullInformationRecipient, fullInformationSender, fullInfoTK) => {
    return (dispatch) => {
        let idSender = '';
        let idRecipient = '';
        let sender = String(fullInformationSender.contactPerson.company).length === 0
            ? (fullInformationSender.contactPerson.surname + ' ' + fullInformationSender.contactPerson.name + ' ' + fullInformationSender.contactPerson.middleName)
            : fullInformationSender.contactPerson.company
        addTerminalBook(fullInformationRecipient, fullInfoTK, sender).then(r => {
            idRecipient = r.data.id;
            addTerminalBook(fullInformationSender, fullInfoTK, sender).then(r => {
                idSender = r.data.id;
                dispatch(addOrderUser(fullInfoTK.priceBefore, idSender, idRecipient,
                    Number(Cookies.get('id_company')), null, null,
                    fullInfoTK.id, fullInformationRecipient.dateShipping))
            })
        })
    }
}
/*Оформление заказа, обработка валидаций*/
export const orderRegister = (fullInformationSender, fullInformationRecipient, fullInfoTK, terminal) => {
    return (dispatch) => {
        if (fullInfoTK.pickup && fullInfoTK.delivery) {
            if (fullInformationSender.addressSender.street !== null &&
                fullInformationSender.addressSender.house !== null &&
                fullInformationRecipient.addressRecipient.street !== null &&
                fullInformationRecipient.addressRecipient.house !== null &&
                validationFormIndex(fullInformationSender.addressSender.zip) &&
                validationFormIndex(fullInformationRecipient.addressRecipient.zip) &&
                validationFormName(fullInformationSender.contactPerson.name) &&
                validationFormSurname(fullInformationSender.contactPerson.surname) &&
                validationFormName(fullInformationRecipient.contactPerson.name) &&
                validationFormSurname(fullInformationRecipient.contactPerson.surname) &&
                validationFormPhone(fullInformationSender.contactPerson.phone) &&
                validationFormPhone(fullInformationRecipient.contactPerson.phone) &&
                validationFormDate(fullInformationRecipient.dateShipping)
            ) {
                console.log('Отправление Дверь-Дверь создано успешно')
                dispatch(orderRegisterDoorDoor(fullInformationSender,fullInformationRecipient,fullInfoTK));
            } else {
                if (!(validationFormDate(fullInformationRecipient.dateShipping))) dispatch(updateValidDateShipping(fullInformationRecipient.dateShipping))
                if (fullInformationSender.addressSender.street === null) dispatch(validStreetSender(false));
                if (fullInformationRecipient.addressRecipient.street === null) dispatch(validStreetRecipient(false))
                if (fullInformationSender.addressSender.house === null) dispatch(validHouseSender(false))
                if (fullInformationRecipient.addressRecipient.house == null) dispatch(validHouseRecipient(false))
                if (!validationFormIndex(fullInformationSender.addressSender.zip)) dispatch(validZipSender(false))
                if (!validationFormIndex(fullInformationRecipient.addressRecipient.zip)) dispatch(validZipRecipient(false))
                if ((fullInformationSender.contactPerson.name).toString().length < 1) dispatch(validNameSender(fullInformationSender.contactPerson.name))
                if ((fullInformationRecipient.contactPerson.name).toString().length < 3) dispatch(validNameRecipient(fullInformationRecipient.contactPerson.name))
                if ((fullInformationRecipient.contactPerson.surname).toString().length < 3) {
                    dispatch(validSurnameRecipient(fullInformationRecipient.contactPerson.surname))
                }
                if ((fullInformationSender.contactPerson.surname).toString().length < 3) {
                    dispatch(validSurnameSender(fullInformationSender.contactPerson.surname))
                }
                if (!validationFormPhone(fullInformationSender.contactPerson.phone)) {
                    dispatch(validPhoneSender(false))
                }
                if (!validationFormPhone(fullInformationRecipient.contactPerson.phone)) {
                    dispatch(validPhoneRecipient(false))
                }
            }

        }
        else if (fullInfoTK.pickup && fullInfoTK.delivery === false) {
            if (fullInformationSender.addressSender.street !== null &&
                fullInformationSender.addressSender.house !== null &&
                fullInformationRecipient.terminal !== null &&
                validationFormIndex(fullInformationSender.addressSender.zip) &&
                validationFormName(fullInformationSender.contactPerson.name) &&
                validationFormSurname(fullInformationSender.contactPerson.surname) &&
                validationFormName(fullInformationRecipient.contactPerson.name) &&
                validationFormSurname(fullInformationRecipient.contactPerson.surname) &&
                validationFormPhone(fullInformationSender.contactPerson.phone) &&
                validationFormPhone(fullInformationRecipient.contactPerson.phone) &&
                checkLegalRecipient(fullInformationRecipient.contactPerson) &&
                validationFormDate(fullInformationRecipient.dateShipping)
            ) {
                console.log('Отправление Дверь-Склад создано успешно')
                dispatch(orderRegisterDoorTerminal(fullInformationSender,fullInformationRecipient,fullInfoTK,terminal));
            } else {
                if (!(validationFormDate(fullInformationRecipient.dateShipping))) dispatch(updateValidDateShipping(fullInformationRecipient.dateShipping))
                if (fullInformationSender.addressSender.street === null) dispatch(validStreetSender(false));
                if (fullInformationSender.addressSender.house === null) dispatch(validHouseSender(false))
                if (!validationFormIndex(fullInformationSender.addressSender.zip)) dispatch(validZipSender(false))
                if (fullInformationRecipient.terminal === null) dispatch(updateValidTerminalRecipient(false))
                if ((fullInformationSender.contactPerson.name).toString().length < 1) dispatch(validNameSender(fullInformationSender.contactPerson.name))
                if ((fullInformationRecipient.contactPerson.name).toString().length < 3) dispatch(validNameRecipient(fullInformationRecipient.contactPerson.name))
                if ((fullInformationRecipient.contactPerson.surname).toString().length < 3) dispatch(validSurnameRecipient(fullInformationRecipient.contactPerson.surname))
                if ((fullInformationSender.contactPerson.surname).toString().length < 3) dispatch(validSurnameSender(fullInformationSender.contactPerson.surname))
                if (!validationFormPhone(fullInformationSender.contactPerson.phone)) dispatch(validPhoneSender(false))
                if (!validationFormPhone(fullInformationRecipient.contactPerson.phone)) dispatch(validPhoneRecipient(false))
                if (fullInformationRecipient.contactPerson.legalEntity) {
                    if ((fullInformationRecipient.contactPerson.innLegalEntity).toString() === '') dispatch(updateValidInnLegalEntity(false));
                    if (fullInformationRecipient.contactPerson.fullInfoCompany === '') dispatch(updateValidCompany(false));
                    if ((fullInformationRecipient.contactPerson.dateIssue).toString().length < 9) dispatch(updateValidDateIssue(false))
                    if (!validationFormEmail(fullInformationRecipient.contactPerson.emailRecipient)) dispatch(updateValidEmailRecipient(false))
                    if ((fullInformationRecipient.contactPerson.series).toString().length !== 4) dispatch(updateValidSeriesAndNumber(false))
                    if ((fullInformationRecipient.contactPerson.number).toString().length !== 6) dispatch(updateValidSeriesAndNumber(false))
                    if ((fullInformationRecipient.contactPerson.issuedByPassport).toString().length < 3) dispatch(updateValidIssuedByPassport(false))
                }
            }
        }
        else if (fullInfoTK.pickup === false && fullInfoTK.delivery)  {
            if (fullInformationRecipient.addressRecipient.street !== null &&
                fullInformationRecipient.addressRecipient.house !== null &&
                fullInformationSender.terminal !== null &&
                validationFormIndex(fullInformationRecipient.addressRecipient.zip) &&
                validationFormName(fullInformationSender.contactPerson.name) &&
                validationFormSurname(fullInformationSender.contactPerson.surname) &&
                validationFormName(fullInformationRecipient.contactPerson.name) &&
                validationFormSurname(fullInformationRecipient.contactPerson.surname) &&
                validationFormPhone(fullInformationSender.contactPerson.phone) &&
                validationFormPhone(fullInformationRecipient.contactPerson.phone) &&
                checkLegalRecipient(fullInformationRecipient.contactPerson) &&
                validationFormDate(fullInformationRecipient.dateShipping)
            ) {
                console.log('Отправление Склад-Дверь создано успешно')
                dispatch(orderRegisterTerminalDoor(fullInformationRecipient, fullInformationSender, fullInfoTK));
            } else {
                if (!(validationFormDate(fullInformationRecipient.dateShipping))) dispatch(updateValidDateShipping(fullInformationRecipient.dateShipping))
                if (fullInformationRecipient.addressRecipient.street === null) dispatch(validStreetRecipient(false));
                if (fullInformationRecipient.addressRecipient.house === null) dispatch(validHouseRecipient(false))
                if (!validationFormIndex(fullInformationRecipient.addressRecipient.zip)) dispatch(validZipRecipient(false))
                if (fullInformationSender.terminal === null) dispatch(updateValidTerminalSender(false))
                if ((fullInformationSender.contactPerson.name).toString().length < 1) dispatch(validNameSender(fullInformationSender.contactPerson.name))
                if ((fullInformationRecipient.contactPerson.name).toString().length < 3) dispatch(validNameRecipient(fullInformationRecipient.contactPerson.name))
                if ((fullInformationRecipient.contactPerson.surname).toString().length < 3) dispatch(validSurnameRecipient(fullInformationRecipient.contactPerson.surname))
                if ((fullInformationSender.contactPerson.surname).toString().length < 3) dispatch(validSurnameSender(fullInformationSender.contactPerson.surname))
                if (!validationFormPhone(fullInformationSender.contactPerson.phone)) dispatch(validPhoneSender(false))
                if (!validationFormPhone(fullInformationRecipient.contactPerson.phone)) dispatch(validPhoneRecipient(false))
            }
        }
        else if (fullInfoTK.pickup === false && fullInfoTK.delivery === false) {
            if (fullInformationSender.terminal !== null &&
                fullInformationRecipient.terminal !== null &&
                validationFormName(fullInformationSender.contactPerson.name) &&
                validationFormSurname(fullInformationSender.contactPerson.surname) &&
                validationFormName(fullInformationRecipient.contactPerson.name) &&
                validationFormSurname(fullInformationRecipient.contactPerson.surname) &&
                validationFormPhone(fullInformationSender.contactPerson.phone) &&
                validationFormPhone(fullInformationRecipient.contactPerson.phone) &&
                checkLegalRecipient(fullInformationRecipient.contactPerson) &&
                validationFormDate(fullInformationRecipient.dateShipping)
            ) {
                console.log('Отправление Склад-Склад создано успешно')
                dispatch(orderRegisterTerminalTerminal(fullInformationRecipient, fullInformationSender, fullInfoTK));
            } else {
                if (!(validationFormDate(fullInformationRecipient.dateShipping))) dispatch(updateValidDateShipping(fullInformationRecipient.dateShipping))
                if (fullInformationSender.terminal === null) dispatch(updateValidTerminalSender(false))
                if (fullInformationRecipient.terminal === null) dispatch(updateValidTerminalRecipient(false))
                if ((fullInformationSender.contactPerson.name).toString().length < 1) dispatch(validNameSender(fullInformationSender.contactPerson.name))
                if ((fullInformationRecipient.contactPerson.name).toString().length < 3) dispatch(validNameRecipient(fullInformationRecipient.contactPerson.name))
                if ((fullInformationRecipient.contactPerson.surname).toString().length < 3) dispatch(validSurnameRecipient(fullInformationRecipient.contactPerson.surname))
                if ((fullInformationSender.contactPerson.surname).toString().length < 3) dispatch(validSurnameSender(fullInformationSender.contactPerson.surname))
                if (!validationFormPhone(fullInformationSender.contactPerson.phone)) dispatch(validPhoneSender(false))
                if (!validationFormPhone(fullInformationRecipient.contactPerson.phone)) dispatch(validPhoneRecipient(false))
                if (fullInformationRecipient.contactPerson.legalEntity) {
                    if ((fullInformationRecipient.contactPerson.innLegalEntity).toString() === '') dispatch(updateValidInnLegalEntity(false));
                    if (fullInformationRecipient.contactPerson.fullInfoCompany === '') dispatch(updateValidCompany(false));
                    if ((fullInformationRecipient.contactPerson.dateIssue).toString().length < 9) dispatch(updateValidDateIssue(false))
                    if (!validationFormEmail(fullInformationRecipient.contactPerson.emailRecipient)) dispatch(updateValidEmailRecipient(false))
                    if ((fullInformationRecipient.contactPerson.series).toString().length !== 4) dispatch(updateValidSeriesAndNumber(false))
                    if ((fullInformationRecipient.contactPerson.number).toString().length !== 6) dispatch(updateValidSeriesAndNumber(false))
                    if ((fullInformationRecipient.contactPerson.issuedByPassport).toString().length < 3) dispatch(updateValidIssuedByPassport(false))
                }
            }

        }
    }
}
/*Отправляем id оплаченного заказа для изменения статуса заказа*/
export const sendingIdPayment=()=>{
    return(dispatch)=>{
        let array = (window.location.pathname).split('/')
        let array1 = (array[array.length - 1]).split('?');
        if(String(array1[0])!=='successful-departure'){
            return (dispatch) => {
                addOrder.payOrder(array1[0]).then(r => {
                })
            }
        }
    }
}
/*Если получатель является юридическим лицом, то делается проверка на заполнение всех полей*/
const checkLegalRecipient = (recipient) => {
    if (recipient.legalEntity) {
        if (recipient.fullInfoCompany !== null
            && (recipient.innLegalEntity).toString() !== ''
            && (recipient.dateIssue).toString() !== ''
            && validationFormEmail(recipient.emailRecipient)
            && (recipient.series).toString().length === 4
            && (recipient.number).toString().length === 6
            && (recipient.issuedByPassport).toString().length > 3
        ) return true
        else return false
    } else return true
}
export default OrderReducer