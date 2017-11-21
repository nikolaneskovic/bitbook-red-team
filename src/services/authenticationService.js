import FetchDataService from "./fetchDataService";
import default "./redirectService";

class AuthenticationService {
    constructor() {
        this.serviceData = new FetchDataService();
    }

    logIn(user) {

        let userLoginUrl = `/login`;
        this.serviceData.post(userLoginUrl, user, (data) => {

            sessionStorage.setItem("sessionId", data.sessionId);
        }, (error) => {
            return error;
        });
    }

    logOut() {
        sessionStorage.setItem("sessionId", null);
        redirect("/");
    }

    isUserAuthenticated(user) {
        let userLoginUrl = `/login`;
        this.serviceData.get(userLoginUrl, (data) => {
            if (user.email === data.email) {
                redirect('/profile');
            }
        });
    }
    register(user) {
        let userLoginUrl = `/register`;
        this.serviceData.post(userLoginUrl, user, (data) => {
            redirect("/");
        }, (error) => {
            return error;
        });
    }
}

export default AuthenticationService;