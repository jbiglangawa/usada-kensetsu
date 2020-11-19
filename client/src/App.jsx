import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Desktop from './components/breakpoints/Desktop'
import Mobile from './components/breakpoints/Mobile'
import SideMenu from './components/SideMenu'
import Routes from './components/Routes'
import { useState } from 'react'
import { ButtonToggle } from 'reactstrap'
import { GiHamburgerMenu } from 'react-icons/gi'


const App = () => {

    const [sidebarOpen, toggleSidebar] = useState(false);

    return (
        <Router>
            <Mobile>
                <div style={{ zIndex: 10, position: 'absolute' }}>
                    <ButtonToggle value={sidebarOpen} onClick={() => toggleSidebar(prevState => !prevState)}><GiHamburgerMenu size="1.5em"></GiHamburgerMenu></ButtonToggle>
                </div>
                <SideMenu open={sidebarOpen}>
                    <Routes></Routes>
                </SideMenu>
            </Mobile>

            <Desktop>
                <Header />
                <Routes></Routes>
            </Desktop>

        </Router>
    )
}

export default App