import {
    validationFormAccountPayment,
    validationFormBIC,
    validationFormEmail,
    validationFormINN,
    validationFormLegalAddress, validationFormName,
    validationFormNameBank,
    validationFormNameCompany,
    validationFormOGRN,
    validationFormPhone, validationFormPosition, validationFormSurname
} from "../components/common/validationForm/validForm";
import {addCompanyAPI} from "../API/api";
import {listCompany} from "./headerReducer";

const SEARCH_COMPANY = 'SEARCH_COMPANY';

const ADD_DOCUMENTS_INN = 'ADD_DOCUMENTS_INN'//Добавление документа - инн
const ADD_DOCUMENTS_ORGANIZATION_CHARTER = 'ADD_DOCUMENTS_ORGANIZATION_CHARTER'//Добавление документа - устав организации
const ADD_DOCUMENTS_REASON_FOR_SIGNING = 'ADD_DOCUMENTS_REASON_FOR_SIGNING'//Добавление документа - основание для подписания
const ADD_DOCUMENTS_CONTRACT = 'ADD_DOCUMENTS_CONTRACT'//Добавление документа - договор
const ADD_DOCUMENTS_EGRIP = 'ADD_DOCUMENTS_EGRIP'//Добавление документа - егрип
const ADDING_DOCUMENTS_SERVER = 'ADDING_DOCUMENTS_SERVER'//Флаг добавлены ли документы на сервер или нет
const UPDATE_URL_DOCUMENTS = 'UPDATE_URL_DOCUMENTS'//Обновление пути для загрузки заполненного договора.

const UPDATE_INN = 'UPDATE_INN';
const UPDATE_OGRN = 'UPDATE_OGRN';
const UPDATE_KPP = 'UPDATE_KPP';
const UPDATE_NAME_COMPANY = 'UPDATE_NAME_COMPANY';//Наименование организации
const FULL_INFORMATION_COMPANY = 'FULL_INFORMATION_COMPANY'//Полная информация о компании
const UPDATE_LEGAL_ADDRESS = 'UPDATE_LEGAL_ADDRESS';//Обновление юридического адреса
const UPDATE_ACTUAL_ADDRESS = 'UPDATE_ACTUAL_ADDRESS';//Обновление фактического адреса
const UPDATE_CHECKED_COINCIDENCE = 'UPDATE_CHECKED_COINCIDENCE';//Изменения состояния галочки у "Юр. адрес совпадает с фактическим".
const UPDATE_VAT_PAYER = 'UPDATE_VAT_PAYER';//Измнения состояния галочки у "Плательщик НДС"
const UPDATE_SURNAME = 'UPDATE_SURNAME';//Состояние поля - фамилия
const UPDATE_NAME = 'UPDATE_NAME';//Состояние поля - имя
const UPDATE_MIDDLE_NAME = 'UPDATE_MIDDLE_NAME';//Состояние поля - отчество
const UPDATE_PHONE = 'UPDATE_PHONE';//Состояние поля - телефон
const UPDATE_EMAIL = 'UPDATE_EMAIL'//Состояние поля - емаил
const UPDATE_POSITION = 'UPDATE_POSITION'//Состоение поля - должность

const UPDATE_BIC = 'UPDATE_BIC'//Состояние поля - БИК
const UPDATE_ACCOUNT_PAYMENT = 'UPDATE_ACCOUNT_PAYMENT'//Состояние поля - Рассчетный счет пользователя
const UPDATE_CORRESPONDENT_PAYMENT = 'UPDATE_CORRESPONDENT_PAYMENT'//Состояние поля - Корреспондентский счет
const UPDATE_ADDRESS_BANK = 'UPDATE_ADDRESS_BANK'//Состояние поля - Наименование и адрес банка
const UPDATE_LIST_BANK = 'UPDATE_LIST_BANK';//Состояния списка банков найденных через запрос
const UPDATE_ID_COMPANY = 'UPDATE_ID_COMPANY'
const STEP_SENDING_DETAILS = 'STEP_SENDING_DETAILS'//Отправление реквизитов заполенных пользователем

const initialState = {
    flags: {
        step1: false,//Отправка реквизитов на сервер и переход к проверке документов
        step2: false,//Отправка документов на проверку на сервер и переход на страницу уведомление
    },
    listCompany: [],
    listBank: [],
    fullInfoCompany: [],
    INN: '',
    validINN: true,
    OGRN: '',
    validOGRN: true,
    KPP: '',
    validKPP: true,
    nameCompany: '',
    validNameCompany: true,
    legalAddress: '',//Юридический адресс
    validLegalAddress: true,//Валидация поля - Юридический адрес
    actualAddress: '',//Фактический адресс
    validActualAddress: true,//Валидация поля - Фактический адрес
    coincidence: false,//Юридический адрес совпадает с фактическим
    VAT_payer: false,//Плательщик НДС
    accountPayment: '',//Рассчетный счет
    validAccountPayment: true,
    correspondentPayment: '',//Корреспондетский счет банка
    BIC: '',//БИК банка
    validBIC: true,
    addressBank: '',//Адрес банка
    validAddressBank: true,
    idCompany: null,
    personalData: {
        surname: '',
        validSurname: true,
        name: '',
        validName: true,
        middleName: '',
        position: '',
        validPosition: true,
        phone: '',
        validPhone: true,
        email: '',
        validEmail: true
    },
    documents: {
        inn: null,//Документ - инн
        validINN: false,
        organizationCharter: null,//Документ - Устав организации
        validOrganizationCharter: false,
        reasonForSigning: null,//Документ - основание для подписания
        validReasonForSigning: false,
        egrip: null,//Егрип если это ИП
        validEgrip: false,
        contract: null,//Документ - заполненный и подписанный договор клиента
        validContract: false,
        addingDocuments: false,//Отправлены документы на сервер или нет
        urlContract: null,//
    }
};
const AddCompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_URL_DOCUMENTS:
            return {
                ...state,
                documents: {
                    ...state.documents,
                    urlContract: action.bodyUrlContract
                }
            }
        case SEARCH_COMPANY:
            return {
                ...state,
                listCompany: action.bodySearchCompany
            }
        case UPDATE_LEGAL_ADDRESS:
            return {
                ...state,
                legalAddress: action.bodyLegalAddress,
                validLegalAddress: action.bodyValidLegalAddress,
            }
        case UPDATE_ACTUAL_ADDRESS:
            return {
                ...state,
                actualAddress: action.bodyActualAddress,
                validActualAddress: action.bodyValidActualAddress
            }
        case UPDATE_CHECKED_COINCIDENCE:
            return {
                ...state,
                coincidence: action.bodyCoincidence
            }
        case UPDATE_VAT_PAYER:
            return {
                ...state,
                VAT_payer: action.bodyVat_payer
            }
        case UPDATE_SURNAME:
            return {
                ...state,
                personalData: {
                    ...state.personalData,
                    surname: action.bodySurnameAddCompany,
                    validSurname: action.bodyValidSurnameAddCompany
                }
            }
        case UPDATE_NAME_COMPANY:
            return {
                ...state,
                nameCompany: action.bodyNameCompanyAddCompany,
                validNameCompany: action.bodyValidNameCompanyAddCompany
            }
        case UPDATE_NAME:
            return {
                ...state,
                personalData: {
                    ...state.personalData,
                    name: action.bodyNameAddCompany,
                    validName: action.bodyValidNameAddCompany
                }
            }
        case UPDATE_MIDDLE_NAME:
            return {
                ...state,
                personalData: {
                    ...state.personalData,
                    middleName: action.bodyMiddleNameAddCompany
                }
            }
        case UPDATE_POSITION:
            return {
                ...state,
                personalData: {
                    ...state.personalData,
                    position: action.bodyPositionAddCompany,
                    validPosition: action.bodyValidPositionAddCompany
                }
            }
        case UPDATE_EMAIL:
            return {
                ...state,
                personalData: {
                    ...state.personalData,
                    email: action.bodyEmailAddCompany,
                    validEmail: action.bodyValidEmailAddCompany
                }
            }
        case UPDATE_PHONE:
            return {
                ...state,
                personalData: {
                    ...state.personalData,
                    phone: action.bodyPhoneAddCompany,
                    validPhone: action.bodyValidPhoneAddCompany
                }
            }
        case UPDATE_INN:
            return {
                ...state,
                INN: action.bodyINN,
                validINN: action.bodyValidINN
            }
        case UPDATE_KPP:
            return {
                ...state,
                KPP: action.bodyKPP,
                validKPP: action.bodyValidKPP
            }
        case UPDATE_OGRN:
            return {
                ...state,
                OGRN: action.bodyOGRN,
                validOGRN: action.bodyValidOGRN
            }
        case UPDATE_BIC:
            return {
                ...state,
                BIC: action.bodyBIC,
                validBIC: action.bodyValidBIC
            }
        case UPDATE_ACCOUNT_PAYMENT:
            return {
                ...state,
                accountPayment: action.bodyAccountPayment,
                validAccountPayment: action.bodyValidAccountPayment
            }
        case UPDATE_CORRESPONDENT_PAYMENT:
            return {
                ...state,
                correspondentPayment: action.bodyCorrespondentPayment
            }
        case UPDATE_LIST_BANK:
            return {
                ...state,
                listBank: action.bodyListBank
            }
        case UPDATE_ADDRESS_BANK:
            return {
                ...state,
                addressBank: action.bodyAddressBank,
                validAddressBank: action.bodyValidAddressBank
            }
        case FULL_INFORMATION_COMPANY:
            return {
                ...state,
                fullInfoCompany: action.bodyFullInfoCompany
            }
        case ADD_DOCUMENTS_INN:
            return {
                ...state,
                documents: {
                    ...state.documents,
                    inn: action.bodyDocumentINN,
                    validINN: action.bodyValidDocumentINN
                }
            }
        case ADD_DOCUMENTS_ORGANIZATION_CHARTER:
            return {
                ...state,
                documents: {
                    ...state.documents,
                    organizationCharter: action.bodyDocumentOrganizationCharter,
                    validOrganizationCharter: action.bodyValidDocumentOrganizationCharter
                }
            }
        case ADD_DOCUMENTS_REASON_FOR_SIGNING:
            return {
                ...state,
                documents: {
                    ...state.documents,
                    reasonForSigning: action.bodyDocumentReasonForSigning,
                    validReasonForSigning: action.bodyValidDocumentReasonForSigning
                }
            }
        case ADD_DOCUMENTS_CONTRACT:
            return {
                ...state,
                documents: {
                    ...state.documents,
                    contract: action.bodyDocumentContract,
                    validContract: action.bodyValidDocumentContract
                }
            }
        case ADD_DOCUMENTS_EGRIP:
            return {
                ...state,
                documents: {
                    ...state.documents,
                    egrip: action.bodyDocumentEgrip,
                    validEgrip: action.bodyValidDocumentEgrip
                }
            }
        case ADDING_DOCUMENTS_SERVER:
            return {
                ...state,
                documents: {
                    ...state.documents,
                    addingDocuments: action.bodyDocumentAddingDocuments
                }
            }
        case STEP_SENDING_DETAILS:
            return {
                ...state,
                flags: {
                    ...state.flags,
                    step1: action.bodyStep1
                }
            }
        case UPDATE_ID_COMPANY:
            return {
                ...state,
                idCompany: action.bodyIdCompany
            }
        default:
            return state;
    }
}
const updateLegalAddress = (address, status) => ({
    type: UPDATE_LEGAL_ADDRESS,
    bodyLegalAddress: address,
    bodyValidLegalAddress: status
});
const updateActualAddress = (address, status) => ({
    type: UPDATE_ACTUAL_ADDRESS,
    bodyActualAddress: address,
    bodyValidActualAddress: status
});
const updateCoincidence = (status) => ({type: UPDATE_CHECKED_COINCIDENCE, bodyCoincidence: status});
const updateSurname = (value, status) => ({
    type: UPDATE_SURNAME,
    bodySurnameAddCompany: value,
    bodyValidSurnameAddCompany: status
});
const updateName = (value, status) => ({type: UPDATE_NAME, bodyNameAddCompany: value, bodyValidNameAddCompany: status});
const updateMiddleName = (value) => ({type: UPDATE_MIDDLE_NAME, bodyMiddleNameAddCompany: value});
const updatePosition = (value, status) => ({
    type: UPDATE_POSITION,
    bodyPositionAddCompany: value,
    bodyValidPositionAddCompany: status
});
const updatePhone = (value, status) => ({
    type: UPDATE_PHONE,
    bodyPhoneAddCompany: value,
    bodyValidPhoneAddCompany: status
})
const updateEmail = (value, status) => ({
    type: UPDATE_EMAIL,
    bodyEmailAddCompany: value,
    bodyValidEmailAddCompany: status
})
const updateINN = (value, status) => ({type: UPDATE_INN, bodyINN: value, bodyValidINN: status});
const updateKPP = (value, status) => ({type: UPDATE_KPP, bodyKPP: value, bodyValidKPP: status});
const updateOGRN = (value, status) => ({type: UPDATE_OGRN, bodyOGRN: value, bodyValidOGRN: status});
const updateListSearch = (value) => ({type: SEARCH_COMPANY, bodySearchCompany: value})
const updateNameCompany = (value, status) => ({
    type: UPDATE_NAME_COMPANY,
    bodyNameCompanyAddCompany: value,
    bodyValidNameCompanyAddCompany: status
})
const updateBIC = (value, status) => ({type: UPDATE_BIC, bodyBIC: value, bodyValidBIC: status});
const updateAccountPayment = (value, status) => ({
    type: UPDATE_ACCOUNT_PAYMENT,
    bodyAccountPayment: value,
    bodyValidAccountPayment: status
});
const updateCorrespondentPayment = (value) => ({type: UPDATE_CORRESPONDENT_PAYMENT, bodyCorrespondentPayment: value});
const updateListBank = (listBank) => ({type: UPDATE_LIST_BANK, bodyListBank: listBank});
const updateAddressBank = (value, status) => ({
    type: UPDATE_ADDRESS_BANK,
    bodyAddressBank: value,
    bodyValidAddressBank: status
});
const updateFullInfoCompany = (value) => ({type: FULL_INFORMATION_COMPANY, bodyFullInfoCompany: value});
const updateStep1 = (status) => ({type: STEP_SENDING_DETAILS, bodyStep1: status});
/*Документы*/
const updateDocINN = (value, status) => ({
    type: ADD_DOCUMENTS_INN,
    bodyDocumentINN: value,
    bodyValidDocumentINN: status
})
const updateDocOrganizationCharter = (value, status) => ({
    type: ADD_DOCUMENTS_ORGANIZATION_CHARTER,
    bodyDocumentOrganizationCharter: value,
    bodyValidDocumentOrganizationCharter: status
})
const updateDocReasonForSigning = (value, status) => ({
    type: ADD_DOCUMENTS_REASON_FOR_SIGNING,
    bodyDocumentReasonForSigning: value,
    bodyValidDocumentReasonForSigning: status
})
const updateDocContract = (value, status) => ({
    type: ADD_DOCUMENTS_CONTRACT,
    bodyDocumentContract: value,
    bodyValidDocumentContract: status
})
const updateEgrip = (value, status) => ({
    type: ADD_DOCUMENTS_EGRIP,
    bodyDocumentEgrip: value,
    bodyValidDocumentEgrip: status
})
const updateStatusAddingDocument = (status) => ({type: ADDING_DOCUMENTS_SERVER, bodyDocumentAddingDocuments: status})
const updateUrlContract = (url) => ({type: UPDATE_URL_DOCUMENTS, bodyUrlContract: url})
const updateId = (id) => ({type: UPDATE_ID_COMPANY, bodyIdCompany: id})
/*------------------*/
export const updateVat_payer = (status) => ({type: UPDATE_VAT_PAYER, bodyVat_payer: !status})

/*Обновление данных поля - Юридический адрес*/
export const legalAddress = (address) => {
    return (dispatch) => {
        dispatch(updateLegalAddress(address, true));
    }
}
/*Проверка на валидность поле - Юридический адрес*/
export const validLegalAddress = (address) => {
    return (dispatch) => {
        if (String(address).length > 5) {
            dispatch(updateLegalAddress(address, true));
        } else dispatch(updateLegalAddress(address, false));
    }
}
/*Обновление данных поля - Фактический адрес*/
export const actualAddress = (address) => {
    return (dispatch) => {
        dispatch(updateActualAddress(address, true));
    }
}
/*Проверка на валидность поле - Фактический адрес*/
export const validActualAddress = (address) => {
    return (dispatch) => {
        if (String(address).length > 5) {
            dispatch(updateActualAddress(address, true));
        } else dispatch(updateActualAddress(address, false));
    }
}
/*
Изменение состояния поля - Юридический адрес совпадает с фактическим.
Блокируем поле фактического адреса для изменений и присваиваем ему значение юридического адреса.
*/
export const coincidence = (status, address) => {
    return (dispatch) => {
        dispatch(updateCoincidence(!status));
        dispatch(updateActualAddress(address, true));
    }
}
/*Форма для валидации полей*/
const validForm = (value) => {
    if (String(value).length > 1) {
        return true;
    } else return false
}
/*Обновление состояния поля - фамилия*/
export const surnameAddCompany = (surname) => {
    return (dispatch) => {
        dispatch(updateSurname(surname, true));
    }
}
/*Проверка валидности поля - фамилия*/
export const validSurnameAddCompany = (surname) => {
    return (dispatch) => {
        dispatch(updateSurname(surname, validForm(surname)));
    }
}
/*Обновление состояния поля - имя*/
export const nameAddCompany = (name) => {
    return (dispatch) => {
        dispatch(updateName(name, true));
    }
}
/*Проверка валидности поля - имя*/
export const validNameAddCompany = (name) => {
    return (dispatch) => {
        dispatch(updateName(name, validForm(name)));
    }
}
/*Обновление состояния поля - отчество*/
export const middleNameAddCompany = (middleName) => {
    return (dispatch) => {
        dispatch(updateMiddleName(middleName));
    }
}
/*Обновление состояния поля - должность*/
export const positionAddCompany = (position) => {
    return (dispatch) => {
        dispatch(updatePosition(position, true));
    }
}
/*Проверка валидности поля - должность*/
export const validPositionAddCompany = (position) => {
    return (dispatch) => {
        dispatch(updatePosition(position, validForm(position)));
    }
}
/*Обновление состояния поля - телефон*/
export const phoneAddCompany = (phone) => {
    console.log(phone)
    return (dispatch) => {
        dispatch(updatePhone(phone, true));
    }
}/*Проверка валидности поля - телефон*/
export const validPhoneAddCompany = (phone) => {
    return (dispatch) => {
        dispatch(updatePhone(phone, validationFormPhone(phone)));
    }
}
/*Обновление состояния поля - email*/
export const emailAddCompany = (email) => {
    return (dispatch) => {
        dispatch(updateEmail(email, true));
    }
}
/*Проверка валидации поля - email*/
export const validEmailAddCompany = (email) => {
    return (dispatch) => {
        dispatch(updateEmail(email, validationFormEmail(email)));
    }
}
/*Поиск компаний с помощью ИНН, ОГРН, KPP Наименования*/
export const searchCompany = (value, id) => {
    return (dispatch) => {
        if (id === 1) {
            dispatch(updateINN(value, true));
        }
        if (id === 2) {
            dispatch(updateOGRN(value, true));
        }
        if (id === 3) {
            dispatch(updateNameCompany(value, true));
        }
        if (String(value).length > 1) {
            addCompanyAPI.searchDetail(value).then(r => {
                dispatch(updateListSearch(r.data));
            })
        }
    }
}
/*Автоматическое заполнение полей*/
export const informationYouCompany = (value, listCompany, id) => {
    let newArray = (value.replace(')', '')).split('(');
    return (dispatch) => {
        listCompany.map(r => {
            if (newArray.length === 2) {
                if (String(r.value) === String(newArray[0]) && String(r.management_name) === String(newArray[1])) {
                    dispatch(updateOGRN(r.ogrn, true));
                    dispatch(updateINN(r.inn, true));
                    dispatch(updateKPP(r.kpp, true));
                    dispatch(updateLegalAddress(r.address, true));
                    dispatch(updateNameCompany(r.value + '(' + r.management_name + ')', true));
                    dispatch(updateFullInfoCompany(r));
                }
            }

            if (newArray.length === 1 && id === 1) {
                console.log('r.inn')
                console.log(value)
                console.log(r.inn)
                console.log('r.inn')
                if (String(r.inn) === String(value)) {
                    console.log(r)
                    dispatch(updateOGRN(r.ogrn, true));
                    dispatch(updateINN(r.inn, true));
                    dispatch(updateKPP(r.kpp, true));
                    dispatch(updateLegalAddress(r.address, true));
                    dispatch(updateNameCompany(r.value + '(' + r.management_name + ')', true));
                    dispatch(updateFullInfoCompany(r));
                }
            }
            if (newArray.length === 1 && id === 2) {
                if (String(r.ogrn) === String(value)) {
                    console.log('r.value')
                    console.log(r.value)
                    console.log('r.value')
                    dispatch(updateOGRN(r.ogrn, true));
                    dispatch(updateINN(r.inn, true));
                    dispatch(updateKPP(r.kpp, true));
                    dispatch(updateLegalAddress(r.address, true));
                    dispatch(updateNameCompany(r.value + '(' + r.management_name + ')', true));
                    dispatch(updateFullInfoCompany(r));
                }
            }
        })
    }
}
/*Отпарвляем запрос на получение списка банковских данных по БИК*/
export const searchInfoBIC = (value) => {
    return (dispatch) => {
        if (String(value).length > 2) {
            addCompanyAPI.searchBank(value).then(r => {
                dispatch(updateListBank(r.data));
            })
        }
    }
}
/*Автоматическое заполнение полей после изменения поля БИК*/
export const informationPayment = (value, listBank) => {
    return (dispatch) => {
        listBank.map(r => {
            if (String(r.bic) === String(value)) {
                dispatch(updateBIC(r.bic, true));
                dispatch(updateCorrespondentPayment(r.correspondent_account));
                dispatch(updateAddressBank(r.payment_name, true));
            }
        })
    }
}
/*Изменения состояния поле - расчетный счет*/
export const accountPaymentAddCompany = (value) => {
    return (dispatch) => {
        dispatch(updateAccountPayment(value, true));
    }
}
/*Изменения состояния поле - расчетный счет*/
export const addressBankAddCompany = (value) => {
    return (dispatch) => {
        dispatch(updateAddressBank(value, true));
    }
}
/*Добавление компании - переход к следующему шагу*/
export const addCompanyYou = (listInfo) => {
    return (dispatch) => {
        if (!validationFormINN(listInfo.INN)) {
            dispatch(updateINN(listInfo.INN, false));
        }
        if (!validationFormOGRN(listInfo.OGRN)) {
            dispatch(updateOGRN(listInfo.OGRN, false));
        }
        if (!validationFormNameCompany(listInfo.nameCompany)) {
            dispatch(updateNameCompany(listInfo.nameCompany, false));
        }
        if (!validationFormLegalAddress(listInfo.legalAddress)) {
            dispatch(updateLegalAddress(listInfo.legalAddress, false));
        }
        if (!validationFormLegalAddress(listInfo.actualAddress)) {
            dispatch(updateActualAddress(listInfo.actualAddress, false));
        }
        if (!validationFormBIC(listInfo.BIC)) {
            dispatch(updateBIC(listInfo.BIC, false));
        }
        if (!validationFormNameBank(listInfo.addressBank)) {
            dispatch(updateAddressBank(listInfo.addressBank, false));
        }
        if (!validationFormAccountPayment(listInfo.accountPayment)) {
            dispatch(updateAccountPayment(listInfo.accountPayment, false));
        }
        if (!validationFormSurname(listInfo.personalData.surname)) {
            dispatch(updateSurname(listInfo.personalData.surname, false));
        }
        if (!validationFormName(listInfo.personalData.name)) {
            dispatch(updateName(listInfo.personalData.name, false));
        }
        if (!validationFormPosition(listInfo.personalData.position)) {
            dispatch(updatePosition(listInfo.personalData.position, false));
        }
        if (!validationFormEmail(listInfo.personalData.email)) {
            dispatch(updateEmail(listInfo.personalData.email, false));
        }
        if (!validationFormPhone(listInfo.personalData.phone)) {
            dispatch(updatePhone(listInfo.personalData.phone, false));
        }
        if (
            validationFormPosition(listInfo.personalData.position) &&
            validationFormName(listInfo.personalData.name) &&
            validationFormSurname(listInfo.personalData.surname) &&
            validationFormAccountPayment(listInfo.accountPayment) &&
            validationFormNameBank(listInfo.addressBank) &&
            validationFormBIC(listInfo.BIC) &&
            validationFormLegalAddress(listInfo.actualAddress) &&
            validationFormLegalAddress(listInfo.legalAddress) &&
            validationFormNameCompany(listInfo.nameCompany) &&
            validationFormOGRN(listInfo.OGRN) &&
            validationFormINN(listInfo.INN)) {
            addCompanyAPI.addCompanyInfo(
                listInfo.fullInfoCompany.full_with_opf, listInfo.fullInfoCompany.value,
                listInfo.fullInfoCompany.type, listInfo.fullInfoCompany.inn,
                listInfo.fullInfoCompany.ogrn, listInfo.fullInfoCompany.kpp,
                listInfo.fullInfoCompany.opf_code, listInfo.fullInfoCompany.opf_full,
                listInfo.fullInfoCompany.opf_short, listInfo.fullInfoCompany.address,
                listInfo.actualAddress, listInfo.personalData.surname, listInfo.personalData.name,
                listInfo.personalData.middleName, listInfo.personalData.position, 1,
                listInfo.VAT_payer, listInfo.addressBank, listInfo.accountPayment,
                listInfo.BIC, listInfo.correspondentPayment, listInfo.fullInfoCompany.management_name,
                listInfo.personalData.email, listInfo.personalData.phone
            ).then(r => {
                dispatch(updateUrlContract(r.data.contract))
                dispatch(listCompany());
                dispatch(updateStep1(true));
                dispatch(updateId(r.data.id))

                let formData = new FormData();
                formData.append("email", listInfo.personalData.email);
                formData.append("phone", listInfo.personalData.phone);
                addCompanyAPI.addPhoneAndEmailCompany(r.data.profile_id, formData,);
            })
        }
    }
}
/*Добавление документа - ИНН*/
export const addingDocumentINN = (documents) => {
    return (dispatch) => {
        dispatch(updateDocINN(documents,true));
    }
}
/*Добавление документа - Устав организации*/
export const addingDocumentOrganizationCharter = (documents) => {
    return (dispatch) => {
        dispatch(updateDocOrganizationCharter(documents,true));
    }
}
/*Добавление документа - Основания для подписания*/
export const addingDocumentReasonForSigning = (documents) => {
    return (dispatch) => {
        dispatch(updateDocReasonForSigning(documents,true));
    }
}
/*Добавление документа - Договор*/
export const addingDocumentContract = (documents) => {
    return (dispatch) => {
        dispatch(updateDocContract(documents, true));
    }
}
/*Добавление документа - ЕГРИП*/
export const addingDocumentEgrip = (documents) => {
    return (dispatch) => {
        dispatch(updateEgrip(documents, true));
    }
}
/*тест*/
export const addDocumentsCompany = (documents, company, idCompany) => {
    return (dispatch) => {
        let formData = new FormData();
        formData.append("company", idCompany)
        if (String(company) === 'ИП') {
            if (documents.validEgrip && documents.validContract) {
                formData.append("egrip", documents.egrip[0]);//выписка ЕГРИП
                formData.append("contract", documents.contract[0]);
                addCompanyAPI.addDocument(formData, idCompany).then(r => {
                    dispatch(updateStatusAddingDocument(true))
                })
            }
        }
        else {
            if (documents.validContract && documents.validINN && documents.validOrganizationCharter && documents.validReasonForSigning) {
                formData.append("inn", documents.inn[0]);
                formData.append("contract", documents.contract[0]);
                formData.append("charter", documents.organizationCharter[0]);//устав организации
                formData.append("order_appointment", documents.reasonForSigning[0]);//основания для подписания
                addCompanyAPI.addDocument(formData,idCompany).then(r => {
                    dispatch(updateStatusAddingDocument(true))
                })
            }
        }
    }
}
/*Отправка документов на проверку*/
export const addDocuments = (documents, company, idCompany) => {

}
export default AddCompanyReducer;