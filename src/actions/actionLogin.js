import { LOGIN, INVALID_LOGIN } from '../constants/login';

export const login = async (username, password) => {
    const requestLink = "http://159.65.118.245:81/api/v1/oauth";

    const headers = {
        "Accept": "application/json, text/plain, */*",
        "Authorization":"Basic ZDgyZjgyMDA0Mzg0Yzg4MzU0NTQ2MDMyNzdiZWQ0MTA6KzArfl5kYjQ5K1I5V1glc2RTfi1Fc1pySyEndVZlO0g=",
        "Content-type":"application/json",
    };

    const data = {
        grant_type: "password",
        username: username,
        password: password
    };

    const settings = {
        method : "POST",
        mode : "cors",
        headers : headers,
        body: JSON.stringify(data)
    };
    try{
        let response =await (await  fetch( requestLink, settings)).json();
        console.log("response", response);
        if(response.access_token){
            return {
                type: LOGIN,
                payload : response
            }
        }else{
            return {
                type: INVALID_LOGIN,
                payload : response.error_description
            }
        }
    }catch(err){
        console.log("sorry but something wrong", err);
        return {
            type: INVALID_LOGIN,
            payload : err.message
        }
    }



};