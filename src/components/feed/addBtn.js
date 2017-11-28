import React from "react";

import PropTypes from "prop-types";


class AddBtn extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(type) {
        this.props.handleOpen(type);

    }



    render() {
        return (

            <div className="btn-group row">
                <button type="button" className="btn btn-danger">Add</button>
                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only"></span>
                </button>
                <div className="dropdown-menu">
                    <button name="image" className="dropdown-item" onClick={() => this.handleClick("image")}>Image</button>
                    <button name="post" className="dropdown-item" onClick={() => this.handleClick("post")}>Post</button>
                    <button name="video" className="dropdown-item" onClick={() => this.handleClick("video")}>Video</button>

                </div>

            </div>);
    }
}

AddBtn.propTypes = {
    //addVideoOnPage: PropTypes.func,
    handleOpen: PropTypes.func

};
export default AddBtn;