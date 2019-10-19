import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingPage';
import Cv from './cv';
import Projects from './projects';
import ContactMe from './contactMe';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/cv" component={Cv} />
        <Route path="/contactme" component={ContactMe} />
    </Switch>
)

export default Main;