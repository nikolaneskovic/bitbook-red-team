import React from "react";
import { Link } from "react-router-dom";

import FetchDataService from "../../services/fetchDataService";
import AuthenticationService from "../../services/authenticationService";
import RedirectionService from "../../services/redirectService";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMsg: "",
            errorMsgClientUserName: "",
            errorMsgClientPassword: ""
        };
        this.dataService = new FetchDataService();
        this.authenticationService = new AuthenticationService();
        this.redirectionService = new RedirectionService();


        this.usernameEntry = this.usernameEntry.bind(this);
        this.passwordEntry = this.passwordEntry.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickLogOut = this.handleClickLogOut.bind(this);

    }
    usernameEntry(event) {
        const usernameValue = event.target.value;
        this.setState({
            username: usernameValue
        });

    };

    passwordEntry(event) {
        const passwordValue = event.target.value;

        this.setState({
            password: passwordValue
        });
    };

    handleClick() {
        if(this.state.username === ""){
            this.setState({errorMsgClientUserName: "Empty username field."});
        }
        if(this.state.password === ""){
            this.setState({ errorMsgClientPassword: "Empty password field."});
        }

        const data = {
            username: this.state.username,
            password: this.state.password
        };

        this.authenticationService.logIn(data, (success) => {
            this.redirectionService.redirect("home");

        }, (errorMsg) => {
            this.setState({ errorMsg: errorMsg });
        });


    }

    handleClickLogOut() {
        this.authenticationService.logOut();
    }

    render() {
        return (
            <div className="row">

                <div className="col s12" id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Username </label> <br />
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.username} onChange={this.usernameEntry}
                            />
                        </div>
                        <div>{this.state.errorMsgClientUserName}</div>

                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Password </label><br />
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.password} onChange={this.passwordEntry}
                            />
                        </div>
                        <div>{this.state.errorMsgClientPassword}</div>

                    </div>
                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login" onClick={this.handleClick}>
                        Login
                    </button>< br />
                    <div>{this.state.errorMsg}</div>
                    <button className="btn btn-secondary btn-lg" type="button" name="action" id="login" onClick={this.handleClickLogOut}>
                        LogOut
                    </button>
                </div>
            </div>
        );

    }
}

export default LoginForm; 