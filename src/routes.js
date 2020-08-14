import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Signin from './pages/sign-in';
import Signup from './pages/sign-up';
import ListReunions from './pages/list-reunions';
import ListWorkstation from './pages/list-workstations';
import Schedule from './pages/schedule';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/reunions" component={ListReunions}/>
                <Route path="/workstations" component={ListWorkstation}/>
                <Route path="/schedule" component={Schedule}/>
                
            </Switch>
        </BrowserRouter>
    )
}
