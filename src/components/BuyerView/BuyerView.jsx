import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import FarmerList from "../FarmerList/FarmerList";
import MarketInformation from "../MarketInformation/MarketInformation";

import { getAdmins } from "../../store/epic/adminsEpic";
import { fetchFarmers } from "../../store/epic/userDataEpic";
import { googleTranslate } from "../../utils/googleTranslate";

import "./BuyerView.css";

export default class BuyerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      user: null,
      farmers: null,
      buyerData: null,
      markets: null,
      marketPrices: null,
      valueChains: null,
      isInitiated: false,
      admins: null,
      farmersData: null,
      wards: null,
      labels: {
        mainTitle: "MIS Service Trader Page",
        farmerListingTitle: "FARMER LISTING",
        marketInfoTitle: "MARKET INFORMATION",
        logoutLabel: "Logout"
      }
    };
  }

  getTranslation = (word, startLang, targetLang, key, labelsList) => {
    let translationPromise = new Promise(() =>
      googleTranslate.translate(
        word,
        startLang,
        targetLang,
        function (err, translation) {
          let result = translation?.translatedText;
          labelsList[key] = result;
          return labelsList;
        }
      )
    );
  };

  componentDidMount() {
    const { isInitiated, labels} = this.state;
    let changeLabels = labels;
    if (window.store.authUser[0].authUser && !isInitiated) {
      this.setState({
        user: window.store.authUser[0].authUser.user,
        buyerData: window.store.authUser[0].authUser.buyer,
        farmers: window.store?.authUser[0]?.authUser?.farmers,
        // mapData: window.store.authUser[0].authUser.mapData,
        markets: window.store.authUser[0].authUser.markets,
        marketPrices: window.store.authUser[0].authUser.marketPrices,
        valueChains: window.store.authUser[0].authUser.valueChains,
        wards: window.store.authUser[0].authUser.wards,
        // searchResult: window.store.authUser[0].authUser.searchResult,
        isInitiated: true,
      });
    }

    if (window.language !== "en") {
      for (let key in changeLabels) {
        let translation = this.getTranslation(
          changeLabels[key],
          "en",
          window.language,
          key,
          changeLabels
        );
      }
      this.setState({
        labels: changeLabels,
        checked: true,
      });
      console.log(changeLabels);
      this.setState({
        labels: changeLabels,
        checked: true,
      });
    }

  }

  renderTabContent(value) {
    const {
      buyerData,
      farmers,
      wards,
      markets,
      marketPrices,
      valueChains,
      admins
    } = this.state;

    switch (value) {
      case 0:
        return (
          <div className="market-info-container">
            <MarketInformation
            marketPrices={marketPrices}
            markets={markets}
            valueChains={valueChains}
            admins={admins}
            />
          </div>
        );
      case 1:
        return (
          <div className="farmers">
            <FarmerList
              farmers={farmers}
              wards={wards}
              valueChains={valueChains}
              showAll={false}
            />
          </div>
        );
      default:
        return (
          <div>
            <h1>One</h1>
          </div>
        );
    }
  }

  handleChange = (event) => {
    const {labels} = this.state;
    if (event.target.innerText.toLowerCase() === labels.farmerListingTitle.toLowerCase()) {
      this.setState({
        value: 1,
      });
    } else if (event.target.innerText.toLowerCase() === labels.marketInfoTitle.toLowerCase()) {
      this.setState({
        value: 0,
      });
    }
  };

  logout = () => {
    localStorage.clear();
    this.props.history.push("/");
  }

  render() {
    const { value, labels} = this.state;
    const currentTab = this.renderTabContent(value);
    return (
      <div>
      <AppBar position="static" color="transparent">
        <Typography component="h1" variant="h3">
          {labels.mainTitle}
        </Typography>
        <Paper square>
          <Tabs
            value={value}
            onChange={(event) => this.handleChange(event)}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            <Tab id={0} label={labels.marketInfoTitle} />
            <Tab id={1} label={labels.farmerListingTitle} />
          </Tabs>
        </Paper>
        <div className="logout-button">
          <IconButton color="primary" aria-label="Logout" size="large" onClick={this.logout}>
            <PowerSettingsNewIcon/>
          </IconButton>
          <a href=""onClick={this.logout}>{labels.logoutLabel}</a>
        </div>
      </AppBar>
      {currentTab}
      </div>
      
    );
  }
}
