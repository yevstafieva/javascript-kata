
export const FetchPublications = (state = {all: []}, action) => {
    switch (action.type) {
        case "BOOKS_LOADED":
            return {...state, all: state.all.concat(action.payload.map(e => ({...e, type: "book"})))};
        case "MAGAZINES_LOADED":
            return {...state, all: state.all.concat(action.payload.map(e => ({...e, type: "magazine"})))};
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
