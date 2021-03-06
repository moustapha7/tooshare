import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header';
import SideBarGauche from './SideBarGauche'
import SideBarDroit from './SideBarDroit'
import PostForm from './PostForm'
import AgrationRx from './AgrationRx'
import TimeLine from './TimeLine'
import AuthService from '../../services/AuthService'
import WithAuth from "../../services/WithAuth";

class Home extends Component {

    constructor(props) {
        super(props)
        this.Auth=new AuthService();
        this.state = {
            user: {},
            userAvatar: '',
            cover: ''
        }
    }
   // componentWillMount(){
        /*if(!this.Auth.loggedIn()){
              this.props.router.push("/");*/
            //    console.log(this.props.user);
//}

    componentWillMount(){
        if(this.Auth.loggedIn()){
            // this.props.router.push("/");
            this.Auth.getUserinfo().then(res=>{
                this.setState({user: res.user});
                this.setState({userAvatar: res.avatar});
                this.setState({cover: res.cover});
                console.log("Home "+ res.user.phone);
                console.log("TIMELINE "+ res.id);
            }).catch(err=>{
                alert("Resolver "+ err);
            })
        }
    }

    componentWillUnmount () {
    this.state.user = null;
    }

    render(){

        return (
            <div className="">

                <Header link="logout" UserAvatar={!!(this.state.userAvatar)? this.state.userAvatar : ""}/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 nopadding">
                            <SideBarGauche User={this.state.user} UserAvatar={!!(this.state.userAvatar)? this.state.userAvatar : ""} UserCover={!!(this.state.cover)? this.state.cover : ""}/>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 nopadding">
                            <PostForm User={this.state.user}/>
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
export default WithAuth(Home);