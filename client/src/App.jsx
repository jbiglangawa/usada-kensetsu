import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Desktop from './components/breakpoints/Desktop'
import Mobile from './components/breakpoints/Mobile'
import SideMenu from './components/SideMenu'
import Routes from './components/Routes'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`/wake-up`).then(res => {
            if (res.ok) {
                setLoading(false)
            }
        })
    }, [])

    return (
        <Router>
            {loading ?
            <div className="screen-wrapper">
                <LoadingScreen />
            </div>
            :
            <>
            <Mobile>
                <SideMenu>
                    <Routes></Routes>
                </SideMenu>
            </Mobile>
            <Desktop>
                <Header />
                <Routes></Routes>
            </Desktop>
            </>
            }
        </Router>
    )
}

export default App