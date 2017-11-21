import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        

        this.emailEntry = this.emailEntry.bind(this);
        this.passwordEntry = this.passwordEntry.bind(this);
    }
    emailEntry(event) {
        const value = event.target.value;
        this.setState({
            email: value
        });

    };

    passwordEntry(event) {
        const value = event.target.value;
        this.setState({
            password: value
        });
    };

    render() {
        return (
            <div className="row">
            
                <form className="col s12" id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Email </label> <br /> 
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.email} onChange={this.emailEntry}
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
                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login">
                    Login
                    </button>
                </form>
            </div>
        );

    }
}

export default LoginForm; 