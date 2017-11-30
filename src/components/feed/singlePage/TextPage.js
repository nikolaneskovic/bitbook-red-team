import React from "react";
import PostDataService from "../../../services/postDataService";
import PropTypes from "prop-types";
import Comments from "./../comments";
import ListOfComments from "./../ListOfComments";

class TextPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
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
                post 
            });
        }, error => {
            console.log("ERR ", error);
        });
    }

    render() {
        console.table(this.state.post);
        return (
            <div className="container">
                <div className="row videoPost">
                    <p>{this.state.post.text}</p>
                    <p className="col-12"><strong>Author:</strong> {this.state.userDisplayName}</p>
                    <ListOfComments postId={this.textId} />
                </div>
                <Comments postId={this.textId} type={this.state.post.type}/>
            </div>
        );
    };
}

TextPost.propTypes = {
    match: PropTypes.object

};
export default TextPost;