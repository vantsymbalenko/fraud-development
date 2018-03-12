import { LOGIN } from '../constants/login';

export const login = (state = {isAuth : false}, action) => {
    switch (action.type){
        case LOGIN : {
            return {
                isAuth : true,
                name : "John",
                lastName : "Snow",
                data : "some else data"
            };
        }
        default : {
            return state;
        }
    }
}