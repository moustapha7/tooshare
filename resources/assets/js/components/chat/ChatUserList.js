import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../images/defaultuserimage.png';


class ChatUserList extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="">
                <div className="containe">
                <ul className="list card-body">
                                    <li className="clearfix">
                                        <img src={defaultUser} alt="avatar" width={50} />
                                        <div className="about">
                                            <div className="name">Samba Lo</div>
                                            <div className="status">
                                                <i className="fa fa-circle online"></i> online
                                            </div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src={defaultUser} alt="avatar" width={50} />
                                        <div className="about">
                                            <div className="name">Haby Thiam</div>
                                            <div className="status">
                                                <i className="fa fa-circle offline"></i> left 7 mins ago
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                </div>
            </div>

        )
    }
}
export default ChatUserList;