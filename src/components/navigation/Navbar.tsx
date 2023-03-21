import React from "react";
import {Link} from "react-router-dom";
import '../components.css'

export const Navbar:React.FC = () => {

    return(
        <div className='navbar-wrapper'>
            <Link to={'/'} className='nav-link'>Home</Link>
            <Link to={'/about'} className='nav-link'>About</Link>
        </div>
    )
}