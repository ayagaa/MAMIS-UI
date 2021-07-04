import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { FormControl, FormHelperText, Button } from "@material-ui/core";

import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import BuyerDetails from "../BusinessDetails/BuyerDetails";
import FarmerDetails from "../BusinessDetails/FarmerDetails";
import CredentialsForm from "../CredentialsForm/CredentialsForm";
import RegistrationResult from "../RegistrationResult/RegistrationResult";

import { getAdmins } from "../../store/epic/adminsEpic";
import { getValueChains } from "../../store/epic/valueChainsEpic";

import "./../../styles/FormStyles.css";

const styles = {
  button: {
    margin: 15,
  },
};

let administrationList = "";
let valueChainsList = "";

export class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      nationalId: null,
      firstName: "",
      givenName: "",
      otherName: "",
      gender: "",
      contactNo: "",
      emailAddress: "",
      userType: null,
      latitude: null,
      longitude: null,
      countyId: null,
      subCountyId: null,
      wardId: null,
      wardName: "",
      buyerBV: [],
      farmerBV: [],
      userName: "",
      password: "",
      submitted: false,
      hasError: false,
      errorText: "",
    };
  }

  componentDidMount() {
    const [admins, adminsDispatch] = window.store.admins;
    const [valueChains, valueChainsDispatch] = window.store.valueChains;

    getAdmins(adminsDispatch).then((result) => {
      const [admins, adminsDispatch] = window.store.admins;
      administrationList = admins;
    });

    getValueChains(valueChainsDispatch).then((result) => {
      const [valueChains, valueChainsDispatch] = window.store.valueChains;
      valueChainsList = valueChains;
    });
  }

  getSteps = () => {
    return [
      "Personal Details",
      "Contact Details",
      "Business Details",
      "Login Details",
      "Confirmation",
      "Sign in",
    ];
  };

  getStepContent = (step, userType) => {
    switch (step) {
      case 1:
        return "Enter your personal details";
      case 2:
        return "Enter your contact details";
      case 3:
        if (userType === 1) {
          return "Your Farm(s) Details";
        }
        return "Business details";
      case 4:
        return "Please enter a password for your new account";
      case 5:
        return "Confirmation";
    }
  };

  chechErrors() {
    const {
      step,
      nationalId,
      firstName,
      givenName,
      otherName,
      gender,
      contactNo,
      emailAddress,
      userType,
      latitude,
      longitude,
      countyId,
      subCountyId,
      wardId,
      wardName,
      buyerBV,
      farmerBV,
      userName,
      password,
      submitted,
    } = this.state;

    let errorChecker = false;
    if (step === 1) {
      errorChecker = !(
        nationalId > 0 &&
        firstName.length > 0 &&
        givenName.length > 0 &&
        otherName.length > 0 &&
        gender.length > 0 &&
        userType > 0
      );
    }
    if (step === 2) {
      errorChecker = !(
        contactNo.length > 0 &&
        countyId > 0 &&
        subCountyId > 0 &&
        wardId > 0
      );
    }
    if (step === 3) {
      if (userType === 1) {
        errorChecker = !(farmerBV.length > 0);
      }

      if (userType === 2) {
        errorChecker = !(buyerBV.length > 0);
      }
    }
    if (step === 4) {
      errorChecker = !(password.length > 0);
    }

    return errorChecker;
  }

  nextStep = () => {
    const {
      step,
      nationalId,
      firstName,
      givenName,
      otherName,
      gender,
      contactNo,
      emailAddress,
      userType,
      latitude,
      longitude,
      countyId,
      subCountyId,
      wardId,
      wardName,
      buyerBV,
      farmerBV,
      userName,
      password,
      submitted,
    } = this.state;

    if (step < 5) {
      let errorChecker = this.chechErrors();

      if (!errorChecker) {
        this.setState({
          step: step + 1,
          hasError: errorChecker,
          errorText: "",
        });
      } else {
        this.setState({
          hasError: errorChecker,
          errorText:
            "Please ensure that you have entered all the required fields",
        });
      }
    } else {
      this.props.history.push("/");
    }

    const applicationDetails = {
      nationalId: nationalId,
      firstName: firstName,
      givenName: givenName,
      otherName: otherName,
      gender: gender,
      contactNo: contactNo,
      emailAddress: emailAddress,
      userType: userType,
      latitude: latitude,
      longitude: longitude,
      countyId: countyId,
      subCountyId: subCountyId,
      wardId: wardId,
      wardName: wardName,
      buyerBV: buyerBV,
      farmerBV: farmerBV,
      userName: userName,
      password: password,
      submitted: submitted,
    };
  };

  previousStep = () => {
    const { step } = this.state;
    if (step > 1) {
      this.setState({
        step: step - 1,
      });
    }
  };

  getPage = (step, applicationValues, stepLabel, userType) => {
    switch (step) {
      case 1:
        return (
          <PersonalDetailsForm
            stepLabel={stepLabel}
            values={applicationValues}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <ContactDetailsForm
            stepLabel={stepLabel}
            values={applicationValues}
            admins={administrationList}
            handleChange={this.handleChange}
          />
        );
      case 3:
        if (userType === 1) {
          return (
            <FarmerDetails
              stepLabel={stepLabel}
              values={applicationValues}
              valueChains={valueChainsList}
              handleChange={this.handleChange}
            />
          );
        }
        return (
          <BuyerDetails
            stepLabel={stepLabel}
            values={applicationValues}
            valueChains={valueChainsList}
            handleChange={this.handleChange}
          />
        );
      case 4:
        return (
          <CredentialsForm
            stepLabel={stepLabel}
            values={applicationValues}
            handleChange={this.handleChange}
          />
        );
      case 5:
        return (
          <RegistrationResult
            stepLabel={stepLabel}
            values={applicationValues}
            handleChange={this.handleChange}
          />
        );
    }
  };

  handleChange = (input, e, lat = null, lon = null) => {
    let inputValue = "";
    if (input === "buyerBV" && lat && lon && e === null) {
      this.setState({
        latitude: lat,
        longitude: lon,
      });
    } else if (input === "buyerBV" && e && e?.length >= 0) {
      this.setState({
        buyerBV: e,
      });
    } else if (input == "farmerBV" && e && e?.length >= 0) {
      this.setState({
        farmerBV: e,
      });
    } else if (
      input === "wardId" &&
      e.target &&
      e.target.value &&
      administrationList &&
      administrationList.admins.length > 0
    ) {
      const { countyId, subCountyId } = this.state;
      const county = administrationList.admins.find(
        (county) => county.countyId === countyId
      );

      const subCounty = county.subCounties.find(
        (subCounty) => subCounty.subCountyId === subCountyId
      );

      const ward = subCounty.wards.find((w) => w.wardId === e.target.value);
      this.setState({
        wardId: ward.wardId,
        wardName: ward.wardName,
      });
    } else if (e && e.target && e.target.value) {
      inputValue = e.target.value;
      this.setState({ [input]: inputValue });
    } else if (e && e.target && e.target.innerText) {
      inputValue = e.target.innerText;
      this.setState({ [input]: inputValue });
    }
  };

  render() {
    const steps = this.getSteps();

    const {
      step,
      nationalId,
      firstName,
      givenName,
      otherName,
      gender,
      contactNo,
      emailAddress,
      userType,
      latitude,
      longitude,
      countyId,
      subCountyId,
      wardId,
      wardName,
      buyerBV,
      farmerBV,
      userName,
      password,
      submitted,
      hasError,
      errorText,
    } = this.state;
    
    const applicationValues = {
      nationalId,
      firstName,
      givenName,
      otherName,
      gender,
      contactNo,
      emailAddress,
      userType,
      latitude,
      longitude,
      countyId,
      subCountyId,
      wardId,
      wardName,
      buyerBV,
      farmerBV,
      userName,
      password,
      submitted,
    };

    let stepLabel = this.getStepContent(step, userType);

    const currentPage = this.getPage(
      step,
      applicationValues,
      stepLabel,
      userType
    );

    return (
      <div>
        <div className="form-container">
          <div className="menu-bar">
            <div className="logo-container"></div>
            <div className="title-container">
              <Typography component="h1" variant="h3">
                MAMIS Service Registration Form
              </Typography>
            </div>
          </div>
          <div className="form-steps-large">
            <div className="steps-container">
              <Stepper activeStep={step - 1}>
                {steps.map((label, index) => {
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
          </div>
          <div className="form-error">
          <FormControl error={hasError}>
            <FormHelperText hidden={!hasError} color="primary">
              {errorText}
            </FormHelperText>
          </FormControl>
          </div>
          <FormControl variant="outlined">
            <div className="form-body">{currentPage}</div>
            <div className="button-container">
              <br />
              <br />
              <Button
                variant="outlined"
                color="primary"
                disabled={step === 1}
                style={styles.backButton}
                onClick={this.previousStep}
              >
                Back
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={styles.button}
                onClick={this.nextStep}
              >
                Save and Continue
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
