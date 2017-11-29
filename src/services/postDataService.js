import FetchDataService from "../services/fetchDataService";
import { error } from "util";
import VideoDTO from "../entities/videoDTO";
import CommentDTO from "../entities/commentDTO";
import ImageDTO from "../entities/imageDTO";
import PostDTO from "../entities/postDTO";

class PostDataService {
    constructor() {
        this.fetchDataService = new FetchDataService();
    }

    // getAllPosts(handleAllPosts, errorHandler) {

    //     this.fetchDataService.get("Posts", response => {

    //         let arrOfPosts = response.data;
    //         let allPosts = arrOfPosts.map(post => {

    //             let postData = new PostDTO(post.dateCreated, post.id, post.text, post.type, post.userDisplayName, post.userId);
    //             return postData;
    //         });
    //         handleAllPosts(allPosts);
    //     }, errorMsg => errorHandler(errorMsg));
    // }

    postVideo(videoUrl, videoDataHandler, errorHandler) {

        this.fetchDataService.post("VideoPosts", { videoUrl: videoUrl }, (response) => {
            videoDataHandler(response);
        }, error => {
            errorHandler(error);
        });
    }
    postImage(newImage, imageDataHandler, errorHandler) {
        this.fetchDataService.post("ImagePosts", { imageUrl: newImage }, (response) => {
            imageDataHandler(response);
        }), error => {
            errorHandler(error);
        };
    }
    postText(newText, textDataHandler, errorHandler) {
        this.fetchDataService.post("TextPosts", { text: newText }, response => {
            textDataHandler(response);
        }, error => {
            errorHandler(error);
        });
    }

    postComment(commentObj, commentDataHandler, errorHandler) {

        this.fetchDataService.post("Comments", commentObj, response => {
            commentDataHandler(response);
        }, error => {
            errorHandler(error);
        });
    }

    getAllComments(postId, handleComments, handleError) {
        this.fetchDataService.get(`Comments?postId=${postId}`, response => {

            let listOfComments = response.data;

            listOfComments = listOfComments.map(comment => {
                let commentData = new CommentDTO(comment.id, comment.dateCreated, comment.body, comment.postId, comment.authorName, comment.authorId);
                return commentData;
            });
            handleComments(listOfComments);
        }, error => {
            handleError(error);
        });
    }

    getSingleVideoPost(videoId, usersDataHandler, errorHandler) {
        this.fetchDataService.get(`VideoPosts/${videoId}`, response => {
            let videoData = response.data;
            let singleVideo = new VideoDTO(videoData.videoUrl, videoData.id, videoData.dateCreated, videoData.userId, videoData.userDisplayName, videoData.type, videoData.commentsNum);
            usersDataHandler(singleVideo);
        }, errorMsg => errorHandler(errorMsg));
    }

    getSingleImagePost(imageId, usersDataHandler, errorHandler) {
        this.fetchDataService.get(`ImagePosts/${imageId}`, response => {
            let imageData = response.data;
            let singleImage = new ImageDTO(imageData.imageUrl, imageData.id, imageData.dateCreated, imageData.userId, imageData.userDisplayName, imageData.type, imageData.commentsNum);
            usersDataHandler(singleImage);
        }, errorMsg => errorHandler(errorMsg));
    }

    getSingleTextPost(textId, dataHandler, errorHandler) {
        this.fetchDataService.get(`TextPosts/${textId}`, response => {
            let textPostData = response.data;
            console.table(textPostData);
            let singleTextPost = new PostDTO(textPostData);
            console.table(singleTextPost);
            dataHandler(singleTextPost);
        }, errorMsg => errorHandler(errorMsg));
    }

    deleteSinglePost(postId, postObject, dataHandler, errorHandler) {
        this.fetchDataService.delete(`Posts/${postId}`, postObject, response => {
            dataHandler(response);
        }, error => {
            errorHandler(error);
        });
    }
}

export default PostDataService;