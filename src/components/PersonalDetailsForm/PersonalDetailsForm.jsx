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
              label={values.labels.nationalId}
              type="number"
              onChange={(event) => handleChange("nationalId", event)}
              defaultValue={values.nationalId}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={values.submitted}
              label={values.labels.firstName}
              onChange={(event) => handleChange("firstName", event)}
              defaultValue={values.firstName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={values.submitted}
              label={values.labels.givenName}
              onChange={(event) => handleChange("givenName", event)}
              defaultValue={values.givenName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={values.submitted}
              label={values.labels.otherName}
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
                label={values.labels.gender}
                value={values.gender}
                onChange={(event) => handleChange("gender", event)}
                inputProps={{
                  name: "gender",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={"Female"}>{values.labels.female}</option>
                <option value={"Male"}>{values.labels.male}</option>
                <option value={"Trans-gender"}>{values.labels.transGender}</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="outlined-age-native-simple">
              {values.labels.userType}
              </InputLabel>
              <Select
                disabled={values.submitted}
                autoFocus={false}
                label={values.labels.userType}
                value={values.userType}
                onChange={(event) => handleChange("userType", event)}
                inputProps={{
                  name: "userType",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={1}>{values.labels.farmer}</option>
                <option value={2}>{values.labels.trader}</option>
              </Select>
            </FormControl>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}
