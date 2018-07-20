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
                                    Messagerie
                                </div>
                                <ul className="list card-body">
                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Vincent Porter</div>
                                            <div className="status">
                                                <i className="fa fa-circle online"></i> online
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Aiden Chavez</div>
                                            <div className="status">
                                                <i className="fa fa-circle offline"></i> left 7 mins ago
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Mike Thomas</div>
                                            <div className="status">
                                                <i className="fa fa-circle online"></i> online
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Erica Hughes</div>
                                            <div className="status">
                                                <i className="fa fa-circle online"></i> online
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Ginger Johnston</div>
                                            <div className="status">
                                                <i className="fa fa-circle online"></i> online
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Tracy Carpenter</div>
                                            <div className="status">
                                                <i className="fa fa-circle offline"></i> left 30 mins ago
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Christian Kelly</div>
                                            <div className="status">
                                                <i className="fa fa-circle offline"></i> left 10 hours ago
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Monica Ward</div>
                                            <div className="status">
                                                <i className="fa fa-circle online"></i> online
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Dean Henry</div>
                                            <div className="status">
                                                <i className="fa fa-circle offline"></i> offline since Oct 28
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Peyton Mckinney</div>
                                            <div className="status">
                                                <i className="fa fa-circle online"></i> online
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="chat">
                                <div className="chat-header clearfix">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

                                    <div className="chat-about">
                                        <div className="chat-with">Chat with Vincent Porter</div>
                                        <div className="chat-num-messages">already 1 902 messages</div>
                                    </div>
                                    <i className="fa fa-star"></i>
                                </div>

                                <div className="chat-history">
                                    <ul>
                                        <li className="clearfix">
                                            <div className="message-data align-right">
                                                <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                                                <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>

                                            </div>
                                            <div className="message other-message float-right">
                                                Hi Vincent, how are you? How is the project coming along?
                                            </div>
                                        </li>

                                        <li>
                                            <div className="message-data">
                                                <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                                                <span className="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div className="message my-message">
                                                Are we meeting today? Project has been already finished and I have results to show you.
                                            </div>
                                        </li>

                                        <li className="clearfix">
                                            <div className="message-data align-right">
                                                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                                                <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>

                                            </div>
                                            <div className="message other-message float-right">
                                                Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
                                            </div>
                                        </li>

                                        <li>
                                            <div className="message-data">
                                                <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                                                <span className="message-data-time">10:20 AM, Today</span>
                                            </div>
                                            <div className="message my-message">
                                                Actually everything was fine. I'm very excited to show this to our team.
                                            </div>
                                        </li>

                                        <li>
                                            <div className="message-data">
                                                <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                                                <span className="message-data-time">10:31 AM, Today</span>
                                            </div>
                                            <i className="fa fa-circle online"></i>
                                            <i className="fa fa-circle online" style={{color: '#AED2A6'}}></i>
                                            <i className="fa fa-circle online" style={{color: '#DAE9DA'}}></i>
                                        </li>

                                    </ul>

                                </div>

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
                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" width={70} className="useravatar"/>
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