import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {FetchBooks, FetchMagazines, FetchAuthors} from '../reducers';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            books: FetchBooks,
            magazines: FetchMagazines,
            authors: FetchAuthors
        }),
        { 
            books: [],
            magazines: [],
            authors: []
        },
        applyMiddleware(logger, thunk)
    )
    return store;
};