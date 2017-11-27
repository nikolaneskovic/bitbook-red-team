import React from "react";
import PropTypes from "prop-types";

class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>

            <p>{this.props.text}</p>
        </div>);
    }
}

Post.propTypes = {
    text: PropTypes.string
    
};
export default Post;