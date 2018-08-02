import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultBarner from '../../../../../images/barnerProfil.jpg'

export default class PublicImageUniversite extends Component {
    render() {
        return (
            <div>
            <div className="card bg-faded ">
                   <div className="barner" style={{backgroundImage: 'url('+defaultBarner+')'}}>
                   </div>
            </div>
            </div>

        );
    }
}