import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row videoPost">
                <img className="postImage" src={this.props.post.imageUrl} width="100%" />
                <p className="col-4">{this.props.post.userDisplayName}</p>
                <p className="col-4 typeOfPost">Comments: {this.props.post.commentsNum}</p>
                <p className="col-4 linkBtn"><Link to={`/feed/image/${this.props.post.id}`}><img className="linkImg" src="../../../img/linkBtn.png" width="50px" height="50px" /></Link></p>

            </div>
        );
    }
}

Image.propTypes = {
    post: PropTypes.object,


};
export default Image;