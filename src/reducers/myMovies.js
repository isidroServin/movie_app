const myMoviesReducer = (state = [], action) => {
    switch(action.type){
        case "ADD":
            return state = [...state, action.parametro];
        case "REMOVE":
            const arrFiltrered = state.filter( movie => { return movie.imdbID !== action.parametro} );
            return state = arrFiltrered;
        default:
            return state;
    }
}

export default myMoviesReducer;