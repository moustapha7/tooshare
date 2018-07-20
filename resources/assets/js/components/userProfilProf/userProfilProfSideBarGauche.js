import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../images/defaultuserimage.png'

export default class SideBarGauche extends Component {
    render() {
        return (
            <div>
            <div className="card card-body bg-faded ">
                <div className="usersidebar"></div>
                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-md-9 col-xs-9 undecorated">
                        <span className="username">
                            <a href="" className="">Khalifa Ababacar Dieye <br /> Prof Anglais 40 ans</a>

                        </span>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3 col-xs-3 usersidebarAvatar">
                        <a href="#" className="">
                            <img src={defaultUser} alt="Avatar" width={70} className="useravatar"/>
                        </a>
                    </div>
                </div>
                <div className="row bordertop">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Certif. <br /> 2</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Vue <br /> 10</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Autres <br /> 0</div>
                    <button type="button" class="btn btn-info">Professeur</button>
                </div>

            </div>

                <div className="card card-body bg-faded espace">
                    <div className="row">
                        <ul className="list-block undecorate">
                            <li><a href=""><i className="fa fa-book"></i> Mes cours</a></li>
                            <li><a href=""><i className="fa fa-university"></i> Ma bibliotheque</a></li>
                            <li><a href=""><i className="fa fa-briefcase"></i> Offres d'emploi</a></li>
                            <li><a href=""><i className="fa fa-users"></i> Groupes</a></li>
                            <li><a href=""><i className="fa fa-cog"></i> Mes Amis</a></li>
                            <li><a href=""><i className="fa fa-cog"></i> Mon CV</a></li>
                            <li><a href=""><i className="fa fa-cog"></i> Paramettre</a></li>
                            <li class="nav-item dropdown">
                               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mes Structures</a>
                               <div class="dropdown-menu">
                               <a class="dropdown-item" href="#">Entreprises</a>
                               <a class="dropdown-item" href="#">Universites</a>
                                </div>
                            </li>
                            <button type="button" class="btn btn-info">Gerer vos Structures</button>
                        </ul>


                    </div>

                </div>
            </div>

        );
    }
}