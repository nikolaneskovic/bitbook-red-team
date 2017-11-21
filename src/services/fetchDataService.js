import { HEADER_KEY } from "./../constants";
import { BASE_SERVICE_URL } from "./../constants";


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
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                handler(data);
            })
            .catch(error => errorHandler(error) || console.log(error));
    }

    post(path, data, handler, errorHandler) {
        const requestOptions = {
            method: "POST",
            headers: this.createHeader(),
            body: JSON.stringify(data)
        };
        fetch(`${BASE_SERVICE_URL}${path}`, requestOptions)
            .then((response) => response.json())
            .then(response => {
                handler(response);
            })
            .catch(error => errorHandler(error) || console.log(error));
    }

}

export default FetchDataService;