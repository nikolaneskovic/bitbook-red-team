import React from "react";
import PropTypes from "prop-types";
import PostDataService from "../../services/postDataService";
import RedirectionService from "../../services/redirectService";
import { WSAEINVALIDPROVIDER } from "constants";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.postDataService = new PostDataService();
        this.redirectionService = new RedirectionService();
    }
    handleChange(event) {
        this.setState({ body: event.target.value });

    }
    handleClick() {
        let commentObj = {
            body: this.state.body,
            postId: this.props.postId
        };

        this.postDataService.postComment(commentObj, response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
        this.redirectionService.redirect(`feed/${this.props.type}/${this.props.postId}`);

    }


    render() {
        return (
            <div className="container">
                <div className="row videoPost">
                    <input type="text" value={this.state.body} onChange={this.handleChange} />
                    <button className="commentBtn" onClick={this.handleClick}>Comment</button>
                </div>
            </div>

        );
    };
}

Comments.propTypes = {
    postId: PropTypes.number,
    type: PropTypes.string
};
export default Comments;