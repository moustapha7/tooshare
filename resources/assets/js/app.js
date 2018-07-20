require('./bootstrap');
import React from 'react';
import { render} from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import {Switch} from 'react-router-dom';

import Home from './components/home/Home';
import Footer from './components/Footer';
import Index from './components/Index';
import HomeChat from './components/chat/HomeChat';
import userProfilHome from './components/userProfil/userProfilHome';
import userProfilProfHome from './components/userProfilProf/userProfilProfHome';
import CvEtudiantHome from './components/CvEtudiant/CvEtudiantHome';

render(
    <Router history={browserHistory}>
        <Switch>
            <Route  path='/' component={Index}/>
            <Route path='/home' component={Home}/>
            <Route path='/chat' component={HomeChat}/>
            <Route path='/userProfil' component={userProfilHome}/>
            <Route path='/userProfilProf' component={userProfilProfHome}/>
            <Route path='/CvEtudiant' component={CvEtudiantHome}/>
        </Switch>
    </Router>,
    document.getElementById('tooshareapp')
);
render(<Footer />, document.getElementById('footer'));



