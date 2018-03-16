import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, promise))
    );
};