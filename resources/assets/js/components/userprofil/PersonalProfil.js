import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header';
import SideBarGauche from '../home/SideBarGauche'
import UserProfilInfo from './UserProfilInfo'
import Barner from './Barner'
import AuthService from "../../services/AuthService";

class PersonalProfil extends Component {

    constructor(props) {
        super(props)
        this.Auth=new AuthService();
        this.state = {
            user: {}
        }
    }

    componentWillMount(){

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
                            <Barner />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding fixed">
                            <SideBarGauche />
                        </div>
                        <div className="col-lg-9 col-sm-9 col-md-9 col-xs-12 nopadding ">
                            <UserProfilInfo />
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
export default PersonalProfil;