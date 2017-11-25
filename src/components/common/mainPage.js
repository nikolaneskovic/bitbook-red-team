import React from "react";
import Header from "./header";
import Footer from "./footer";
import ProfilePage from "../profile/profilePage";
import { Switch, Route } from "react-router-dom";
import People from "../peoplePage/people";
import UserProfile from "../peoplePage/userProfile";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path="/profile" component={ProfilePage} />
                    <Route path="/people" component={People} />
                    <Route path="/people/:id" component={UserProfile} />
                </Switch>
                
                <Footer />
            </div>
        );
    }
};

export default MainPage;