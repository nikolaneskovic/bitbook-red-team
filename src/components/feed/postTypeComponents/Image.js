import React from "react";
import PropTypes from "prop-types";

class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row videoPost">
                <img src={this.props.post.imageUrl} width="100%"/>
                <p className="col-4">{this.props.post.userDisplayName}</p>
                <p className="col-4 typeOfPost">Comments: {this.props.post.commentsNum}</p>
            </div>
        );
    }
}

Image.propTypes = {
    post: PropTypes.object,


};
export default Image;