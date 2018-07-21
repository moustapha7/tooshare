import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../images/defaultuserimage.png'
import Formation from './Formation'
import Competence from './Competence'
import Certification from './Certification'
import CentreInteret from './CentreInteret'

export default class SideBarGauche extends Component {
    render() {
        return (
            <div>
                <div className="card card-body bg-faded ">
                    <div className="">
                        <h5>Personnalisez votre profil</h5>
                        <nav className="nav nav-tabs">
                            <a className="nav-item nav-link active" href="#p1" data-toggle="tab">Formation</a>
                            <a className="nav-item nav-link" href="#p2" data-toggle="tab">Compétence</a>
                            <a className="nav-item nav-link" href="#p3" data-toggle="tab">Certification</a>
                            <a className="nav-item nav-link" href="#p4" data-toggle="tab">Centre d'Interet</a>
                        </nav>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="p1"> 







                            
                            <div class="card card-cascade narrower">

                                
                                <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">


                                    <a  class="white-text mx-3">Liste de Vos Formations</a>

                                    <div>
                                        <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                                            <i class="fa fa-pencil mt-0"></i>
                                        </button>
                                        <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                                            <i class="fa fa-remove mt-0"></i>
                                        </button>
                                        <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                                            <i class="fa fa-info-circle mt-0"></i>
                                        </button>
                                    </div>

                                </div>

                                <div class="px-4">

                                    <div class="table-wrapper">
                                        
                                        <table class="table table-hover mb-0">

                                            
                                            <thead>
                                                <tr>
                                                    <th>
                                                        
                                                        <label class="form-check-label" for="checkbox" class="mr-2 label-table"></label>
                                                    </th>
                                                    <th class="th-lg">
                                                        <a>Nom de la Formation
                                                        </a>
                                                    </th>
                                                    <th class="th-lg">
                                                        <a >Description de la Formation
                                                        </a>
                                                    </th>
                                                    
                                                    
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <input class="form-check-input" type="checkbox" id="checkbox1"/>
                                                        <label class="form-check-label" for="checkbox1" class="label-table"></label>
                                                    </th>
                                                    <td>Informatique</td>
                                                    <td>JEE - PHP - LARAVEL- ANGULAR</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <input class="form-check-input" type="checkbox" id="checkbox2"/>
                                                        <label class="form-check-label" for="checkbox2" class="label-table"></label>
                                                    </th>
                                                    <td>BASE DE DONNEES</td>
                                                    <td>MYSQL - SQLSERVER - POSTGRES</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>




                                <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed">
                                    <Formation/>
                                </div>


                            </div>
                            <div className="tab-pane fade" id="p2">Liste de vos Compétences


                                




                                <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed">
                                    <Competence/>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="p3">Liste de vos Certifications
                            <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed">
                                    <Certification/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="p4">Liste de vos Centres D'Interets

                                <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed">
                                    <CentreInteret/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}