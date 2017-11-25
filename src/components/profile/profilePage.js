import React from "react";
import DataService from "../../services/dataService";
import { IMAGE_PLACE_HOLDER } from "../../constants";
import EditProfile from "./editProfile";
import ReactModal from "react-modal";
import Profile from "../../entities/profileDTO";

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.imagePlaceHolder = IMAGE_PLACE_HOLDER;

        this.state = {
            name: "",
            avatarUrl: imagePlaceHolder,
            commentsCount: "",
            postsCount: "",
            about: "",
            aboutShort: "",
            profile: null
        };

        this.dataService = new DataService();

        this.afterUpdate = this.afterUpdate.bind(this);
    }

    componentDidMount() {

        this.dataService.getProfile((profile) => {
            console.log(users);
            this.setState({
                profile: profile
            });
        });
    }

    afterUpdate() {
        this.componentDidMount();
    }

    render() {
        if(!this.state.profile){
            return <h1>loading</h1>;
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">

                                <div className="col-lg-4 offset-4" id="leprofile">
                                    <img src={this.state.profile.avatarUrl} width="100px" id="slika" />
                                    <h3>{this.state.profile.name}</h3>

                                    <p>{this.state.profile.about}</p>
                                    <p><span id="comment">Comments count:</span>{this.state.profile.commentsCount}</p>
                                    <p><span id="post">Posts count:</span>{this.state.profile.postsCount}</p>
                                    <p>{this.state.profile.shortAbout}</p>

                                    <EditProfile profileObject={this.state.profile} profileUpdated={this.afterUpdate} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage; 