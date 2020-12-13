import React from 'react';
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from './Home'
import Projects from './Projects'
import OurTeam from './OurTeam'
import Credits from './credits/Credits'
import Project from './Project'
import Vlog from './vlog/Vlog'
import Footer from "./Footer";

const Routes = () => {
    return (
        <>
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
                    <Route path="/vlog">
                        <Vlog />
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
        </>

    )
}

export default Routes;