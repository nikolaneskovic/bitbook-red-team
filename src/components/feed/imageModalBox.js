import React from "react";
import PropTypes from "prop-types";


class AddImage extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.props.closeModal();
    }
    render() {

        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" onClick={this.handleClick}>
                        <span aria-hidden="true">&times;</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <h4 className="modal-title">Add image</h4>
                </div>
                <div className="modal-body modalBox">
                    <h3>New image</h3>
                    <textarea></textarea>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={this.handleClick}>Close</button>
                    {/* <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>Save changes</button> */}
                </div>
            </div>

        );
    }
}
AddImage.propTypes = {
    closeModal: PropTypes.func,

};
export default AddImage;