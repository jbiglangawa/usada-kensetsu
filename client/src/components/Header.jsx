import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Alert} from 'reactstrap'
import '../css/Header.css'

const Header = props => {
    const [alertVisible, setAlertVisible] = useState(true)
    
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

            <Alert color="info" isOpen={alertVisible} toggle={() => setAlertVisible(false)} style={{marginBottom: 0}}>
                This is the first version of this website deployed 07/11/2020 5:00PM. I will develop additional fixes and functionalities. Please look forward to it! 
            </Alert>
        </div>
    )
}

export default Header