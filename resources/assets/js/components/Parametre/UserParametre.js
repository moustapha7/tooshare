import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header';
import ParBarner from './ParBarner'
import MenuParametre from './MenuParametre'
import InfoGeneral from './InfoGeneral'
import infoPrive from './infoPrive'

import AuthService from "../../services/AuthService";

class UserParametre extends Component {

    constructor(props) {
        super(props)
        this.Auth=new AuthService();
        this.state = {
            user: {}
        }
    }

    componentWillMount(){
        if(this.Auth.loggedIn()){
            // this.props.router.push("/");
            this.Auth.getUserinfo().then(res=>{
                this.setState({user: res});
                console.log("Home "+ res.phone);
            }).catch(err=>{
                alert("Resolver "+ err);
            })
        }
    }

    render(){
        if (this.state.user) {
            console.log("Home "+ this.state.user.email);
        }
        return (
            <div className="user-profil">
                <Header link="logout"/>



                <div className="container">
                    <div className="row">
                        <div className="col-12 nopadding" >
                            <ParBarner />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed ">
                            <MenuParametre/>
                        </div>
                        <div className="col-lg-9 col-sm-9 col-md-9 col-xs-12 nopadding ">
                            <InfoGeneral />
                          <infoPrive />
                        </div>

                    </div>
                </div>


               
                    
                </div>

        )
    }
}
export default UserParametre;