import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../images/defaultuserimage.png';
import AuthService from "../../services/AuthService";

export default class SideBarGauche extends Component {

    constructor(props) {
        super(props)
        this.Auth=new AuthService();

    }


    render() {
        const userID = null;
        if(this.props.User){
            const user=this.props.User
            this.userID = this.props.User.id;
            console.log("oh",user)
        }
        const linkto = "/profil/" + this.props.User.id + "/edit";
        return (
            <div>
            <div className="card card-body bg-faded ">
                <div className="usersidebar"></div>
                <div className="row">
                    <div className="col-lg-9 col-sm-9 col-md-9 col-xs-9 undecorated">
                        <span className="username">
                            <Link to="/home" className="">{this.props.User.first_name} {this.props.User.last_name} <br /> Etudiant 23 ans</Link>

                        </span>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3 col-xs-3 usersidebarAvatar">
                        <Link to={linkto} className="">
                            <img src={defaultUser} alt="Avatar" width={70} className="useravatar"/>
                        </Link>
                    </div>
                </div>
                <div className="row bordertop">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Certif. <br /> 2</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Vue <br /> 10</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Autres <br /> 0</div>
                </div>

                <div>

                    <div className="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Formulaire D'application</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body mx-3">
                <div className="md-form mb-2">
                   
                    <label data-error="wrong" data-success="right" for="form32">Quelle Matière souhaiteriez-vous partager?</label>
                    <input type="text" id="form32" className="form-control validate"/>
                    
                </div>

                <div className="md-form mb-2">
                   
                   <label data-error="wrong" data-success="right" for="form32">partager votre CV  :  </label>
                   <input type="file" name="nom" />

                   
               </div>

                <div className="md-form">
                   
                    <label data-error="wrong" data-success="right" for="form8">Quelles sont vos motivations</label>
                    <textarea type="text" id="form8" className="md-textarea form-control" rows="4"></textarea>
                </div>

            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-primary">Enregistrer</button>
            </div>
        </div>
    </div>
</div>




<div className="text-center">
    <a href="" className="btn btn-primary" data-toggle="modal" data-target="#modalRegisterForm">Devenir Professeur</a>
</div>

                </div>

            </div>

                <div className="card card-body bg-faded espace">
                    <div className="row">
                        <ul className="list-block undecorate">
                            <li><a href=""><i className="fa fa-book"></i> Mes cours</a></li>
                            <li><a href=""><i className="fa fa-university"></i> Ma bibliotheque</a></li>
                            <li><a href=""><i className="fa fa-briefcase"></i> Offres d'emploi</a></li>
                            <li><a href=""><i className="fa fa-cog"></i> Mes Amis</a></li>
                            <li><a href=""><i className="fa fa-cog"></i> Mon CV</a></li>
                            <li><a href=""><i className="fa fa-cog"></i> Paramettre</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mes Structures</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Entreprises</a>
                                    <a className="dropdown-item" href="#">Universites</a>
                                </div>
                            </li>
                            <button type="button" className="btn btn-primary">Gerer vos Structures</button>
                        </ul>



                    </div>

                </div>
            </div>

        );
    }
}