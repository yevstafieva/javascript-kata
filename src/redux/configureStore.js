import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {FetchPublications, FetchAuthors, Filter} from '../reducers';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            publications: FetchPublications,
            authors: FetchAuthors,
            filter: Filter
        }),
        { 
            publications: { all: []},
            authors: {},
            filter: {}
        },
        applyMiddleware(logger, thunk)
    )
    return store;
};