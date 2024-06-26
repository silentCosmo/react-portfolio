import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css'

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false)
    }, [location]);
    return (
        <div className='navbar' id={expandNavbar ? "open" : "close"}>

            <div className="toggleButton">

                <button id='fb' onClick={() => {
                    setExpandNavbar((prev) => !prev)
                }}><MenuIcon /></button>
            </div>

            <div className="links">

                <Link to="/">Home</Link>
                <a href="/#skills">Skills</a>
                <Link to="/projects">Projects</Link>
                {/* <Link to="/experience">Experience</Link> */}
                <Link to="/contact">Contact</Link>
            </div>
            <div className='grade'></div>
        </div>
    )
}

export default Navbar