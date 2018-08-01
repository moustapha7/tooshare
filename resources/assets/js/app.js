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
import UserParametre from './components/Parametre/UserParametre';
import PublicUserParametre from './components/publicUser/PublicUserParametre';
import CreationUniversite from './components/universite/CreationUniversite';
import CreationEntreprise from './components/entreprise/CreationEntreprise';
import PublicUniversitePublication from './components/universite/publicUniversite/PublicUniversitePublication';
import PublicEntreprisePublication from './components/entreprise/publicEntreprise/PublicEntreprisePublication';

render(
    <Router history={browserHistory}>

        <Switch>
            <Route  path='/' component={Index}/>
            <Route exact path='/home' component={Home}/>
            <Route path='/chat' component={HomeChat}/>
            <Route path='/profil/:userid/:mode' component={PersonalProfil}/>
            <Route path='/allUsers' component={UsersRegistered}/>
            <Route path='/parametre' component={UserParametre}/>
            <Route path='/publicUser' component={PublicUserParametre}/>
            <Route path='/universite' component={CreationUniversite}/>
            <Route path='/entreprise' component={CreationEntreprise}/>
            <Route path='/publicUniversite' component={PublicUniversitePublication}/>
            <Route path='/publicEntreprise' component={PublicEntreprisePublication}/>
        </Switch>
    </Router>,
    document.getElementById('tooshareapp')
);
render(<Footer />, document.getElementById('footer'));



