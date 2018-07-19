require('./bootstrap');
import React from 'react';
import { render} from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import {Switch} from 'react-router-dom';

import Home from './components/home/Home';
import Footer from './components/Footer';
import Index from './components/Index';
import HomeChat from './components/chat/HomeChat';

render(
    <Router history={browserHistory}>
        <Switch>
            <Route  path='/' component={Index}/>
            <Route path='/home' component={Home}/>
            <Route path='/chat' component={HomeChat}/>
        </Switch>
    </Router>,
    document.getElementById('tooshareapp')
);
render(<Footer />, document.getElementById('footer'));



