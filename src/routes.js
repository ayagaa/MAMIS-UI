import React from "react";
import { Route, Switch } from "react-router-dom";
import  LoginForm  from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
// import { UserForm } from './components/UserForm';
// import { FormAdministratorsVerification } from './components/FormAdministratorsVerification';
// import { FormPollingStationVetting } from './components/FormPollingStationVetting';
// import { FormBursaryAward } from './components/FormBursaryAward';
// import AuthForm from './components/AuthForm';

const BaseRouter = () => (
    <Switch>
        <Route exact path='/' component={LoginForm}/>
        <Route exact path='/registration-form' component={RegistrationForm}/>
        {/* <Route exact path='/application-form' component={UserForm} />
        <Route exact path='/verification-form' component={FormAdministratorsVerification} />
        <Route exact path='/pollingstation-vetting' component={FormPollingStationVetting} />
        <Route exact path='/bursary-award' component={FormBursaryAward} />
        <Route exact path='/auth-form' component={AuthForm} /> */}
    </Switch>
);

export default BaseRouter;