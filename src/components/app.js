import React from "react";
import LoginPage from "./login/loginPage";
import LoginForm from "./login/loginForm";
import RegisterForm from "./login/registerForm";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./common/mainPage";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div>
                <Switch>
                    <Route exact path="/" component={LoginPage} />   
                    <Route path="/home" component={MainPage}/>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={LoginPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
