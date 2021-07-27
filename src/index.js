import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import BaseContainer from "../src/containers/BaseContainer";
import './index.css';
import reportWebVitals from './reportWebVitals';

import {setConfig} from "react-google-translate";

setConfig({
  clientEmail: process.env.REACT_APP_GCP_CLIENT_EMAIL ?? '',
  privateKey: process.env.REACT_APP_GCP_PRIVATE_KEY ?? '',
  projectId: process.env.REACT_APP_GCP_PROJECT_ID ?? ''
});

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

window.language = "en";

const rootReducer = combineReducers({
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BaseContainer/>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
