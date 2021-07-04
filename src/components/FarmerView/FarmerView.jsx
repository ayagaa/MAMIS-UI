import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default class FarmerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount(){
    const farmerData = window.store.authUser[0].authUser.farmer;

    console.log(farmerData);
  }

  handleChange = (event) => {
    if (event.target.innerText === "WEATHER INFORMATION") {
      this.setState({
        value: 0,
      });
    } else if (event.target.innerText === "MARKET INFORMATION") {
      this.setState({
        value: 1,
      });
    } else if(event.target.innerText === "CREDIT FACILITIES"){
      this.setState({
        value: 2,
      });

    } else if(event.target.innerText === "CROP INSURANCE"){
      this.setState({
        value: 3,
      });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <AppBar position="static" color="secondary">
        <Typography component="h1" variant="h3">
          MIS Service Farmer Page
        </Typography>
        <Paper square>
          <Tabs
            value={value}
            onChange={(event) => this.handleChange(event)}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab id={0} label="Weather Information" />
            <Tab id={1} label="Market Information" />
            <Tab id={2} label="Credit Facilities" />
            <Tab id={3} label="Crop Insurance" />
          </Tabs>
        </Paper>
      </AppBar>
    );
  }
}
