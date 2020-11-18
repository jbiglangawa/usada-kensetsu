import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import OurTeam from './components/OurTeam'
import Credits from './components/Credits'
// import Admin from './components/Admin'
import './App.css'
import Project from './components/Project'
import ScrollToTop from './components/ScrollToTop'
import { Helmet } from 'react-helmet'


const App = props => {
    return (
        <Router>
            <Helmet>
                <meta name="description" content='"We build tomorrow for you peko", has been our company motto for the past successful years. We welcome you to Usada Constructions🥕' />
                <meta name="keywords" content="Usada Pekora Website, Usada Pekora, Pekora, Usada, Usada Kensetsu, Usada Pekora, Usada Kensetsu Website, Usada Constructions, 建設, 兎田ぺこら HP, 兎田建設 HP" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://usada-kensetsu.herokuapp.com/" />
                <meta property="og:title" content="Usada Constructions🥕 — Official Usada Pekora Fan Website🐰" />
                <meta property="og:description" content='"We build tomorrow for you peko", has been our company motto for the past successful years. We welcome you to Usada Constructions🥕' />
                <meta property="og:image" content="%PUBLIC_URL%/meta.png" />
                
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://usada-kensetsu.herokuapp.com/" />
                <meta property="twitter:title" content="Usada Constructions🥕 — Official Usada Pekora Fan Website🐰" />
                <meta property="twitter:description" content='"We build tomorrow for you peko", has been our company motto for the past successful years. We welcome you to Usada Constructions🥕' />
                <meta property="twitter:image" content="%PUBLIC_URL%/meta.png" />
            </Helmet>
            <Header />

            <Switch>
                <ScrollToTop>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/our-team">
                        <OurTeam />
                    </Route>
                    <Route path="/credits">
                        <Credits />
                    </Route>
                    <Route path="/project/:projectId/showByDefault/:showByDefault">
                        <Project />
                    </Route>
                    <Route path="/project/:projectId">
                        <Project />
                    </Route>
                    {/* <Route path="/admin">
                    <Admin />
                </Route> */}
                    <Route path="/testingPath">
                        <div style={{ height: "300vh" }}>
                        </div>
                    </Route>
                </ScrollToTop>

            </Switch>

            <Footer />
        </Router>
    )
}

export default App