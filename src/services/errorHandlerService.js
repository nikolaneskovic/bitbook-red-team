
class ErrorHandlerService {
    constructor() { }

    emptyLoginInputFields(logInData, showMsg) {
        if(logInData.username===""){
            showMsg();
        }
        
    }





}


export default ErrorHandlerService;