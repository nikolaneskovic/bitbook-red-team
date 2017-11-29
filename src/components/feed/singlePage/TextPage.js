import React from "react";
import PostDataService from "../../../services/postDataService";
import PropTypes from "prop-types";
import Comments from "./../comments";
import ListOfComments from "./../ListOfComments";
import { posix } from "path";

class TextPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            id: "",
            dateCreated: "",
            userId: "",
            userDisplayName: "",
            type: "",
            commentsNum: "",
        };

        this.textId = parseInt(this.props.match.params.id);

        this.postDataService = new PostDataService();
    }

    componentDidMount() {
        this.showVideoData(this.textId);
    }

    showVideoData(textId) {
        this.postDataService.getSingleTextPost(textId, post => {
            this.setState({
                text: post.text,
                id: post.text,
                dateCreated: post.dateCreated,
                userId: post.userId,
                userDisplayName: post.userDisplayName,
                type: post.type,
                commentsNum: post.commentsNum
            });
        }, error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row videoPost">
                    <p>{this.state.text}</p>
                    <ListOfComments postId={this.textId} />
                </div>
                <Comments postId={this.textId} />
            </div>
        );
    };
}

TextPost.propTypes = {
    match: PropTypes.object

};
export default TextPost;