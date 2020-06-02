import React from 'react';
import classNamees from './index.module.css'
import Footer from './components/footer/footer';
import { Route, Router, Switch } from "react-router-dom";
import HeaderContainer from "./components/header/headerСontainer";
import AuthorizationContainerExport from "./components/authorization/authorizationUser/authorizationContainer";
import AboutMe from "./components/footer/aboutMe/aboutMe";
import PolicyAndPrivacy from "./components/footer/policyAndPrivacy/policyAndPrivacy";
import PublicOffer from "./components/footer/publicOffer/publicOffer";
import PaymentMethod from "./components/footer/PaymentMethod/paymentMethod";
import ExportTransportCompany from "./components/footer/transportCompany/transportCompanyContainer";
import ExportProfileTransportCompany from "./components/footer/transportCompany/profileCompany/profileCompanyContainer";
import ExportMyShipmentsContainer from "./components/express/myShipments/myShipmentsContainer";
import ExportMyShipmentsInformationContainer from "./components/express/myShipments/myShipmentsInformation/myShipmentsInformationContainer";
import RegistrationContainerExport from "./components/authorization/registrationUser/registrationContainer";
import { Alert } from 'bootstrap-4-react';
import { ExportReloadPasswordContainer } from "./components/authorization/reloadPassword/reloadPasswordContainer";
import NotificationReloadPassword from "./components/authorization/reloadPassword/notificationReloadPassword";
import ExportContactContainer from './components/footer/contacts/contactsContainer';
import ExportWebsitePlaginContainer from './components/footer/websitePlagin/websitePlaginContainer';
import MainPage from "./components/express/main-page/mainPage";
import ExportMyAddressContainer from "./components/express/myAddress/myAddressContainer";
import AddAddress from "./components/express/myAddress/add_address/add_address";
import MyPayment from "./components/express/myPayment/myPayment";
import AddCompany from "./components/express/addCompany/addCompany";
import Plan from "./components/plan";
import PersonalAccountContainerExport from "./components/express/personalAccount/personalAccountContainer";
import ExportSettingContainer from "./components/express/personalAccount/setting/settingContainer";
import AddingDocuments from "./components/express/addCompany/addingDocuments/addingDocuments";
import Done from "./components/express/addCompany/addingDocuments/done/done";
import Account from "./components/express/myPayment/account/account";
import Error404 from "./components/error404/error404";
import Order from "./components/express/order/order";
import OrderSent from "./components/express/order/orderSent/orderSent";
const App = () => {
    const NoMatchPage = () => {  return (    <h3>404 - Not found</h3>  );};
    return (
        <div className={'container-fluid pl-0 pr-0' + ' ' + classNamees.main}>
            <div className={'row mr-0 ml-0'}>
                <div className={'col-12 pr-0 pl-0'}>
                    <HeaderContainer />
                </div>
                <div className={'col-12 pl-0 pr-0'}>
                    <div className={classNamees.containerMain}>
                        <Switch>
                            <Route exact path='/'  render={() => <MainPage />}/>
                            <Route exact path='/myAddress' render={() => <ExportMyAddressContainer />} />
                            <Route exact path='/myShipments' render={() => <ExportMyShipmentsContainer />} />
                            <Route exact path='/login' render={() => <AuthorizationContainerExport />} />
                            <Route exact path={'/aboutMe'} render={() => <AboutMe />} />
                            <Route exact path={'/contact'} render={() => <ExportContactContainer />} />
                            <Route exact path={'/policy'} render={() => <PolicyAndPrivacy />} />
                            <Route exact path={'/publicOffer'} render={() => <PublicOffer />} />
                            <Route exact path={'/paymentMethod'} render={() => <PaymentMethod />} />
                            <Route exact path={'/transportCompany'} render={() => <ExportTransportCompany />} />
                            <Route exact path={'/profileCompany/'} render={() => <ExportProfileTransportCompany />} />
                            <Route exact path={'/1'} render={() => <ExportMyShipmentsInformationContainer />} />
                            <Route exact path={'/registration'} render={() => <RegistrationContainerExport />} />
                            <Route exact path={'/reloadPassword'} render={() => <ExportReloadPasswordContainer />} />
                            <Route exact path={'/notificationReloadPassword'} render={() => <NotificationReloadPassword />} />
                            <Route exact path={'/websitePlagin'} render={()=> <ExportWebsitePlaginContainer />} />
                            <Route exact path={'/addAddress'} render={()=><AddAddress/>}/>
                            <Route exact path={'/myPayment'} render={()=><MyPayment/>}/>
                            <Route exact path={'/addCompany'} render={()=><AddCompany/>}/>
                            <Route exact path={'/plan'} render={()=><Plan/>}/>
                            <Route exact path={'/personalAccount'} render={()=><PersonalAccountContainerExport/>}/>
                            <Route exact path={'/setting'} render={()=><ExportSettingContainer/>}/>
                            <Route exact path={'/addCompany/loadingFile'} render={()=><AddingDocuments/>} />
                            <Route exact path={'/addCompany/loadingFile/done'} render={()=><Done/>}/>
                            <Route exact path={'/myPayment/account'} render={()=><Account/>}/>
                            <Route exact path={'/order'} render={()=><Order/>}/>
                            <Route exact path={'/order/orderSent'} render={()=><OrderSent/>}/>
                            <Route render={()=><Error404/>}/>
                        </Switch>
                    </div>
                </div>
                <div className={'col-12'}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
export default App;
