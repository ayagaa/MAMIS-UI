import React, { Component } from "react";

import {
  Grid,
  InputLabel,
  MenuItem,
  Typography,
  CssBaseline,
  Container,
  Box,
  FormControl,
  FormHelperText,
  Button,
  Select,
  TextField,
} from "@material-ui/core";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

export default class PersonalDetailsForm extends Component {
  render() {
    const {stepLabel, values, handleChange } = this.props;
    const genderItems = ["Female", "Male", "Transgender"];
    return (
      <React.Fragment>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            {stepLabel}
          </Typography>
          <br />
          <form>
            <TextField
              disabled={values.submitted}
              label="National ID"
              type="number"
              onChange={(event) => handleChange("nationalId", event)}
              defaultValue={values.nationalId}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={values.submitted}
              label="First Name"
              onChange={(event) => handleChange("firstName", event)}
              defaultValue={values.firstName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={values.submitted}
              label="Given Name"
              onChange={(event) => handleChange("givenName", event)}
              defaultValue={values.givenName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={values.submitted}
              label="Other Name"
              onChange={(event) => handleChange("otherName", event)}
              defaultValue={values.otherName}
              variant="outlined"
            />
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="outlined-age-native-simple">
                Gender
              </InputLabel>
              <Select
                disabled={values.submitted}
                autoFocus={false}
                label="Gender"
                value={values.gender}
                onChange={(event) => handleChange("gender", event)}
                inputProps={{
                  name: "gender",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={"Female"}>Female</option>
                <option value={"Male"}>Male</option>
                <option value={"Trans-gender"}>Trans-gender</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="outlined-age-native-simple">
                User Type
              </InputLabel>
              <Select
                disabled={values.submitted}
                autoFocus={false}
                label="User Type"
                value={values.userType}
                onChange={(event) => handleChange("userType", event)}
                inputProps={{
                  name: "userType",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={1}>Farmer</option>
                <option value={2}>Trader</option>
              </Select>
            </FormControl>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}
