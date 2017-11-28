import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Video extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link to="/feed/video"><div className="row videoPost">
                <iframe width="900" height="400" src={this.props.post.videoUrl} frameBorder="0" allowFullScreen></iframe>
                <p className="col-4">{this.props.post.userDisplayName}</p>
                <p className="col-4 typeOfPost">Comments: {this.props.post.commentsNum}</p>
            </div></Link>
        );
    }
}

Video.propTypes = {
    post: PropTypes.object,
    

};
export default Video;