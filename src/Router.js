import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import App from './App';
import router,{NestedRoute} from './router/index'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {
              router.map((route, i) =>
                <Route exact key={i} path={route.path} component={route.component}/>
              )
            }
        </Switch>
    </HashRouter>
)
export default BasicRoute;