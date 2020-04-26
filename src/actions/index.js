import  * as ActionTypes from './ActionTypes';
import axios from 'axios';
import Papa from 'papaparse';

const parserConfig = {
    skipEmptyLines: true,
    header: true,
    delimiter: ';'
}

export const fetchBooks = (filename) => {
	return (dispatch) => {
        return axios.get(filename)
            .then(response => {
                const books = Papa.parse(response.data, parserConfig);
                dispatch({
                    type: "BOOKS_LOADED",
                    payload: books.data
                })
            })
		
		
    };
}
export const fetchMagazines = (filename) => {
	return (dispatch) => {
        return axios.get(filename)
            .then(response => {
                const magazines = Papa.parse(response.data, parserConfig);
                dispatch({
                    type: "MAGAZINES_LOADED",
                    payload: magazines.data
                })
            })
		
		
    };
}

export const fetchAuthors = (filename) => {
	return (dispatch) => {
        return axios.get(filename)
            .then(response => {
                const authors = Papa.parse(response.data, parserConfig);
                dispatch({
                    type: "AUTHORS_LOADED",
                    payload: authors.data
                })
            })
		
		
    };
}

// export const searchItem = (searchRequest) => {
//     return (dispatch) => dispatch({
//         type: "SEARCH_REQUEST",
//         payload: searchRequest
//     })
// }

export const filterISBN = (filter) => {
    return (dispatch) => dispatch({
        type: "FILTER_BY_ISBN",
        payload: filter
    })
}

export const filterAuthor = (filter) => {
    return (dispatch) => dispatch({
        type: "FILTER_BY_AUTHORS",
        payload: filter
    })
}