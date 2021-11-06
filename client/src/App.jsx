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
import ElementTooltip from './components/ElementTooltip'
import ExternalLink from './components/ExternalLink'

const App = () => {
    /*
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
    */

    return (
        /*
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
        */
       <div className="center-wrapper">
            <a href="https://www.pixiv.net/artworks/87367412" target="_blank" className="cover-wrap">
                <img className="cover-photo" src={"https://i.imgur.com/80XKUgd.jpg"} title="https://www.pixiv.net/artworks/87367412" />
            </a>

            <div className="message">
                <img src="https://imgur.com/mirkEol.png" width="200px" />
                <h1>Announcement</h1>

                <h3 className="wrap-1">
                    The website <a href="https://usada-kensetsu.online">https://usada-kensetsu.online</a> will now 
                    move to <br/> <a href="https://usada-kensetsu.web.app">https://usada-kensetsu.web.app</a>. It will be up until November 20, 2021 only.<br />If you are still 
                    interested with using the website, feel free to bookmark it.
                </h3>

                <h3 className="wrap-2">
                    It has been a year since I have updated this project. I've been busy with work lately and had no time with this project. 
                    If you are still interested to update the content in this website, especially projects, and translations corner, 
                    please do help to answer the poll and let your opinion be known: <a href="https://strawpoll.com/b3f3cy6c8">https://strawpoll.com/b3f3cy6c8</a>
                </h3>

            </div>
       </div>
    )
}

export default App