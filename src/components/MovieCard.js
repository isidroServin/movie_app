import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addMyMovie } from './../actions/myMovie';

function MovieCard() {

    const movie = useSelector(state => state.movie);

    const dispatch = useDispatch();

    const buttonStyle = {backgroundColor: "#003049", color: "white"}
    return (
            <div className='container mt-2'>
                <div className='row justify-content-center'>
                    <div className="card col-md-8 col-sm-12 cardShadow">
                        <div className="row g-0">
                            <div className="col-xs-12 col-sm-6 col-md-4 p-2 justify-content-center">
                                <img src={movie.Poster} className=" img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-8 p-2">
                                <div className="card-body" >
                                    <h4 className="card-title">{movie.Title}</h4>
                                    <p className="card-text">{movie.Plot}</p>
                                    <p className="card-text"><small >Meta Score: {movie.Metascore}</small></p>
                                    <p className="card-text"><small >Actors: {movie.Actors}</small></p>
                                    <p className="card-text"><small >Duration: {movie.Runtime}</small></p>
                                    <p className="card-text"><small >Genre: {movie.Genre}</small></p>
                                    { 
                                        movie.Title !== 'Movie not found' &&  <button className='btn' onClick={() => dispatch(addMyMovie(movie))} style={buttonStyle}>Add to My movies</button> 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MovieCard
