import { SET_LANGUAGE } from "../constants/language";

export const language = (state = { language : "ENGLISH"}, action) => {
    switch (action.type){
        case SET_LANGUAGE : {
            return {
                language : action.payload
            }
        }
        default : {
            return state
        }
    }
};