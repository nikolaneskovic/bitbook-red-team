import React, { Component } from "react";
import PostDataService from "../../services/postDataService";
import PropTypes from "prop-types";

class DeleteButton extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.postDataService = new PostDataService();
    }
    handleClick(){
        // let postId = this.props.postObject.id;

        this.postDataService.deleteSinglePost();
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