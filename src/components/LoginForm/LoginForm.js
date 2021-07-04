import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import {authenticateUser} from "../../store/epic/userAuthEpic";

import "../../styles/FormStyles.css";

const initialFormData = Object.freeze({
  userEmail: "",
  userPassword: "",
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        mamis.co.ke
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginForm(props) {
  let history = useHistory();
  let location = useLocation();
  const classes = useStyles();

  const [formData, updateFormData] = React.useState(initialFormData);

  let { from } = location.state || { from: { pathname: "/" } };

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const [authUser, authDispatch] = window.store.authUser;
    const loginDetails = {
      userNo: '',
      userId: formData.userEmail,
      password: formData.userPassword,
      userType: 0,
      errorMessage: ''
    }
    authenticateUser(loginDetails, authDispatch)
    .then((response) => {
      const [authUser] = window.store.authUser;
      if(authUser.authUser && authUser.authUser.user && authUser.authUser.user.userType){
        console.log(authUser.authUser.user.userType);
        if(authUser.authUser.user.userType === 1){
          history.push("/farmer-view");
        }else if(authUser.authUser.user.userType === 2){
          history.push("/buyer-view");
        }
      }else{

      }
    });
  };

  const register = (e) => {
    history.push("/registration-form", {
      state: {
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
      }
    });
  };

  const submit = (e) => {
    e.preventDefault();
    history.push("/application-form");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <div className="cdf-image"></div> */}
        <Typography component="h1" variant="h7">
          Machakos Agricultural Market Information System
        </Typography>
        <div className="login-container">
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userEmail"
              label="Email Address"
              name="userEmail"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userPassword"
              label="Password"
              type="password"
              id="userPassword"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={register}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default LoginForm;
