import React from "react";
import DataService from "../../services/dataService";
import { IMAGE_PLACE_HOLDER } from "../../constants";
import Profile from "../../entities/profileDTO";
import { Link } from "react-router-dom";

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
    }

    componentDidMount() {
        let peopleId = props.match.params.id;
        this.showPostData(peopleId);
    }

    render() {
     

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">

                                <div className="col-lg-4 offset-4" id="leprofile">
                                    <img src="" width="100px" id="slika" />
                                    <h3></h3>

                                    <p></p>
                                    <p>
                                        <Link to="#"><span id="comment">Comments count:</span></Link></p>
                                    <p><Link to="#"><span id="post">Posts count:</span></Link></p>
                                    <p></p>

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
    

};
export default UserProfile; 