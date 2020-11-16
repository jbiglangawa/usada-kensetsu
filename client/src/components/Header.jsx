import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useScrollPosition from '@react-hook/window-scroll'
import { useSpring, animated } from 'react-spring'
import '../css/Header.css'

const Header = () => {
    const [isBelowFold, setIsBelowFold] = useState(false)
    const scrollYPosition = useScrollPosition(60)
    const routePath = useLocation()

    const headerGradientColor = 'linear-gradient(90deg, rgba(255,203,111,1) 0%, rgba(47,213,150,1) 21%, rgba(12,193,245,1) 54%, rgba(111, 209, 255, 1) 92%)'
    const headerTransparentColor = 'linear-gradient(90deg, rgba(255,203,111,0) 0%, rgba(47,213,150,0) 21%, rgba(12,193,245,0) 54%, rgba(111, 209, 255, 0) 92%)'

    const headerColor = useSpring(isBelowFold ?
        { background: headerGradientColor, height: '10vh', borderBottomStyle: 'solid' } :
        { background: headerTransparentColor, height: '90vh', borderBottomStyle: 'none' })
    const logo = useSpring(isBelowFold ? { top: '5%', left: '15%' } : { top: '1%', left: '50%', width: '150px', marginLeft: '-75px' })
    const navPosition = useSpring(isBelowFold ? { color: '#FFF', bottom: '35%' } : { color: '#787878', bottom: '0%' })

    useEffect(() => {
        if (routePath.pathname === "/") {
            if (scrollYPosition > 100) {
                if (!isBelowFold) {
                    setIsBelowFold(true)
                }
            } else {
                if (isBelowFold) {
                    setIsBelowFold(false)
                }
            }
        } else {
            if (!isBelowFold) {
                setIsBelowFold(true)
            }
        }
    }, [scrollYPosition, routePath])

    return (
        <div className="header-wrapper" style={isBelowFold ? { height: '10vh', zIndex: "3" } : { height: '0', zIndex: "1" }}>
            <animated.div className="header" style={headerColor}>
                <animated.div className="a-logo-wrapper" style={logo}>
                    <Link to="/" className="header-wrapper-img">
                        <img
                            alt="header-logo"
                            src={process.env.PUBLIC_URL + "/header-logo.png"}
                            className="header-logo" />
                    </Link>
                </animated.div>
                <animated.nav style={navPosition}>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/projects">PROJECTS</Link></li>
                        <li><Link to="/our-team">OUR TEAM</Link></li>
                        <li><Link to="/credits">CREDITS</Link></li>
                    </ul>
                </animated.nav>
            </animated.div>
        </div>
    )
}

export default Header