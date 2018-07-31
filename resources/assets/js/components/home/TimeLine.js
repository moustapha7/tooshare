import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultUser from '../../../../images/defaultuserimage.png'
import AuthService from '../../services/AuthService';
import AgrationRx from './AgrationRx'
import Moment from 'react-moment';
export default class TimeLine extends Component {

    constructor() {
        super();
        this.state={
            data: [],
            content : '',

        }

        this.Auth= new AuthService();
        this.handleliked_post=this.handleliked_post.bind(this);
        this.handleChangeComment=this.handleChangeComment.bind(this);
        this.handleCommented_post=this.handleCommented_post.bind(this);
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
                data : response.data
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

        event.preventDefault();

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
                    console.log(response);
                
                }).catch(err=>{
                    console.log(err);
                })
        }
      }

    handleCommented_post(post)
    {
        
        event.preventDefault();
      console.log(post);
      
        const comment={
            content : this.state.content
        }
        e.preventDefault();
        console.log(comment);
      
    }


    render() {
        const user=this.props.User
        return (
            <div className="">
                <AgrationRx />
                <div className=" espace">
                    <h5>Votre fil d'actualité</h5>
                </div>
            {this.state.data.map((post,i)=>
                <div className="card card-body bg-fade espace "  key={i}>

                    <div className="card-heade">
                        <div className="userposthearder">
                                        <span>
                                            <a href="#" className="">
                                                <img src={defaultUser} alt="Avatar" width={45} className="useravatar"/>
                                                <div className="username">{post.user.first_name+" "+post.user.last_name} <br /><span className="usernameprofil">Etuidant</span><br /><span className="publishdate"><Moment fromNow ago>{post.created_at}</Moment></span></div>
                                            </a>
                                        </span>
                            <span className="pull-right"><i className="fa fa-cogs"></i></span>
                        </div>
                    </div>
                    <div className="card-body postcontenu">
                        <p className="card-text">{post.content}</p>
                       {post.files.map((file,j)=>
                          
                          <div className="post-image" key={j}>
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
                        <div className="commentaire">

                            <div className="contenucommentaire">
                                {post.comments.map((comment)=>
                                    <span>
                                    <img src={defaultUser} alt="Avatar" width={35} className="useravatar"/>
                                        <span className="username">{comment.user.first_name+" "+comment.user.last_name}  <span>{comment.content}</span></span>

                                    </span>

                                    )}

                            </div>
                            <span>
                                                <img src={defaultUser} alt="Avatar" width={35} className="useravatar"/>
                                                <input type="text"  name="content" onKeyPress={this.handleKeyPress.bind(this,post)}   onChange={this.handleChangeComment}  className="form-control"placeholder="Commentaire" />
                                            </span>
                        
                        </div>
                    </div>


                </div>

                
            )}
            </div>
        );
    }
}