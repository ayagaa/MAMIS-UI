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

export default class CredentialsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hasError: false,
        errorText: "",
    };
  }

  componentDidMount() {
    const { values } = this.props;
  }

  checkPassword(event) {
      const passwordInput = document.getElementById("userPassword");
      let samePasswordCheck = event.target.value !== passwordInput.value;
      this.setState({
        hasError: samePasswordCheck,
        errorText: samePasswordCheck? "Please ensure the passwords are the same": "",
    });
  }

  render() {
    const { values, stepLabel, handleChange } = this.props;
    const {hasError, errorText} = this.state;
    return (
      <React.Fragment>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            {stepLabel}
          </Typography>
          <br />
          <form>
            <div className="credentials-container">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                defaultValue={values.password}
                name="userPassword"
                label="New Password"
                type="password"
                id="userPassword"
                autoComplete="current-password"
                onChange={(event) => handleChange("password", event)}
              />
              <br />
              <br />
              <TextField
                variant="outlined"
                margin="normal"
                error={hasError}
                helperText={errorText}
                required
                fullWidth
                defaultValue={values.password}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                onChange={(event) => this.checkPassword(event)}
              />
            </div>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}
