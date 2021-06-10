import React, { Component } from 'react';

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

export default class ContactDetailsForm extends Component {
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
              label="Phone Number"
              //onChange={(event) => handleChange("grade", event)}
              //defaultValue={values.grade}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              //disabled={values.submitted}
              label="Email Address"
              //onChange={(event) => handleChange("grade", event)}
              //defaultValue={values.grade}
              variant="outlined"
            />
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="outlined-age-native-simple">
                County
              </InputLabel>
              <Select
                //disabled={values.submitted}
                autoFocus={false}
                label="County"
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
                Sub-county
              </InputLabel>
              <Select
                //disabled={values.submitted}
                autoFocus={false}
                label="Sub-county"
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
                Ward
              </InputLabel>
              <Select
                //disabled={values.submitted}
                autoFocus={false}
                label="Ward"
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
          </form>
        </Container>
      </React.Fragment>
    );
  }
}
