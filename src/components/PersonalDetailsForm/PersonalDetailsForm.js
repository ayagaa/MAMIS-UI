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
    const { applicationValues, stepLabel } = this.props;
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
              //disabled={values.submitted}
              label="National ID"
              type="number"
              //onChange={(event) => handleChange("grade", event)}
              //defaultValue={values.grade}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              //disabled={values.submitted}
              label="First Name"
              //onChange={(event) => handleChange("grade", event)}
              //defaultValue={values.grade}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              //disabled={values.submitted}
              label="Given Name"
              //onChange={(event) => handleChange("grade", event)}
              //defaultValue={values.grade}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              //disabled={values.submitted}
              label="Other Name"
              //onChange={(event) => handleChange("grade", event)}
              //defaultValue={values.grade}
              variant="outlined"
            />
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="outlined-age-native-simple">
                Gender
              </InputLabel>
              <Select
                //disabled={values.submitted}
                autoFocus={false}
                label="Gender"
                //value={values.levelOfStudy}
                //onChange={(event) => handleChange("levelOfStudy", event)}
                inputProps={{
                  name: "levelOfStudy",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
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
                //disabled={values.submitted}
                autoFocus={false}
                label="User Type"
                //value={values.levelOfStudy}
                //onChange={(event) => handleChange("levelOfStudy", event)}
                inputProps={{
                  name: "levelOfStudy",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={1}>Farmer</option>
                <option value={2}>Buyer</option>
              </Select>
            </FormControl>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}
