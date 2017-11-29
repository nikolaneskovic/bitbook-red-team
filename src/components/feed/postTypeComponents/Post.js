import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteButton from "../../common/DeleteBtn";



class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row videoPost">
                <div className="col-9">
                    <p>{this.props.post.text}</p>
                </div>
                <div className="col-1 offset-2">
                    <DeleteButton postObject = {this.props.post}/>
                </div>
                <div className="col-12">
                    <div className="borderTop row">
                        <p className="col-4 typeOfPost">Author: {this.props.post.userDisplayName}</p>
                        <p className="col-4 typeOfPost">Comments: {this.props.post.commentsNum}</p>
                        <p className="col-4 linkBtn"><Link to={`/feed/text/${this.props.post.id}`}><img className="linkImg" src="../../../img/linkBtn.png" width="50px" height="50px" /></Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object

};
export default Post;