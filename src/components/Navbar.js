import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    
    const bcColor = { "backgroundColor" : "#fdf0d5"} 

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light" style={bcColor}>
                <a className="navbar-brand" href='/'>Movie App <i className="bi bi-film"></i></a>
                <Link className="nav-item nav-link active" to="/">Home</Link>
                <Link className="nav-item nav-link active" to="/MyMovies">My movies</Link>
            </nav>
        </div>
    )
}

export default Navbar
