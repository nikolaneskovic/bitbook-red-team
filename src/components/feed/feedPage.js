import React from "react";
import Modal from "react-modal";

import DataService from "../../services/dataService";
import PostDataService from "../../services/postDataService";
import RedirectionService from "../../services/redirectService";

import AddBtn from "./addBtn";
//import { PostForm } from "./PostForm";
import AddPost from "./modalBox/postModalBox";
import AddVideo from "./modalBox/videoModalBox";
import AddImage from "./modalBox/imageModalBox";
import AllPosts from "./AllPosts";

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            showModal: false,
            errorMsgServer: "",
            selectedType: ""
        };

        this.dataService = new DataService();
        this.postDataService = new PostDataService();
        this.redirectionService = new RedirectionService();


        this.addVideoOnFeedPage = this.addVideoOnFeedPage.bind(this);
        this.getModalBoxComponent = this.getModalBoxComponent.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.addImageOnFeedPage = this.addImageOnFeedPage.bind(this);
        this.addTextPostOnFeedPage = this.addTextPostOnFeedPage.bind(this);
    }
    componentDidMount() {

        this.dataService.getAllPosts((posts) => {
            this.setState({ allPosts: posts });
        }, error => this.setState({ errorMsgServer: error }));

    }

    addVideoOnFeedPage(newVideo) {
        this.postDataService.postVideo(newVideo, (response) => {
            console.log(response);
        }, error => {
            console.log(error);
        });

    }
    addImageOnFeedPage(newImage) {
        this.postDataService.postImage(newImage, (response) => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }

    addTextPostOnFeedPage(newText) {
        this.postDataService.postText(newText, (response) => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        this.redirectionService.redirect("/feed");

    }

    handleOpenModal(type) {
        this.setState({
            showModal: true,
            selectedType: type
        });
    }

    getModalBoxComponent() {
        if (this.state.selectedType === "image") {
            return <AddImage closeModal={this.handleCloseModal} handleImageUrl={this.addImageOnFeedPage} />;
        }

        if (this.state.selectedType === "post") {
            return <AddPost closeModal={this.handleCloseModal} handleTextBlog={this.addTextPostOnFeedPage} />;
        }

        return <AddVideo closeModal={this.handleCloseModal} showVideoPost={this.addVideoOnFeedPage} />;

    }
    render() {
        return (<div className='container'>
            <AddBtn handleOpen={this.handleOpenModal} />

            <Modal
                className="Modal__Bootstrap modal-dialog"
                isOpen={this.state.showModal}
            >
                {this.getModalBoxComponent()}

            </Modal>

            <AllPosts posts={this.state.allPosts} />
            <div>{this.state.errorMsgServer}</div>

        </div>);
    }
}

export default FeedPage;