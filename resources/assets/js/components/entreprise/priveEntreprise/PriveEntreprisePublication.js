import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../../Header';
import PriveEntrepriseSideBarGauche from './PriveEntrepriseSideBarGauche';
import PriveImageEntreprise from './PriveImageEntreprise';
import PriveEntrepriseTimeLine from './PriveEntrepriseTimeLine';


export default class PriveEntreprisePublication extends Component {
    render() {
        return (
            <div className="user-profil">
            <Header link="logout"/>



            <div className="container">
                <div className="row">
                    <div className="col-12 nopadding" >
                    <PriveImageEntreprise />
                        
                    </div>
                </div>
                <div className="row">
                
                <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed ">
                        <PriveEntrepriseSideBarGauche/>
                    </div>
                <div className="col-lg-9 col-sm-9 col-md-9 col-xs-12 nopadding ">
                        <PriveEntrepriseTimeLine />
                     
                    </div>
                   
                   

                </div>
            </div>
            </div>
        );
    }
}

                            