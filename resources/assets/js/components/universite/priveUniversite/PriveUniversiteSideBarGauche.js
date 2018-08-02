import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../../images/defaultuserimage.png';
import AuthService from "../../../services/AuthService";

export default class PriveUniversiteSideBarGauche extends Component {



    render() {
       
        return (
            <div>
            <div className="card card-body bg-faded ">
                <div className="usersidebar text-center"><h3>  Tableau de bord</h3></div>
                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-md-9 col-xs-9 undecorated">
                      
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3 col-xs-3 usersidebarAvatar">
                    </div>
                </div>
                <div className="card card-body bg-faded espace">
                    <div className="row">
                        <ul className="list-block undecorate">
                            <li><a href=""><i className="fa fa-book"></i> Ajouter un Offre</a></li>
                            <li><a href=""><i className="fa fa-university"></i> Liste des Offrres</a></li>
                            <li><a href=""><i className="fa fa-briefcase"></i> Candidatiure</a></li>
                            <li><a href=""><i className="fa fa-cog"></i> Parametre</a></li>
                            <li><a href=""><i className="fa fa-cog"></i> Administrateur</a></li>
                            <li><a href=""><i className="fa fa-cog"></i> Blog Page</a></li>
                          
                            
                        </ul>



                    </div>

                </div>

                <div>

                </div>

            </div>

                
            </div>

        );
    }
}