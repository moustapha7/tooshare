import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
export default class PublicEntrepriseMenu extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-md-offset-2">
                        <div className="panel panel-default">
                        
                        <div class=" ">
                            <a class="">
                            <button class="btn btn-primary " type="button">Département   |</button>
                            <button class="btn btn-primary" type="button">Cours    |</button>
                            <button class="btn btn-primary" type="button">Certification    |</button>
                            <button class="btn btn-primary" type="button">Admission   |</button>
                            <button class="btn btn-primary" type="button">A propos    |</button>
                            <button class="btn btn-primary fa fa-users" type="button">Suivre    |</button>
                            </a>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}