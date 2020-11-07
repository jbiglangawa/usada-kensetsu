import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Header.css'

const Header = props => {
    
    return (
        <div className="header-wrapper">
            <div className="header">
                <Link to="/">
                    <img
                        alt="header-logo" 
                        src={process.env.PUBLIC_URL + "/header-logo.png"} 
                        className="header-logo" />
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/projects">PROJECTS</Link></li>
                        <li><Link to="/our-team">OUR TEAM</Link></li>
                        <li><Link to="/credits">CREDITS</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="orange-highlight" />
        </div>
    )
}

export default Header