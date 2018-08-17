import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../images/defaultuserimage.png';
import loading from '../../../../images/source.gif';
import AuthService from '../../services/AuthService';
import AgrationRx from './AgrationRx';
import Moment from 'react-moment';
import ReactLoading from 'react-loading';
const Loading = require('react-loading-animation');
export default class TimeLine extends Component {

    constructor() {
        super();
        this.state={
            data: [],
            content : '',
            loading: true

        }

        this.Auth= new AuthService();
        this.handleliked_post=this.handleliked_post.bind(this);
        this.handleChangeComment=this.handleChangeComment.bind(this);
        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.loadCommentsFromServer=this.loadCommentsFromServer.bind(this);
    }
    loadCommentsFromServer(){
        let $this=this;
        const config= {
            headers: {
                'Authorization': 'Bearer' + this.Auth.getToken()
            }
        }
        axios.get('/api/timeline',config).then(response=>{
            $this.setState({
                data : response.data,
                loading: false
            })
            console.log(response);
        }).catch(err=>{
            console.log(err);
        })
    }
    componentDidMount(){
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.interval);
    }
    handleChangeComment(event) {
        this.setState({content: event.target.value});
    }

    handleliked_post(post,event){
        event.preventDefault();
      var formdata= new FormData();
      formdata.append('post_id',post.id);
    
      const config= {
        headers: {
                  'Authorization': 'Bearer ' + this.Auth.getToken(),
                  'Content-Type': 'multipart/form-data'
        }
    }
         axios.post('/api/likedPost',formdata,config).then(response=>{
            console.log(response);
             this.loadCommentsFromServer();
        }).catch(err=>{
            console.log(err);
        })


    }

    handleKeyPress(post,event){

       // event.preventDefault();

        if(event.key == 'Enter'){
            var formdata= new FormData();
            formdata.append('post_id',post.id);
            formdata.append('content',this.state.content);
    
            const config= {
                headers: {
                    'Authorization': 'Bearer ' + this.Auth.getToken(),
                    'Content-Type': 'multipart/form-data'
                }
            }
            axios.post('/api/CommentedPost',formdata,config).then(response=>{
                
            }).catch(err=>{
                console.log(err);
            })
            event.target.value = "";
        }
      }

    render() {
        const user=this.props.User
       // const linkto = "/publicUser/" + this.props.User.user.id + "/edit";
        let data;
       if (this.state.loading) {
        data = <Loading />
        } else {
            data =  this.state.data.map((post,i)=>
                <div className="card card-body bg-fade espace "  key={i}>

                    <div className="card-heade">
                        <div className="userposthearder costumAvatarBlock">
                                        <span>
                                            <Link to={"/publicUser/" + post.user.id + "/show"} className="">
                                            <span style={!!(post.user.timeline.avatar)? {backgroundImage: 'url(http://localhost:8000/avatars/'+post.user.timeline.avatar.file_Resize_name+')'} : {backgroundImage: 'url('+defaultUser+')'}}  className="useravatar costumUserpostavatar"></span>
                                                <div className="username">{post.user.first_name+" "+post.user.last_name} <br /><span className="usernameprofil">Etuidant</span><br /><span className="publishdate"><Moment fromNow ago>{post.created_at}</Moment></span></div>
                                            </Link>
                                        </span>
                            <span className="pull-right"><i className="fa fa-cogs"></i></span>
                        </div>
                    </div>
                    <div className="card-body postcontenu">
                        <p className="card-text">{post.content}</p>
                       {post.files.map((file,j)=>
                          <div className="post-image" key={j} >
                            <img src={'http://localhost:8000/posts/'+file.file_Resize_name} />
                          </div>
                    )} 
                    
                    </div>
                    <div className="card-foote">
                        <ul className="list-inline-post undecorate">
                            <li><a href="#" onClick={this.handleliked_post.bind(this,post)} >{post.users_liked.length} <i className="fa fa-heart coeur"></i></a></li>
                            <li><a href="#">{post.comments.length} <i className="fa fa-comment-dots"></i></a></li>
                            <li><a href="#">0 <i className="fa fa-share-alt-square"></i></a></li>
                        </ul>
                        <div className="commentaire costumAvatarBlock">
                        {post.comments.map((comment,i)=>
                            <div className="" key={i}>
                            <div className="contenucommentaire userposthearder" >
                                    <span>
                                    <Link to={"/publicUser/" + comment.user.id + "/show"} className="">
                                        <span style={!!(comment.user.user_info.file_Resize_name)? {backgroundImage: 'url(http://localhost:8000/avatars/'+comment.user.user_info.avatar.file_Resize_name+')'} : {backgroundImage: 'url('+defaultUser+')'}}  className="useravatar costumUsercommenttavatar"></span>
                                        <span className="username">{comment.user.first_name+" "+comment.user.last_name}</span>
                                    </Link>
                                    <br /> <span>{comment.content}</span>
                                    </span>
                                    <div>
                                    <ul className="list-inline-post undecorate">
                                        <li><a href="#" onClick={this.handleliked_post.bind(this,post)} >0 <i className="fa fa-heart coeur"></i></a></li>
                                        <li><a href="#">0 <i className="fa fa-comment-dots"></i></a></li>
                                        <li><a href="#">0 <i className="fa fa-share-alt-square"></i></a></li>
                                    </ul>      
                                    </div>   
                            </div>
                             <hr />
                             </div>
                            )}
                            <div>
                            <br />
                            <span>
                                <img src={defaultUser} alt="Avatar" width={35} className="useravatar"/>
                                <input type="text"  name="content" onKeyPress={this.handleKeyPress.bind(this,post)}   onChange={this.handleChangeComment}  className="form-control" placeholder="Commentaire" />
                            </span>
                            </div>
                        </div>
                    </div>


                </div>

                
            );
        }
        return (
            <div className="">
                <AgrationRx />
                <div className=" espace">
                    <h5>Votre fil d'actualité</h5>
                </div>
                    {data}
            </div>
        );
    }
}