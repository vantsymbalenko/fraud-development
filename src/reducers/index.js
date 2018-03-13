import { combineReducers } from 'redux';
import { login } from './login';
import { language } from './language';

export default combineReducers({
    login,
    language
});