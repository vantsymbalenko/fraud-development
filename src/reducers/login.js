import { LOGIN, INVALID_LOGIN } from '../constants/login';

export const login = (state = {isAuth : false}, action) => {
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
};

// http://159.65.118.245:81/api/v1/admin/tables