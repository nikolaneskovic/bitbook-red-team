import React from "react";
import DataService from "../../services/dataService";
import { IMAGE_PLACE_HOLDER } from "../../constants";
import Profile from "../../entities/profileDTO";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.imagePlaceHolder = IMAGE_PLACE_HOLDER;

        this.state = {
            name: "",
            avatarUrl: "",
            commentsCount: "",
            postsCount: "",
            about: "",
            aboutShort: "",
            profile: null
        };

        this.dataService = new DataService();
        this.showUserData = this.showUserData.bind(this);
    }

    componentDidMount() {
        let peopleId = this.props.match.params.id;
        this.showUserData(peopleId);
    }

    showUserData(peopleId){
        this.dataService.getUserProfile(peopleId, (response)=>{
            console.log(response.data);
            let user = response.data;
            this.setState({
                name: user.name,
                avatarUrl: user.avatarUrl,
                commentsCount:  user.commentsCount,
                postsCount:  user.postsCount,
                about:  user.about,
                aboutShort:  user.aboutShort,
    
            });
        });

    }

    render() {
     

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">

                                <div className="col-lg-4 offset-4" id="leprofile">
                                    <img src={this.state.avatarUrl} width="100px" id="slika" />
                                    <h3>{this.state.name}</h3>

                                    <p>{this.state.about}</p>
                                    <p>
                                        <Link to="#"><span id="comment">Comments count:</span>{this.state.commentsCount}</Link></p>
                                    <p><Link to="#"><span id="post">Posts count:</span>{this.state.postsCount}</Link></p>
                                    <p>{this.state.aboutShort}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
UserProfile.propTypes = {
    match: PropTypes.object
    
};
export default UserProfile; 