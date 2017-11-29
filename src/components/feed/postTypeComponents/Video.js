import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Video extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row videoPost">
                <iframe width="900" height="400" src={this.props.post.videoUrl} frameBorder="0" allowFullScreen></iframe>
                <p className="col-4 typeOfPost">{this.props.post.userDisplayName}</p>
                <p className="col-4 typeOfPost">Comments: {this.props.post.commentsNum}</p>
                <p className="col-4 linkBtn"><Link to={`/feed/video/${this.props.post.id}`}><img className="linkImg"src="../../../img/linkBtn.png" width="50px" height="50px" /></Link></p>
            </div>
        );
    }
}

Video.propTypes = {
    post: PropTypes.object,
    

};
export default Video;