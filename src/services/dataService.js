import FetchDataService from "./fetchDataService";
import Profile from "../entities/profileDTO";
import UserDTO from "../entities/userDTO";
import { PostDTO } from "../entities/postDTO";
// import { error } from "util";

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
            console.log(response.data);
            const arrOfUsers = response.data;

            const listOfUsers = arrOfUsers.map(user => {
                let userProfile = new UserDTO(user.aboutShort, user.avatarUrl, user.id, user.lastPostDate, user.name);
                return userProfile;
            });

            console.log(listOfUsers);
            usersDataHandler(listOfUsers);
        }, (errorMsg) => errorHandler(errorMsg));
    }

    getAllPosts(handleAllPosts, errorHandler) {
        this.fetchDataService.get("Posts", response => {
            let arrOfPosts = response.data;
            let allPosts = arrOfPosts.map(post => {
                let postData = new PostDTO(post.dateCreated, post.id, post.text, post.type, post.userDisplayName, post.userId);
                return postData;
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