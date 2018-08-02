import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../../Header';
import PriveUniversiteSideBarGauche from './PriveUniversiteSideBarGauche';
import PriveImageUniversite from './PriveImageUniversite';
import PriveUniversiteTimeLine from './PriveUniversiteTimeLine';


export default class PriveUniversitePublication extends Component {
    render() {
        return (
            <div className="user-profil">
            <Header link="logout"/>



            <div className="container">
                <div className="row">
                    <div className="col-12 nopadding" >
                    <PriveImageUniversite />
                        
                    </div>
                </div>
                <div className="row">
                
                <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed ">
                        <PriveUniversiteSideBarGauche/>
                    </div>
                <div className="col-lg-9 col-sm-9 col-md-9 col-xs-12 nopadding ">
                        <PriveUniversiteTimeLine />
                     
                    </div>
                   
                   

                </div>
            </div>
            </div>
        );
    }
}

                            