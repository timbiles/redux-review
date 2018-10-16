import React from 'react';
import {Switch, Route} from 'react-router-dom'

import About from './components/about/about'
import Contact from './components/contact/contact'
import Home from './components/home/home'


export default (
    <Switch>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route exact path='/' component={Home}/>        
    </Switch>
)