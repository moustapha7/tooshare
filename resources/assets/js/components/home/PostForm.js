import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class PostForm extends Component {
    render() {
        return (
            <div className="card card-body bg-faded">
                <form className="form-horizontal" role="form">
                    <h5>Quoi de Neuf a partager ?</h5>
                    <button className="btn bg-tooshare pull-right btnpartager" type="button">Partager</button>
                    <ul className="list-inline">
                        <li><a href=""><i className="fa fa-upload"></i></a></li>
                        <li><a href=""><i className="fa fa-camera"></i></a></li>
                        <li><a href=""><i className="fa fa-map-marker"></i></a></li>
                    </ul>
                    <div className="mediatoshar"></div>
                    <div className="form-group" >
                        <textarea className="form-control" placeholder="Mettez a jour votre statut"></textarea>
                    </div>
                </form>
            </div>
        );
    }
}