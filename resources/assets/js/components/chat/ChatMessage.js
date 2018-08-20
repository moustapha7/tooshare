import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class ChatMessage extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="">
                <div className="containe">
                <div className="chat-history">
                                    <ul>
                                        <li className="clearfix">
                                            <div className="message-data align-right">
                                                <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                                                <span className="message-data-name" >Moi</span> <i className="fa fa-circle me"></i>

                                            </div>
                                            <div className="message other-message float-right">
                                               Salut Samba, comment ça vas cela fait longtemp ?
                                            </div>
                                        </li>

                                        <li>
                                            <div className="message-data">
                                                <span className="message-data-name"><i className="fa fa-circle online"></i> Samba</span>
                                                <span className="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div className="message my-message">
                                                Salu, oui c'est vrai que ça fait un bye. Moi ça va bien sante bou bakh et toi ?
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                </div>
            </div>

        )
    }
}
export default ChatMessage;