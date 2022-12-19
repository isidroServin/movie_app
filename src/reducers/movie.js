const movieReducer = (state = {}, action) => {
    switch(action.type){
        case "REFRESH":
            return state = action.parametro;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export default movieReducer;