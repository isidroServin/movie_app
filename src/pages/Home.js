import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { refresca } from '../actions/movie'
import  Navbar  from '../components/Navbar';
import MovieCard from '../components/MovieCard';


function Home() {
    
    const dispatch = useDispatch();

    const [movieInput, setMovieInput] = useState("");

    const getInput = (event) =>{
        setMovieInput(event.target.value)
    }

    const movieNotFound = {
        Title: 'Movie not found',
        Actors: 'N/A',
        Genre: 'N/A',
        Plot: '',
        Metascore: 'N/A',
        Runtime: 'N/A',
        Poster: '...'
    }
        
    const searchMovie = (event) => {
        event.preventDefault();
        const options = {method: 'GET'};
        fetch(`http://www.omdbapi.com/?apikey=bbb5c57c&t=${movieInput}`, options)
        .then(response => response.json())
        .then(response => {
            response.Error ? dispatch(refresca(movieNotFound)) : dispatch(refresca(response))
        })
        .catch(err => console.error(err));

        setMovieInput("")
    }
    
    const buttonStyle = {backgroundColor: "#003049", color: "white"}
    
    return (
        <div className='flex main' >
            <Navbar/>
            <div className='container mt-3'>
                <div className='row justify-content-md-center'>
                    <form className="form-inline my-2 my-lg-0" >
                        <label htmlFor='search'>Type the name of a movie: </label>
                        <input name='search' value={movieInput} className="form-control mr-sm-2" type="search" onChange={getInput}  placeholder="Search" aria-label="Search"></input>
                        <button className='form-control btn mr-sm-2 xs-6' style={buttonStyle} onClick={searchMovie} type="submit">Search</button>
                    </form>
                </div>
            </div>
            <MovieCard/>
            
        </div>
    )
}

export default Home
