import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import IconButton from "@material-ui/core/IconButton";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import UserList from "../UserList/UserList";
import FarmerList from "../FarmerList/FarmerList";
import BuyerList from "../BuyerList/BuyerList";
import MarketInformation from "../MarketInformation/MarketInformation";

import {deleteUser} from "../../store/epic/userDataEpic";
import { authenticateUser } from "../../store/epic/userAuthEpic";

import "./AdminView.css";

export default class AdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      buyers: [],
      farmers: [],
      marketPrices: [],
      markets: [],
      valueChains: [],
      users: [],
      wards: [],
      admins: [],
      user: null,
    };
  }

  componentDidMount() {
    if (window.store?.authUser[0]?.authUser) {
      this.setState({
        buyers: window.store?.authUser[0]?.authUser?.buyers,
        farmers: window.store?.authUser[0]?.authUser?.farmers,
        marketPrices: window.store?.authUser[0]?.authUser?.marketPrices,
        markets: window.store?.authUser[0]?.authUser?.markets,
        valueChains: window.store?.authUser[0]?.authUser?.valueChains,
        users: window.store?.authUser[0]?.authUser?.users,
        wards: window.store?.authUser[0]?.authUser?.wards,
        admins: window.store?.authUser[0]?.authUser?.admins,
        user: window.store?.authUser[0]?.authUser?.user,
      });
    } else {
    }
  }

  deleteSelectedUser = (selectedUser) => {
    const {user} = this.state;
    console.log(user);
    console.log(selectedUser);

    const [userData, userDataDispatch] = window.store.userData;
    deleteUser(selectedUser, userDataDispatch)
    .then((respose) => {
      console.log("user deleted");
    });

    const [authUser, authDispatch] = window.store.authUser;
    authenticateUser(user, authDispatch)
      .then((response) => {
        const [authUser] = window.store.authUser;
        if (authUser.authUser && authUser.authUser.user) {
          console.log(authUser.authUser.users);
          this.setState({
            buyers: window.store?.authUser.buyers,
            farmers: window.store?.authUser.farmers,
            marketPrices: window.store?.authUser.marketPrices,
            markets: window.store?.authUser.markets,
            valueChains: window.store?.authUser.valueChains,
            users: window.store?.authUser.users,
            wards: window.store?.authUser.wards,
            admins: window.store?.authUser.admins,
            user: window.store?.authUser.user,
          });
        }
      });
  }

  handleChange = (event) => {
    if (event.target.innerText === "USERS") {
      this.setState({
        value: 0,
      });
    } else if (event.target.innerText === "FARMERS") {
      this.setState({
        value: 1,
        rerenderMap: false,
      });
    } else if (event.target.innerText === "TRADERS") {
      this.setState({
        value: 2,
        rerenderMap: false,
      });
    } else if (event.target.innerText === "MARKET PRICES") {
      this.setState({
        value: 3,
        rerenderMap: false,
      });
    }
  };

  renderTabContent(value) {
    const {
      buyers,
      farmers,
      marketPrices,
      markets,
      valueChains,
      users,
      wards,
      admins,
    } = this.state;

    switch (value) {
      case 0:
        return (
          <div className="users">
            <UserList
              buyers={buyers}
              farmers={farmers}
              users={users}
              wards={wards}
              deleteSelectedUser={this.deleteSelectedUser}
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
              showAll={true}
            />
          </div>
        );
      case 2:
        return (
          <div className="traders">
            <BuyerList
              buyers={buyers}
              wards={wards}
              valueChains={valueChains}
              showAll={true}
            />
          </div>
        );
      case 3:
        return (
          <div className="market-prices">
            <MarketInformation
              marketPrices={marketPrices}
              markets={markets}
              valueChains={valueChains}
              admins={admins}
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

  logout = () => {
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    const { value, marketPrices, user } = this.state;
    const currentTab = this.renderTabContent(value);
    return (
      <div>
        <AppBar position="static" color="transparent">
          <Typography component="h1" variant="h3">
            MAMIS Service Administration Page
          </Typography>
          <br />
          <br />
          <br />
          <Paper square>
            <Tabs
              value={value}
              onChange={(event) => this.handleChange(event)}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="primary"
              aria-label="icon label tabs example"
            >
              <Tab id={0} label="Users" />
              <Tab id={1} label="Farmers" />
              <Tab id={2} label="Traders" />
              <Tab id={3} label="Market Prices" />
            </Tabs>
          </Paper>
          <div className="logout-button">
            <IconButton
              color="primary"
              aria-label="Logout"
              size="large"
              onClick={this.logout}
            >
              <PowerSettingsNewIcon />
            </IconButton>
            <a href="" onClick={this.logout}>
              Logout
            </a>
          </div>
        </AppBar>
        {currentTab}
      </div>
    );
  }
}
