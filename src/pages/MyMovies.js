import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMyMovie } from '../actions/myMovie'
import Navbar from '../components/Navbar'


function MyMovies() {

    const myMovies = useSelector(state => state.myMovies);

    const dispatch = useDispatch();

    const buttonStyle = {backgroundColor: "#003049", color: "white"}

    return (
        <div className='main'>
            <Navbar/>
            <div className='row justify-content-center'>
                <h3>My movies</h3>
            </div>
            { myMovies.map( myMovie => {
                return (
                    <div className='container mt-2' >
                    <div className='row justify-content-center' key= {myMovie.imdbID} >
                        <div className="card col-md-8 col-sm-12 cardShadow" >
                            <div className='row g-0'  >
                                <div className="col-xs-12 col-sm-6 col-md-4 p-2 justify-content-center">
                                <img src={myMovie.Poster} className="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-8 p-2">
                                    <div className="card-body">
                                        <h5 className="card-title">{myMovie.Title}</h5>
                                        <p className="card-text">{myMovie.Plot}</p>
                                        <p className="card-text"><small className="text-muted">Meta Score: {myMovie.Metascore}</small></p>
                                        <p className="card-text"><small className="text-muted">Actors: {myMovie.Actors}</small></p>
                                        <p className="card-text"><small className="text-muted">Duration: {myMovie.Runtime}</small></p>
                                        <p className="card-text"><small className="text-muted">Genre: {myMovie.Genre}</small></p>
                                        <button className='btn' style={buttonStyle} onClick={() => dispatch(deleteMyMovie(myMovie.imdbID))} type='button'>Remove</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MyMovies
