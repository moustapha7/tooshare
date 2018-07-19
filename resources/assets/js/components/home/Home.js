import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header';
import SideBarGauche from './SideBarGauche'
import SideBarDroit from './SideBarDroit'
import PostForm from './PostForm'
import AgrationRx from './AgrationRx'
import TimeLine from './TimeLine'

class Home extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location.query);
        console.log(this.props.location.query);
        alert(this.props.navigation.getParam);
        this.state = {
            user:this.props.navigation.getParam
        
        }
       // alert(this.props.location.query);
    }

    render(){
        return (
            <div className="">
                <Header link="logout"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding">
                            <SideBarGauche/>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 nopadding">
                            <PostForm />
                            <AgrationRx />
                            <div className=" espace">
                                <h5>Votre fil d'actualité</h5>
                            </div>
                            <TimeLine />
                        </div>
                        <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding">
                            <SideBarDroit />



                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;