import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header';
import SideBarGauche from './userProfilSideBarGauche'
import SideBarDroit from './userProfilSideBarDroit'
import PostForm from './userProfilPostForm'
import TimeLine from './userProfilTimeLine'

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
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 nopadding ">
                            <PostForm />
                          
                            <div className=" espace">
                                <h5>Votre fil d'actualité</h5>
                            </div>
                            <TimeLine />
                        </div>
                        <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed">
                            <SideBarDroit />



                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;