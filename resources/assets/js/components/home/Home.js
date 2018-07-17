import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header';

class Home extends Component {


    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="">
                <Header link="logout"/>
            </div>

        )
    }
}
export default Home;