import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { FormControl, Button } from "@material-ui/core";

import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import CredentialsForm from "../CredentialsForm/CredentialsForm";
import RegistrationResult from "../RegistrationResult/RegistrationResult";

import "./../../styles/FormStyles.css";

const styles = {
  button: {
    margin: 15,
  },
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
      userType: "",
      buyerLatitude: null,
      buyerLongitude: null,
      buyerWardId: null,
      buyerBvId: null,
      buyerPurchasePower: 0.0,
      buyerUM: "",
      farmerBV: [],
    };
  }

  getSteps = () => {
    return [
      "Personal Details",
      "Contact Details",
      "Business Details",
      "Login Details",
      "Confirmation",
      "Sign in"
    ];
  };

  getStepContent = (step, userType) => {
    switch (step) {
      case 1:
        return "Enter your personal details";
      case 2:
        return "Enter your contact details";
      case 3:
        if (userType === 0) {
          return "Please enter details of your farming enterprise and select your farm location";
        }
        return "Please enter your prefered item to purchase";
      case 4:
        return "Please enter a password for your new account";
        case 5:
          return "Confirmation";
    }
  };

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
      buyerLatitude,
      buyerLongitude,
      buyerWardId,
      buyerBvId,
      buyerPurchasePower,
      buyerUM,
      farmerBV,
    } = this.state;

    if(step < 5){
      this.setState({
        step: step + 1,
      });
    }else{
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
      buyerLatitude: buyerLatitude,
      buyerLongitude: buyerLongitude,
      buyerWardId: buyerWardId,
      buyerBvId: buyerBvId,
      buyerPurchasePower: buyerPurchasePower,
      buyerUM: buyerUM,
      farmerBV: farmerBV,
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
          />
        );
      case 2:
        return (
          <ContactDetailsForm
            stepLabel={stepLabel}
            values={applicationValues}
          />
        );
      case 3:
        if (userType === 0) {
          return <div>Step 3 Farmer</div>;
        }
        return <div>Step 3 Buyer</div>;
      case 4:
        return (
          <CredentialsForm stepLabel={stepLabel} values={applicationValues} />
        );
        case 5:
          return <RegistrationResult stepLabel={stepLabel} values={applicationValues} />
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
      buyerLatitude,
      buyerLongitude,
      buyerWardId,
      buyerBvId,
      buyerPurchasePower,
      buyerUM,
      farmerBV,
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
      buyerLatitude,
      buyerLongitude,
      buyerWardId,
      buyerBvId,
      buyerPurchasePower,
      buyerUM,
      farmerBV,
    };

    let stepLabel = this.getStepContent(step);

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
                MIS Service Registration Form
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
          <FormControl variant="outlined">
            <div className="form-body">{currentPage}</div>
            <div className="button-container">
              <br />
              <br />
              <Button
                // type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                disabled={step === 1}
                style={styles.backButton}
                onClick={this.previousStep}
                // className={classes.submit}
              >
                Back
              </Button>
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                style={styles.button}
                onClick={this.nextStep}
                // className={classes.submit}
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
