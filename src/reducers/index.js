
export const FetchBooks = (state = {books: []}, action) => {
    switch (action.type) {
        case "BOOKS_LOADED":
            return {...state, books: action.payload};
        default: return state;
    }
}

export const FetchMagazines = (state = {magazines:[]}, action) => {
    switch (action.type) {
        case "MAGAZINES_LOADED":
            return {...state, magazines: action.payload};
        default: return state;
    }
}

export const FetchAuthors = (state = {authors: []}, action) => {
    switch (action.type) {
        case "AUTHORS_LOADED":
            const authorMap = (action.payload) ? 
            action.payload.reduce((total, elem) => {
                total[elem.email] = elem;
                return total;
            }, {}) : {};
            return {...state, authors: authorMap};
        default: return state;
    }
}
