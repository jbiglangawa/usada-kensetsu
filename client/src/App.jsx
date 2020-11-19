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


const App = props => {
    return (
        <Router>
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