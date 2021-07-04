import React from "react";
import { Route, Switch } from "react-router-dom";
import  LoginForm  from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import BuyerView from './components/BuyerView/BuyerView';
import FarmerView from './components/FarmerView/FarmerView';

const BaseRouter = () => (
    <Switch>
        <Route exact path='/' component={LoginForm}/>
        <Route exact path='/registration-form' component={RegistrationForm}/>
        <Route exact path='/buyer-view' component={BuyerView}/>
        <Route exact path='/farmer-view' component={FarmerView}/>
    </Switch>
);

export default BaseRouter;