import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {FetchPublications, FetchAuthors} from '../reducers';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            publications: FetchPublications,
            authors: FetchAuthors
        }),
        { 
            publications: { all: []},
            authors: {}
        },
        applyMiddleware(logger, thunk)
    )
    return store;
};