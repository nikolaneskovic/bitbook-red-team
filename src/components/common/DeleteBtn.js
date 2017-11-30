import React, { Component } from "react";
import PropTypes from "prop-types";

import PostDataService from "../../services/postDataService";
import RedirectionService from "../../services/redirectService";

class DeleteButton extends Component {
    constructor(props) {
        super(props);

        this.postDataService = new PostDataService();
        this.redirectionService = new RedirectionService();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {

        let postId = this.props.postObject.id;
        this.postDataService.deleteSinglePost(postId, response => {
           
        }, error => {
            // console.log(error);
        });

    }
    render() {
        return (
            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={this.handleClick}>x</button>
        );
    }
}

DeleteButton.propTypes = {
    postObject: PropTypes.object

};
export default DeleteButton;