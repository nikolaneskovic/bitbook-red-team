import React from "react";
import PropTypes from "prop-types";

class SingleComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row commentSection">
                <div className="col-3 ">
                    <img />
                </div>
                <div className="col-9">
                    <p ><strong>{this.props.comment.authorName}</strong>{this.props.comment.body}</p>
                    <p>Last post at: {new Date(this.props.comment.dateCreated).toLocaleTimeString()}</p>
                </div>

            </div>

        );
    };
}
SingleComment.propTypes = {
    comment: PropTypes.object,

};
export default SingleComment;