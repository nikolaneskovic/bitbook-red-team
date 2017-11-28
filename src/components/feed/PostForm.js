import Modal from "react-modal";
import AddPost from "./postModalBox";
import AddVideo from "./videoModalBox";
import AddImage from "./imageModalBox";
import React from "react";
import PropTypes from "prop-types";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.getModalBoxComponent = this.getModalBoxComponent.bind(this);
    }
    handleCloseModal() {
        this.setState({ showModal: false });
    }


    handleOpenModal(event) {
        this.setState({
            showModal: true,
            selectedType: event.target.name
        });
    }


    getModalBoxComponent() {
        if (this.state.selectedType === "image") {
            return <AddImage closeModal={this.handleCloseModal} />;
        }

        if (this.state.selectedType === "post") {
            return <AddPost closeModal={this.handleCloseModal} />;
        }

        return <AddVideo closeModal={this.handleCloseModal} showVideoPost={this.addVideo} />;
    }

    render() {
        return (<Modal
            className="Modal__Bootstrap modal-dialog"
            closeTimeoutMS={150}
            isOpen={this.state.showModal}
        >
            {this.getModalBoxComponent()}

        </Modal>);
    }

}

export default PostForm;