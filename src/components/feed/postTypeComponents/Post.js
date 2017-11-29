import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row feedPost">
                <p className='col-12'>{this.props.post.text}</p>
                <p className="col-4">{this.props.post.userDisplayName}</p>
                <p className="col-4 typeOfPost">{this.props.post.type}</p>
                <p className="col-4 linkBtn"><Link to={`/feed/text/${this.props.post.id}`}><img className="linkImg" src="../../../img/linkBtn.png" width="50px" height="50px" /></Link></p>
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object

};
export default Post;