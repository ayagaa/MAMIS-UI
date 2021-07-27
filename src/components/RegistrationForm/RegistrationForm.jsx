import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { FormControl, FormHelperText, Button } from "@material-ui/core";

import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import BuyerDetails from "../BusinessDetails/BuyerDetails";
import FarmerDetails from "../BusinessDetails/FarmerDetails";
import CredentialsForm from "../CredentialsForm/CredentialsForm";
import RegistrationResult from "../RegistrationResult/RegistrationResult";
import { googleTranslate } from "../../utils/googleTranslate";

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
const resetLabels = {
  nationalId: "National ID",
  firstName: "First Name",
  givenName: "Given Name",
  otherName: "Other Name",
  gender: "Gender",
  female: "Female",
  male: "Male",
  transGender: "Trans-gender",
  userType: "User Type",
  farmer: "Farmer",
  trader: "Trader",
  valueChain: "Value Chain",
  variety: "Variety",
  purchasePower: "Purchase Power",
  productPreference: "Product preference",
  preferenceInstruction:
    " Please select the produce and the variety you prefer",
  varietyPreferenceInstruction:
    "Please select the produce and the variety you have on your farm(s).",
  unitofMeasure: "Unit of Measure",
  close: "Close",
  addProduct: "Add Product",
  selectMapInstructions: "Please select your location from the map.",
  selectFarmInstruction:
    "Please select from the map where your farms are located. Then you will be prompted to select what farming you practice in that location.",
  phoneNumber: "Phone Number",
  emailAddress: "Email Address",
  county: "County",
  subCounty: "Sub-county",
  ward: "Ward",
  passwordError: "Please ensure the passwords are the same",
  newPassword: "New Password",
  confirmPassword: "Confirm Password",
  failureResult: `The registration was not successfull. Please check the
  details you entered. There could be duplicate entries in
  national ID. The error is:`,
  successResult: `You have been successfully registered in the MIS service.
  Please login with username and password you entered. Your
  user name is:`,
  stepPersonalDetails: "Personal Details",
  stepContactDetails: "Contact Details",
  stepBusinessDetails: "Business Details",
  stepLoginDetails: "Login Details",
  stepConfirmation: "Confirmation",
  stepSignin: "Sign in",
  stepContentPersonalDetails: "Enter your personal details",
  stepContentContactDetails: "Enter your contact details",
  stepContentBusinessDetails1: "Your Farm(s) Details",
  stepContentBusinessDetails2: "Business details",
  stepContentPassword: "Please enter a password for your new account",
  stepContentConfirmation: "Confirmation",
  errorCheckMessage:
    "Please ensure that you have entered all the required fields",
  mainFormTitle: "MAMIS Service Registration Form",
  mainBackButton: "Back",
  mainSaveButton: "Save and continue",
};

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
      checked: false,
      labels: {
        nationalId: "National ID",
        firstName: "First Name",
        givenName: "Given Name",
        otherName: "Other Name",
        gender: "Gender",
        female: "Female",
        male: "Male",
        transGender: "Trans-gender",
        userType: "User Type",
        farmer: "Farmer",
        trader: "Trader",
        valueChain: "Value Chain",
        variety: "Variety",
        purchasePower: "Purchase Power",
        productPreference: "Product preference",
        preferenceInstruction:
          " Please select the produce and the variety you prefer",
        varietyPreferenceInstruction:
          "Please select the produce and the variety you have on your farm(s).",
        unitofMeasure: "Unit of Measure",
        close: "Close",
        addProduct: "Add Product",
        selectMapInstructions: "Please select your location from the map.",
        selectFarmInstruction:
          "Please select from the map where your farms are located. Then you will be prompted to select what farming you practice in that location.",
        phoneNumber: "Phone Number",
        emailAddress: "Email Address",
        county: "County",
        subCounty: "Sub-county",
        ward: "Ward",
        passwordError: "Please ensure the passwords are the same",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        failureResult: `The registration was not successfull. Please check the
        details you entered. There could be duplicate entries in
        national ID. The error is:`,
        successResult: `You have been successfully registered in the MIS service.
        Please login with username and password you entered. Your
        user name is:`,
        stepPersonalDetails: "Personal Details",
        stepContactDetails: "Contact Details",
        stepBusinessDetails: "Business Details",
        stepLoginDetails: "Login Details",
        stepConfirmation: "Confirmation",
        stepSignin: "Sign in",
        stepContentPersonalDetails: "Enter your personal details",
        stepContentContactDetails: "Enter your contact details",
        stepContentBusinessDetails1: "Your Farm(s) Details",
        stepContentBusinessDetails2: "Business details",
        stepContentPassword: "Please enter a password for your new account",
        stepContentConfirmation: "Confirmation",
        errorCheckMessage:
          "Please ensure that you have entered all the required fields",
        mainFormTitle: "MAMIS Service Registration Form",
        mainBackButton: "Back",
        mainSaveButton: "Save and continue",
      },
    };
  }

  toggleChecked = () => {
    const { labels, checked } = this.state;
    let changeLabels = labels;
    let tempLabels = labels;
    if (checked && window.language === "en") {
      window.language = "sw";
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
        checked: true,
        labels: changeLabels,
      });
      this.setState({
        checked: true,
        labels: changeLabels,
      });

    } else if (checked && window.language === "sw") {

      window.language = "en";
      this.setState({
        labels: tempLabels,
        checked: false,
      });
      this.setState({
        labels: tempLabels,
        checked: false,
      });
    } else if (!checked && window.language === "en") {
      window.language = "sw";

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
        checked: true,
        labels: changeLabels,
      });
      this.setState({
        checked: true,
        labels: changeLabels,
      });
    } else if (checked && window.language !== "sw") {

      window.language = "en";
      this.setState({
        labels: tempLabels,
        checked: false,
      });
      this.setState({
        labels: tempLabels,
        checked: false,
      });
    }
  };

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
    const { labels, checked } = this.state;
    let changeLabels = labels;
    let tempLabels = labels;
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
    }
  }

  getSteps = () => {
    const { labels } = this.state;
    return [
      labels.stepPersonalDetails,
      labels.stepContactDetails,
      labels.stepBusinessDetails,
      labels.stepLoginDetails,
      labels.stepConfirmation,
      labels.stepSignin,
    ];
  };

  getStepContent = (step, userType) => {
    const { labels } = this.state;
    switch (step) {
      case 1:
        return labels.stepContentPersonalDetails;
      case 2:
        return labels.stepContentContactDetails;
      case 3:
        if (userType === 1) {
          return labels.stepContentBusinessDetails1;
        }
        return labels.stepContentBusinessDetails2;
      case 4:
        return labels.stepContentPassword;
      case 5:
        return labels.stepContentConfirmation;
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
      labels,
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
      labels,
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
          errorText: labels.errorCheckMessage,
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
      labels: labels,
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
      labels,
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
      labels,
    };

    let stepLabel = this.getStepContent(step, userType);

    const currentPage = this.getPage(
      step,
      applicationValues,
      stepLabel,
      userType
    );

    const { checked } = this.state;

    return (
      <div>
        <div className="form-container">
          <div className="menu-bar">
            <div className="logo-container"></div>
            <div className="title-container">
              <div className="language-switch">
                <FormGroup>
                  <FormControlLabel
                    disabled={true}
                    control={
                      <Switch checked={checked} onChange={this.toggleChecked} />
                    }
                    label="Swahili"
                  />
                </FormGroup>
              </div>
              <Typography component="h1" variant="h3">
                {labels.mainFormTitle}
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
                {labels.mainBackButton}
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={styles.button}
                onClick={this.nextStep}
              >
                {labels.mainSaveButton}
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
