import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class SideBarDroit extends Component {
    render() {
        return (
            <div className="card card-body bg-faded">
               
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
                                                <i className="fa fa-circle online"></i> online
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
                                                <i className="fa fa-circle online"></i> online
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Christian Kelly</div>
                                            <div className="status">
                                                <i className="fa fa-circle online"></i> online
                                            </div>
                                        </div>
                                    </li>
                                 </ul>
            </div> 
        );
    }
}