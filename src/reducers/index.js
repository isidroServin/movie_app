import counter from './counter';
import log from './isLogged';
import movie from './movie';
import myMoviesReducer from './myMovies';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    counter, // o bien counter: counter --->> es lo mismo por que se llaman iguales.
    isLogged: log,
    movie,
    myMovies: myMoviesReducer
})

export default reducers;