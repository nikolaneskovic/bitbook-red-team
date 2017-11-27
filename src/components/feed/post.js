import React from "react";
import PropTypes from "prop-types";

class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row feedPost">
                <p className='col-12'>{this.props.text}</p>
                <p className="col-4">{this.props.userDisplayName}</p>
                <p className="col-4 typeOfPost">{this.props.type}</p>
            </div>
        );
    }
}

Post.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    userDisplayName: PropTypes.string

};
export default Post;