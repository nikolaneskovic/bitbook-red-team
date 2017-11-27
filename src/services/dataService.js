import FetchDataService from "./fetchDataService";
import Profile from "../entities/profileDTO";
import UserDTO from "../entities/userDTO";
// import { error } from "util";

class DataService {
    constructor() {
        this.fetchDataService = new FetchDataService();
    }

    getProfile(profileDataHandler, errorHandler) {

        this.fetchDataService.get("profile", (response) => {
            const name = response.data.name;
            const avatarUrl = response.data.avatarUrl;
            const postsCount = response.data.postsCount;
            const commentsCount = response.data.commentsCount;
            const about = response.data.about;
            const aboutShort = response.data.aboutShort;
            const email = response.data.email;
            const userId = response.data.userId;

            const profile = new Profile(name, avatarUrl, about, aboutShort, email, postsCount, commentsCount, userId);
            profileDataHandler(profile);
        }, errorMsg => {
            errorHandler(errorMsg);
        });
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
        }, (errorMsg) => { errorHandler(errorMsg); });
    }

    getAllPosts(handleAllPosts, errorHandler) {
        this.fetchDataService.get("Posts", response => {
            let allPosts = response.data;
            handleAllPosts(allPosts);
        }, errorMsg => {
            errorHandler(errorMsg);
        });
    }

    getUserProfile(userId, usersDataHandler, errorHandler) {
        this.fetchDataService.get(`users/${userId}`, response => {
            usersDataHandler(response);
        }, errorMsg => {
            errorHandler(errorMsg);
        });
    }

    updateProfile(profileData, profileDataHandler, errorHandler) {
        this.fetchDataService.put("Profiles", profileData, (response) => {
            profileDataHandler(response);
        }, errorMsg => {
            errorHandler(errorMsg);
        });
    }


}

export default DataService; 