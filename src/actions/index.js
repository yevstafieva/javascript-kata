import  * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const fetchBooks = (filename) => {
	return (dispatch) => {
        return axios.get(filename)
            .then(response => {
                const books = Papa.parse(response.data, {
                    header: true,
                    delimiter: ';'
                });
                dispatch({
                    type: "BOOKS_LOADED",
                    payload: books
                })
            })
		
		
    };
}
export const fetchMagazines = (filename) => {
	return (dispatch) => {
        return axios.get(filename)
            .then(response => {
                const magazines = Papa.parse(response.data, {
                    header: true,
                    delimiter: ';'
                });
                dispatch({
                    type: "MAGAZINES_LOADED",
                    payload: magazines
                })
            })
		
		
    };
}

export const fetchAuthors = (filename) => {
	return (dispatch) => {
        return axios.get(filename)
            .then(response => {
                const authors = Papa.parse(response.data, {
                    header: true,
                    delimiter: ';'
                });
                dispatch({
                    type: "AUTHORS_LOADED",
                    payload: authors
                })
            })
		
		
    };
}

