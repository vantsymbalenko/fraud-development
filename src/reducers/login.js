import { LOGIN, INVALID_LOGIN } from '../constants/login';

export const login = (state = {isAuth : false}, action) => {
    console.log("action", action)
    switch (action.type){
        case LOGIN : {
            return {
                isAuth : true,
                data : {...action.payload}
            };
        }
        case INVALID_LOGIN : {
            return {
                isAuth : false,
                error : action.payload
            }
        }
        default : {
            return state;
        }
    }
}