import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header';
import SideBarGauche from '../home/SideBarGauche'
import SideBarDroit from '../home/SideBarDroit'
import ChatFomr from './ChatForm'
import ChatUserList from './ChatUserList'
import ChatMessage from './ChatMessage'
import defaultUser from '../../../../images/defaultuserimage.png'
import AuthService from "../../services/AuthService";
import WithAuth from "../../services/WithAuth";

class HomeChat extends Component {


    constructor(props) {
        super(props)
        this.Auth=new AuthService()
    }
    /*componentWillMount(){
        if(!this.Auth.loggedIn()){
            this.props.router.push("/");
        }
    }*/
    render(){

        return (
            <div className="">
                <Header link="logout"/>
                <div className="container chathome">
                    <div className="row">
                        <div className="col-lg-12 nopadding">
                        <div className="containerchat clearfix">
                            <div className="people-list card  bg-faded nopadding" id="people-list">
                                <div className="card-header">
                                   <h2>Messagerie</h2> 
                                </div>
                                <ChatUserList />
                                
                            </div>

                            <div className="chat">
                                <div className="chat-header clearfix">
                                    <img src={defaultUser} alt="avatar" width={70}/>

                                    <div className="chat-about">
                                        <div className="chat-with">Disccusion avec Samba Lo</div>
                                        <div className="chat-num-messages">85 messages</div>
                                    </div>
                                    <i className="fa fa-star"></i>
                                </div>

                                <ChatMessage />

                                <div className="chat-message clearfix">
                                    <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="2"></textarea>

                                    <i className="fa fa-file"></i> &nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-camera-retro"></i>

                                    <button>Envoyer</button>

                                </div>

                            </div>

                            <div className="people-detail" id="people-detail">
                                <div className="card card-body bg-faded ">
                                        <div className="userchatavatar">
                                                <img src={defaultUser} alt="avatar" width={70} className="useravatar"/>
                                                <div className="userinfo">
                                                    <span className="userchatname"><a href="" className="">Moussa Diatta</a></span><br />
                                                    <span className="userchatprofile">Technocal Manager</span>
                                                </div>
                                        </div>

                                    <div className="userfileshared">
                                        <h4 className="card-header">Fichier Partager</h4>
                                        <div className="">
                                            <ul>
                                                <li><a href="" className=""><i className="fa fa-file-pdf"></i> Programmation c++</a></li>
                                                <li><a href="" className=""><i className="fa fa-file-pdf"></i> Programmation c++</a></li>
                                                <li><a href="" className=""><i className="fa fa-file-pdf"></i> Programmation c++</a></li>
                                                <li><a href="" className=""><i className="fa fa-file-pdf"></i> Programmation c++</a></li>
                                                <li><a href="" className=""><i className="fa fa-file-pdf"></i> Programmation c++</a></li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default WithAuth(HomeChat);