import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../images/defaultuserimage.png'

export default class TimeLine extends Component {
    render() {
        return (
            <div className="card card-body bg-fade espace">
                <div className="card-heade">
                    <div className="userposthearder">
                                        <span>
                                            <a href="#" className="">
                                                <img src={defaultUser} alt="Avatar" width={45} className="useravatar"/>
                                                <span className="username">Moussa Diatta</span>
                                            </a>
                                        </span>
                        <span className="pull-right"><i className="fa fa-cogs"></i></span>
                    </div>

                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-foote">
                    <ul className="list-inline-post undecorate">
                        <li><a href="">10 <i className="fa fa-heart coeur"></i></a></li>
                        <li><a href="">2 <i className="fa fa-comment-dots"></i></a></li>
                        <li><a href="">0 <i className="fa fa-share-alt-square"></i></a></li>
                    </ul>
                    <div className="commentaire">
                        <div className="contenucommentaire"></div>
                        <form action="" className="">
                                            <span>
                                                <img src={defaultUser} alt="Avatar" width={35} className="useravatar"/>
                                                <input type="text" className="form-control"placeholder="Commentaire"/>
                                            </span>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}