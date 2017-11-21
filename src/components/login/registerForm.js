import React from "react";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };

        this.emailEntry = this.emailEntry.bind(this);
        this.passwordEntry = this.passwordEntry.bind(this);
        this.nameEntry = this.nameEntry.bind(this);

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
    nameEntry(event) {
        const value = event.target.value;
        this.setState({
            name: value
        });
    };



    onRegisterClick(){
        let registration = this.state.registration;
        
    }


    render() {
        return (
            <div className="row">
                <form className="col s12" id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Name</label><br />
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.name} onChange={this.nameEntry}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Email</label><br />
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.email} onChange={this.emailEntry}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label> Password</label><br />
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.password} onChange={this.passwordEntry}
                            />
                        </div>
                    </div>

                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login" onClick={this.onRegisterClick}>
                        Register Now
                    </button>
                </form>
            </div >
        );

    }
}

export default RegisterForm; 