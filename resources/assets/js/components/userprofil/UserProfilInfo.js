import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../images/defaultuserimage.png'

export default class SideBarGauche extends Component {
    render() {
        return (
            <div>
                <div className="card card-body bg-faded ">
                    <div className="">
                        <h5>Personnalisez votre profil</h5>
                        <nav className="nav nav-tabs">
                            <a className="nav-item nav-link active" href="#p1" data-toggle="tab">Formation)</a>
                            <a className="nav-item nav-link" href="#p2" data-toggle="tab">Compétence</a>
                            <a className="nav-item nav-link" href="#p3" data-toggle="tab">Certification</a>
                            <a className="nav-item nav-link" href="#p4" data-toggle="tab">Centre d'Interet</a>
                        </nav>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="p1"> Renseigner les champs suivant vos Formation

                                <div className="row">
                                    <ul>
                                        <li> Formation 1</li>
                                        <li> Formation 2</li>
                                        <li> Formation 3</li>
                                        <li> Formation 4</li>
                                        <li> Formation 5</li>
                                        <li> Formation 7</li>
                                        <li> Formation 8</li>
                                        <li> Formation 9</li>


                                    </ul>

                                </div>


                            </div>
                            <div className="tab-pane fade" id="p2">Renseigner Vos Compétences Dans les champs

                                <ul>
                                    <li>Compétence 1</li>
                                    <li>Compétence 2</li>
                                    <li>Compétence 3</li>
                                    <li> Compétence 4</li>
                                    <li>Compétence 5</li>
                                    <li>Compétence 6</li>
                                    <li>Compétence 7</li>
                                    <li>Compétence 8</li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="p3">Lister Vos Diférentes Certification
                                <ul>
                                    <li>Certification 1</li>
                                    <li>Certification 2</li>
                                    <li>Certification 3</li>
                                    <li> Certification 4</li>

                                </ul>
                            </div>
                            <div className="tab-pane fade" id="p4">Quelles Sont Vos differents Centre D'Interet

                                <ul>
                                    <li>Centred'Interet 1</li>
                                    <li>Centred'Interet 2</li>
                                    <li>Centred'Interet 3</li>
                                    <li> Centred'Interet 4</li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}