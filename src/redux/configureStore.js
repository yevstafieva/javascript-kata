import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            books: null,
            magazines: null,
            authors: null
        }),
        { 
            books: [],
            magazines: [],
            authors: [],
            searchResults: [] 
        },
        applyMiddleware(logger, thunk)
    )
    return store;
};