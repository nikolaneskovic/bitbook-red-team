import React from "react";
import PropTypes from "prop-types";

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
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object

};
export default Post;