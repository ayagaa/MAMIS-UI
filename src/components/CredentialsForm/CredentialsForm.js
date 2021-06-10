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

export default class CredentialsForm extends Component {
    render() {
        const { applicationValues, stepLabel } = this.props;
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
                                name="userPassword"
                                label="New Password"
                                type="password"
                                id="userPassword"
                                autoComplete="current-password"
                            // onChange={handleChange}
                            />
                            <br />
                            <br />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="userPassword"
                                label="Confirm Password"
                                type="password"
                                id="userPassword"
                                autoComplete="current-password"
                            // onChange={handleChange}
                            />
                        </div>

                    </form>
                </Container>
            </React.Fragment>
        )
    }
}
