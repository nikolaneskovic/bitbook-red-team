import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import ProfilePage from "../profile/profilePage";
import People from "../peoplePage/people";
import UserProfile from "../peoplePage/userProfile";
import FeedPage from "../feed/feedPage";
import VideoPage from "../feed/singlePage/VideoPage";
import ImagePage from "../feed/singlePage/ImagePage";
import TextPage from "../feed/singlePage/TextPage";


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
                    <Route exact path="/people" component={People} />
                    <Route path="/people/:id" component={UserProfile} />
                    <Route exact path="/feed" component={FeedPage} />
                    <Route path="/feed/video/:id" component={VideoPage} />
                    <Route path="/feed/image/:id" component={ImagePage} />
                    <Route path="/feed/text/:id" component={TextPage} />
                </Switch>

                <Footer />
            </div>
        );
    }
};

export default MainPage;