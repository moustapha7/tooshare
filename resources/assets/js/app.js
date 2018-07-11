require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/home/Home';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Welcome} >
            <Route path="/home" component={Home} />
        </Route>
    </Router>,
    document.getElementById('tooshareapp')
);
render(<Footer />, document.getElementById('footer'));