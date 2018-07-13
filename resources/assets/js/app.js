require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

import Home from './components/home/Home';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Header from './components/Header';


render(<Header />, document.getElementById('header'));
render(
    <Router history={browserHistory}>
        <Route path="/" component={Welcome} >
            <Link to="/home">Home</Link>
            <Route path="/home" exact component={Home} />
        </Route>
    </Router>,
    document.getElementById('tooshareapp')
);
render(<Footer />, document.getElementById('footer'));