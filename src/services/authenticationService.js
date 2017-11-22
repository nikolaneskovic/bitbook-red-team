import FetchDataService from "./fetchDataService";
import RedirectionService from "./redirectService";
import ErrorHandlerService from "./errorHandlerService";

class AuthenticationService {
    constructor() {
        this.serviceData = new FetchDataService();
        this.redirectService = new RedirectionService();
        this.errorHandlerService = new ErrorHandlerService();
    }

    logIn(user, showError) {


        let userLoginUrl = "/login";
        this.serviceData.post(userLoginUrl, user, (response) => {
            sessionStorage.setItem("sessionId", response.data.sessionId);

        }, (error) => {
            showError(error);
        });
    }

    logOut() {
        sessionStorage.removeItem("sessionId");
        this.redirectService.redirect("/");
    }

    isUserAuthenticated() {
        return !!localStorage.getItem("sessionId");
    }
    register(user, registerError) {
        let userRegisterUrl = "/register";
        this.serviceData.post(userRegisterUrl, user, (response) => {
            // console.log(response);
            this.redirectService.redirect("/");
        }, (error) => {
            registerError(error);
        });
    }
}

export default AuthenticationService;