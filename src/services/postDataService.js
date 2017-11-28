import FetchDataService from "../services/fetchDataService";
import { error } from "util";

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
            console.log(response);
            videoDataHandler(response);
        }, error => {
            errorHandler(error);
        });
    }
    postImage(newImage, imageDataHandler, errorHandler){
        this.fetchDataService.post("ImagePosts", {imageUrl:newImage}, (response)=>{
            console.log(response);
            imageDataHandler(response);
        }), error=>{
            errorHandler(error);
        };
    }
    postText(newText, textDataHandler, errorHandler){
        this.fetchDataService.post("TextPosts", {text:newText}, response=>{
            textDataHandler(response);
            console.log("text blog ", response);
        }, error=>{
            errorHandler(error);
        });
    }

}

export default PostDataService;