import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import OurTeam from './components/OurTeam'
import Credits from './components/Credits'
import './App.css'

const App = props => {
    return (
        <Router>
            <Header />

            <Switch>
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
            </Switch>

            <Footer />
        </Router>
    )
}

export default App