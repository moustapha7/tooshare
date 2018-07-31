import React, { Component } from 'react';
import Header from '../Header';
import UserServices from '../../services/UserService';
import AuthService from '../../services/AuthService';
import FriendService from '../../services/FriendService';

export default class UsersRegistered extends Component {
    constructor(props){
        super(props);
        this.UsersService=new UserServices();
        this.Auth= new AuthService();
        this.Friend= new FriendService();
        this.state = {
            users : [],
            user: {}
        }

        this.handleFriend = this.handleFriend.bind(this);

    }

    componentWillMount(){
        if(this.Auth.loggedIn()){
            // this.props.router.push("/");
            this.UsersService.getUserAllUsers().then(res=>{
                this.setState({users: res});
            }).catch(err=>{
                alert("Resolver "+ err);
            })
            this.Auth.getUserinfo().then(res=>{
                this.setState({user: res});
            }).catch(err=>{
                alert("Resolver "+ err);
            })
        }
    }
    handleFriend(friend){
        event.preventDefault();
       /* var formdata= new FormData();
        formdata.append('friend_id',friend.id);
        formdata.append('user_id',this.state.user.id);
        alert("FID : "+ friend.id);
        this.Friend.DemandeTraited(formdata).then(res=>{
           console.log("Friends data requeste : "+res.message);
        }).catch(err=>{
            alert("Resolver"+ err);
        })
            */
        var formdata= new FormData();
        formdata.append('friend_id',friend.id);
        formdata.append('user_id',this.state.user.id);

        const config= {
            headers: {
                'Authorization': 'Bearer ' + this.Auth.getToken(),
                'Content-Type': 'multipart/form-data'
            }
        }
        axios.post('/api/DemandeTraited',formdata,config).then(response=>{
            console.log("Friends data requeste : "+response);

        }).catch(err=>{
            console.log(err);
        })

    }
    render() {
        return (
            <div className="">
                <Header link="logout"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 nopadding ">
                            <div className="card  bg-fade espace">
                                <div className="card-header">
                                    Liste des Utilisateurs
                                </div>
                                <div className="card-body">
                                    <table className="table-condenced table table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th>Avatar</th>
                                                <th>Nom</th>
                                                <th>Prenon</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.users.map((user,i)=>
                                        <tr key={i}>
                                            <td >{user.phone}</td>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td><button className="btn btn-primary" onClick={this.handleFriend.bind(this,user)}>Ajouter</button></td>
                                        </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}