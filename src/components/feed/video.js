import React from "react";
import PropTypes from "prop-types";

class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/08XqNxVgfMU"
                frameBorder="0" allowFullScreen></iframe>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object

};
export default Post;