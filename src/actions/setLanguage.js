import { SET_LANGUAGE } from "../constants/language";

export const setLanguage = (language) => {
    return{
        type : SET_LANGUAGE,
        payload : language
    }
};