import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header';
import SideBarGauche from './CvEtudiantSideBarGauche'
import CvEtudiantAgration from './CvEtudiantAgration'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="">
                <Header link="logout"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed">
                            <SideBarGauche/>
                        </div>
                        <div className="col-lg-9 col-sm-9 col-md-9 col-xs-12 nopadding ">
                            
                            <CvEtudiantAgration />
                            <div className=" espace">
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;