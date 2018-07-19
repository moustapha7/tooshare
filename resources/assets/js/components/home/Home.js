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
        this.state = {
            user :{
                first_name : "Haby",
                last_name:"Thiam",
                email: "Haby@gmail.com",
                phone: "772789809",
                country:"Senegal",
                city:"Dakar",
                birthday:"25/09/1993",
                gender:"femme",
              }
          }
       // console.log(this.props.location.query);
       // alert(this.props.location.query);
    }

    render(){
        if(this.props.params)
        {
          console.log("ok",this.props.params.dataUser)
        }
        return (
            <div className="">
                <Header link="logout"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding">
                            <SideBarGauche User={this.state.user}/>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 nopadding">
                            <PostForm User={this.state.user}/>
                            <AgrationRx />
                            <div className=" espace">
                                <h5>Votre fil d'actualité</h5>
                            </div>
                            <TimeLine User={this.state.user}/>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding">
                            <SideBarDroit User={this.state.user}/>



                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;