import React from "react";
import AddPost from "./postModalBox";
import AddVideo from "./videoModalBox";
import AddImage from "./imageModalBox";
import Modal from "react-modal";

class AddBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedType: "" 
        };
        this.bindFunction();
    }

    bindFunction() {
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
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

    getPostTypeComponent() {
        if (this.state.selectedType === "image") {
            return <AddImage closeModal={this.handleCloseModal} />;
        }

        if (this.state.selectedType === "post") {
            return <AddPost  closeModal={this.handleCloseModal}/>;
        }

        return <AddVideo closeModal={this.handleCloseModal}/>;
    }

    render() {
        return (

            <div className="btn-group row">
                <button type="button" className="btn btn-danger">Add</button>
                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only"></span>
                </button>
                <div className="dropdown-menu">
                    <button name="image" className="dropdown-item" onClick={this.handleOpenModal}>Image</button>
                    <button name="post" className="dropdown-item" onClick={this.handleOpenModal}>Post</button>
                    <button name="video" className="dropdown-item" onClick={this.handleOpenModal}>Video</button>

                    

                </div>
                <Modal
                    className="Modal__Bootstrap modal-dialog"
                    closeTimeoutMS={150}
                    isOpen={this.state.showModal}
                >
                    {this.getPostTypeComponent()}
                </Modal>
            </div>);
    }
}

export default AddBtn;