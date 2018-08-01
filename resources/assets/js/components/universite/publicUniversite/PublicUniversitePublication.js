import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../../Header';
import PublicUniversiteMenu from './PublicUniversiteMenu';
import PublicUniversiteSideBarDroite from './PublicUniversiteSideBarDroite';
import PublicImageUniversite from './PublicImageUniversite';
import PublicUniversiteTimeLine from './PublicUniversiteTimeLine';

export default class PublicUniversitePublication extends Component {
    render() {
        return (
            <div className="user-profil">
            <Header link="logout"/>



            <div className="container">
                <div className="row">
                    <div className="col-12 nopadding" >
                    <PublicImageUniversite />
                        <PublicUniversiteMenu />
                        
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-9 col-sm-9 col-md-9 col-xs-12 nopadding ">
                        <PublicUniversiteTimeLine />
                     
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed ">
                        <PublicUniversiteSideBarDroite/>
                    </div>
                   

                </div>
            </div>
            </div>
        );
    }
}

                            