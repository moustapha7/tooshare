require('./bootstrap');
import React from 'react';
import { render} from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import {Switch} from 'react-router-dom';

import Home from './components/home/Home';
import Footer from './components/Footer';
import Index from './components/Index';
import HomeChat from './components/chat/HomeChat';
import PersonalProfil from './components/userprofil/PersonalProfil';
import UsersRegistered from './components/usersregistered/UsersRegistered';

render(
    <Router history={browserHistory}>
        <Switch>
            <Route  path='/' component={Index}/>
            <Route exact path='/home' component={Home}/>
            <Route path='/chat' component={HomeChat}/>
            <Route path='/profil/:userid/:mode' component={PersonalProfil}/>
            <Route path='/allUsers' component={UsersRegistered}/>
        </Switch>
    </Router>,
    document.getElementById('tooshareapp')
);
render(<Footer />, document.getElementById('footer'));



