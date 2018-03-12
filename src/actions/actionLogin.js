import { LOGIN, INVALID_LOGIN } from '../constants/login';

export const login = (username, password) => {
    console.log("user name dasdasd", username);
    console.log("user password dasdasd", password);
    if(username === "johnDoe@box.com" && password === "1"){
        return {
            type: LOGIN
        }
    }else{
        return {
            type: INVALID_LOGIN
        }
    }
};