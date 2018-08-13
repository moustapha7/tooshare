import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../../Header';
import PublicEntrepriseSideBarGauche from './PublicEntrepriseSideBarGauche';
import PublicImageEntreprise from './PublicImageEntreprise';
import PublicEntrepriseTimeLine from './PublicEntrepriseTimeLine';

export default class PublicEntreprisePublication extends Component {
    render() {
        return (
            <div className="user-profil">
            <Header link="logout"/>



            <div className="container">
                <div className="row">
                    <div className="col-12 nopadding" >
                    <PublicImageEntreprise />
                        
                    </div>
                </div>
                <div className="row">
                
                <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed ">
                        <PublicEntrepriseSideBarGauche/>
                    </div>
                <div className="col-lg-9 col-sm-9 col-md-9 col-xs-12 nopadding ">
                        <PublicEntrepriseTimeLine />
                     
                    </div>
                   
                   

                </div>
            </div>
            </div>
        );
    }
}

                            