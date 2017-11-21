import default from "./fetchDataService";
import {BASE_SERVICE_URL} from "./../constants";

class AuthenticationService {
    
    constructor(){
        this.serviceData = new FetchDataService();
    }
    
    logIn(user){
        let userLoginUrl = `${BASE_SERVICE_URL}/login`;
        this.serviceData.post(userLoginUrl,(data)=>{
            
        },(error)=>{});

        // sessionStorage.setItem({}}, );

    }
    logOut(){

    }
    isUserAuthentic(){}
    register(){}
}

export default AuthenticationService;