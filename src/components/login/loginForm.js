import React from "react";

import FetchDataService from "../../services/fetchDataService";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.dataService = new FetchDataService();
        

        this.usernameEntry = this.usernameEntry.bind(this);
        this.passwordEntry = this.passwordEntry.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }
    usernameEntry(event) {
        const value = event.target.value;
        this.setState({
            username: value
        });

    };

    passwordEntry(event) {
        const value = event.target.value;
        this.setState({
            password: value
        });
    };

    handleClick(){
        const data = {
            username: this.state.username,
            password: this.state.password
        };

        this.dataService.post("/login",data, (response)=>{console.log(response);});

    }


    render() {
        return (
            <div className="row">
            
                <form className="col s12" id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Username </label> <br /> 
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.username} onChange={this.usernameEntry}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Password </label><br />
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.password} onChange={this.passwordEntry}
                            />
                        </div>
                    </div>
                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login" onClick= {this.handleClick}>
                    Login
                    </button>
                </form>
            </div>
        );

    }
}

export default LoginForm; 