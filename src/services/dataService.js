import FetchDataService from "./fetchDataService";
import Profile from "../entities/profileDTO";
import UserDTO from "../entities/userDTO";
import VideoDTO from "../entities/videoDTO";
import { PostDTO } from "../entities/postDTO";
import ImageDTO from "../entities/imageDTO";

class DataService {
    constructor() {
        this.fetchDataService = new FetchDataService();
    }

    getProfile(profileDataHandler, errorHandler) {

        this.fetchDataService.get("profile", (response) => {
            const person = response.data;
            const profile = new Profile(person.name, person.avatarUrl, person.about, person.aboutShort, person.email, person.postsCount, person.commentsCount, person.userId);
            profileDataHandler(profile);
        }, errorMsg => errorHandler(errorMsg));
    };

    getUsers(usersDataHandler, errorHandler) {
        this.fetchDataService.get("users", response => {
            const arrOfUsers = response.data;

            const listOfUsers = arrOfUsers.map(user => {
                let userProfile = new UserDTO(user.aboutShort, user.avatarUrl, user.id, user.lastPostDate, user.name);
                return userProfile;
            });

            usersDataHandler(listOfUsers);
        }, (errorMsg) => errorHandler(errorMsg));
    }

    getAllPosts(handleAllPosts, errorHandler) {
        this.fetchDataService.get("Posts", response => {
            let arrOfPosts = response.data;


            let allPosts = arrOfPosts.map(post => {
                if (post.type === "text") {
                    let postData = new PostDTO(post.text, post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum);
                    return postData;
                }
                if (post.type == "video") {
                    let videoData = new VideoDTO(post.videoUrl, post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum);
                    return videoData;
                }
                if (post.type == "image") {
                    let imageData = new ImageDTO(post.imageUrl, post.id, post.dateCreated, post.userId,  post.userDisplayName, post.type, post.commentsNum);
                    return imageData;
                }


            });
            handleAllPosts(allPosts);
        }, errorMsg => errorHandler(errorMsg));
    }

    getUserProfile(userId, usersDataHandler, errorHandler) {
        this.fetchDataService.get(`users/${userId}`, response => {
            usersDataHandler(response);
        }, errorMsg => errorHandler(errorMsg));
    }

    updateProfile(profileData, profileDataHandler, errorHandler) {
        this.fetchDataService.put("Profiles", profileData, (response) => {
            profileDataHandler(response);
        }, errorMsg => errorHandler(errorMsg));
    }
}

export default DataService; 