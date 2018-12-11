import React from 'react';
import {Switch, Route} from 'react-router-dom'

import About from './components/about/about'
import Contact from './components/contact/contact'
import Home from './components/home/home'
import Random from './components/random/random'


export default (
    <Switch>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/random' component={Random}/>        
        <Route exact path='/' component={Home}/>        
    </Switch>
)