import { HEADER_KEY } from "./../constants";


class FetchDataService {
    constructor() { }



    createHeader() {
        return {
            "key": HEADER_KEY,
            "sessionId": sessionStorage.getItem("sessionId")
        };
    }

    get(url, handler, errorHandler) {
        var myInit = {
            method: "GET",
            headers: this.createHeader(),
        };


        fetch(url, myInit)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                handler(response);
            })
            .catch(error => errorHandler(error) || console.log(error));
    }


    post(url, handler, errorHandler) {
        var myInit = {
            method: "POST",
            headers: this.createHeader(),
        };
        fetch(url, myInit)
            .then((response) => response.json())
            .then(response => {
                handler(response);
            })
            .catch(error => errorHandler(error) || console.log(error));
    }

}

export default FetchDataService;