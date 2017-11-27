import React from "react";
import { Link } from "react-router-dom";

import FetchDataService from "../../services/fetchDataService";
import AuthenticationService from "../../services/authenticationService";
import RedirectionService from "../../services/redirectService";
import HandleErrorService from "../../services/handleError";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            emptyUsername: "",
            emptyEmail: "",
            passLength: "",
            invalidEmail: "",
            errorMsgServer: ""
        };
        this.importClasses();
        this.bindFunction();
    }

    importClasses() {
        this.dataService = new FetchDataService();
        this.authenticationService = new AuthenticationService();
        this.redirectionService = new RedirectionService();
        this.handleErrorService = new HandleErrorService();
    }

    bindFunction() {
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateLogInForm = this.validateLogInForm.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });

    }

    validateLogInForm() {
        const data = {
            username: this.state.username,
            password: this.state.password
        };

        const emptyUsername = this.handleErrorService.validateEmptyField(data.username);
        const emptyEmail = this.handleErrorService.validateEmptyField(data.email);
        const passLength = this.handleErrorService.validateInputLength(data.password, 1);
        const invalidEmail = this.handleErrorService.validateEmail(data.username);

        this.setState({
            emptyEmail: emptyEmail,
            emptyUsername: emptyUsername,
            passLength: passLength,
            invalidEmail: invalidEmail,

        });

        if (emptyEmail || emptyUsername || passLength || invalidEmail) {
            return false;
        }
        return true;

    }

    handleClick() {

        const data = {
            username: this.state.username,
            password: this.state.password
        };
        const isValid = this.validateLogInForm();

        if (!isValid) {
            return;
        };

        this.authenticationService.logIn(data, (success) => {
            this.redirectionService.redirect("/");

        }, (errorMsg) => {
            this.setState({ errorMsgServer: errorMsg });
        });

    }

    render() {
        return (
            <div className="row">

                <div className="col s12" id="form">
                    <div className="row">

                        <div className="input-field col s6">
                            <label className="login-form"> Username </label> <br />
                            <input id="input_text" type="text" data-length="25" name="username"
                                value={this.state.username} onChange={this.handleChange} onBlur={this.validateLogInForm}
                            /><span className='errorField'>{this.state.invalidEmail}</span>
                        </div><br />
                        <div>{this.state.invalidEmail}</div>


                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Password </label><br />
                            <input id="input_text" type="password" data-length="25" name="password"
                                value={this.state.password} onChange={this.handleChange} onBlur={this.validateLogInForm}
                            /> <span className='errorField'>{this.state.passLength}</span>
                        </div>
                    </div>
                    <div>{this.state.emptyInput}</div>
                    <div>{this.state.errorMsgServer}</div>

                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login" onClick={this.handleClick}>
                        Login
                    </button>< br />

                </div>
            </div>
        );

    }
}

export default LoginForm; 