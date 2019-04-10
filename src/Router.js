import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import App from './App';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    </HashRouter>
)
export default BasicRoute;