import React from 'react';
import classNamees from './index.module.css'
import Footer from './components/footer/footer';
import { Route, Router, Switch } from "react-router-dom";
import HeaderContainer from "./components/header/headerСontainer";
import AuthorizationContainerExport from "./components/authorization/authorizationUser/authorizationContainer";
import AddressContainerExport from "./components/express/myAddress/add_address/add_addressContainer";
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
import PersonalAccount from "./components/express/personalAccount/personalAccount";
const App = () => {
    return (
        <div className={'container-fluid pl-0 pr-0' + ' ' + classNamees.main}>
            <div className={'row mr-0 ml-0'}>
                <div className={'col-12 pr-0 pl-0'}>
                    <HeaderContainer />
                </div>
                <div className={'col-12 pl-0 pr-0'}>
                    <div className={classNamees.containerMain}>
                        <Switch>
                            <Route path='/' exact render={() => <MainPage />}/>
                            <Route path='/express/myAddress' render={() => <ExportMyAddressContainer />} />
                            <Route path='/myShipments' render={() => <ExportMyShipmentsContainer />} />
                            <Route path='/login' render={() => <AuthorizationContainerExport />} />
                            <Route path={'/aboutMe'} render={() => <AboutMe />} />
                            <Route path={'/contact'} render={() => <ExportContactContainer />} />
                            <Route path={'/policy'} render={() => <PolicyAndPrivacy />} />
                            <Route path={'/publicOffer'} render={() => <PublicOffer />} />
                            <Route path={'/paymentMethod'} render={() => <PaymentMethod />} />
                            <Route path={'/transportCompany'} render={() => <ExportTransportCompany />} />
                            <Route path={'/profileCompany/'} render={() => <ExportProfileTransportCompany />} />
                            <Route path={'/1'} render={() => <ExportMyShipmentsInformationContainer />} />
                            <Route path={'/registration'} render={() => <RegistrationContainerExport />} />
                            <Route path={'/reloadPassword'} render={() => <ExportReloadPasswordContainer />} />
                            <Route path={'/notificationReloadPassword'} render={() => <NotificationReloadPassword />} />
                            <Route path={'/websitePlagin'} render={()=> <ExportWebsitePlaginContainer />} />
                            <Route path={'/addAddress'} render={()=><AddAddress/>}/>
                            <Route path={'/myPayment'} render={()=><MyPayment/>}/>
                            <Route path={'/addCompany'} render={()=><AddCompany/>}/>
                            <Route path={'/plan'} render={()=><Plan/>}/>
                            <Route path={'/personalAccount'} render={()=><PersonalAccount/>}/>
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
