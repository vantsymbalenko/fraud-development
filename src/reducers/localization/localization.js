import { eng } from './en.js';
import { ar } from './ar.js';
import { SET_LANGUAGE } from "../../constants/language";

export const localization = (state = {...eng, language : 'eng'}, action) => {
  switch (action.type) {
    case SET_LANGUAGE:{
      if(state.language === 'eng'){
        return {
          language : 'ar',
          ...ar
        }
      }else{
        return {
          ...eng
        }
      }
    }
    default:{
      return state;
    }
  }
}
