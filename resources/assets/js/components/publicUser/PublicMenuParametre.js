import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../images/defaultuserimage.png'

export default class PublicMenuParametre extends Component {
    render() {
        return (
            <div>
            <div className="card card-body bg-faded ">
                <div className="usersidebar"></div>
                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-md-9 col-xs-9 undecorated">
                        <span className="username">
                            <a href="" className="">Abdou Akim AIDARA <br /> Etudiant 29 ans</a>

                        </span>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3 col-xs-3 usersidebarAvatar">
                        <a href="#" className="">
                            <img src={defaultUser} alt="Avatar" width={70} className="useravatar"/>
                        </a>
                    </div>
                </div>
               

            </div>

                <div className="card card-body bg-faded espace">
                    <div className="row">
                        <ul className="list-block undecorate">
                        <a class=""> <h3 >Réalisations</h3></a>
                            <li><a href=""><i className="fa fa-book"></i>9 projets en Gestion de Stock</a></li>
                            <li><a href=""><i className="fa fa-university"></i>3 Projets de creation de site web</a></li>
                            <li><a href=""><i className="fa fa-briefcase"></i> 2 projet de creation d'application Mobile</a></li>
                        </ul>
                    </div>

                </div>
            </div>

        );
    }
}