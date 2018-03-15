import { combineReducers } from 'redux';
import { login } from './login';
import { localization } from './localization/localization';

export default combineReducers({
    login,
    localization
});
