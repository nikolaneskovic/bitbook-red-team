import Modal from "react-modal";
import React from "react";
import PropTypes from "prop-types";




class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        };
        // this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    // handleCloseModal() {
    //     this.setState({ showModal: false });
    // }

    render() {

        return (
            // <div><button type="button" className="btn btn-warning pink" onClick={this.handleOpenModal}>Edit Profile</button>

            <Modal
                className="Modal__Bootstrap modal-dialog"
                closeTimeoutMS={150}
                isOpen={this.props.showModal}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={this.handleCloseModal}>
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <h4 className="modal-title">Add post</h4>
                    </div>
                    <div className="modal-body modalBox">
                        <h3>New post</h3>
                        <textarea></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={this.handleCloseModal}>Close</button>
                        {/* <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>Save changes</button> */}
                    </div>
                </div>
            </Modal>

        );
    }
}
AddPost.propTypes = {
    showModal: PropTypes.bool,

};
export default AddPost;