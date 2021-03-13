import React from 'react';
import Navbars from './Navbar';
import {Switch, Route} from 'react-router-dom';
import Precautions from './Precautions';
import Home from './Home';
import TrackCases from './TrackCases';

const App = () =>
{
    return(
        <>
        <Navbars/>
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route exact path = '/precautions' component={Precautions}/>
            <Route exact path = '/track' component={TrackCases}/>
        </Switch>
        </>
    )
}

export default App;