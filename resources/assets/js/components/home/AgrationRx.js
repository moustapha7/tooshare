import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class AgrationRx extends Component {
    render() {
        return (
            <div className="card card-body bg-fade espace">
                <h5>Quoi de 9 ailleur ?</h5>
                <nav className="nav nav-tabs">
                    <a className="nav-item nav-link active" href="#p1" data-toggle="tab">Facebook (2)</a>
                    <a className="nav-item nav-link" href="#p2" data-toggle="tab">Twitter (3)</a>
                    <a className="nav-item nav-link" href="#p3" data-toggle="tab">LinkedIn (1)</a>
                </nav>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="p1">Quoi de Neuf a Facebook !</div>
                    <div className="tab-pane fade" id="p2">Quoi de Neuf a Twitter</div>
                    <div className="tab-pane fade" id="p3">Quoi de Neuf a LinkenId</div>
                </div>
            </div>
        );
    }
}