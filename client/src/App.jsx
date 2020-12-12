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
        // Every 3 seconds check if the Sleepy Heroku instance is up already
        const interval = setInterval(async () => {
            fetch(`${process.env.REACT_APP_API_URL}wake-up`).then(res => {
                if (res.ok) {
                    setLoading(false)
                    clearInterval(interval)
                }
            })

        }, 3000)
    }, [])

    return (
        <Router>
            {loading ?
            <LoadingScreen />
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