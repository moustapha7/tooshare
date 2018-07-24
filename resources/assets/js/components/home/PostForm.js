import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import AuthService from "../../services/AuthService";
import TimeLine from './TimeLine'

export default class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            file:null,
            content:''
        };
        this.Auth=new AuthService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShowMediatoshare = this.handleShowMediatoshare.bind(this);

        this.mystyle = ['mediatoshare'];
    }

    handleShowMediatoshare(event){
        event.preventDefault();
        this.mystyle.push('show');
      //  alert(this.mystyle);
    }

    handleChange(event) {
        // this.setState({login: event.target.value});
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const data={
            file:this.state.file,
            content:this.state.content
        }

       data.file =document.querySelector('#file');
        var formdata= new FormData();

        formdata.append('content',data.content);

        for ( var pas = 0; pas < data.file.files.length; pas++) {
            formdata.append('file[]',data.file.files[pas]);

        }


       // console.log(formdata.values());
        const config= {
             headers: {
                       'Authorization': 'Bearer ' + this.Auth.getToken(),
                       'Content-Type': 'multipart/form-data'
             }
         }
            //headers['Authorization'] = 'Bearer ' + this.Auth.getToken()

         axios.post('api/posts',formdata,config).then(res=>{
                 console.log(res);
             }).catch(err=>{
                 console.log(err);
         })
    }

    render() {
        const user=this.props.User
        return (
            <div>
            <div className="card card-body bg-faded">
                <form className="form-horizontal"  role="form" encType="multipart/form-data" method="POST" onSubmit={this.handleSubmit}>
                    <h5>Quoi de Neuf a partager ?</h5>
                    <button className="btn bg-tooshare pull-right btnpartager" type="submit">Partager</button>
                    <ul className="list-inline">
                        <li><a href=""><i className="fa fa-upload"></i></a></li>
                        <li><a href="" onClick={this.handleShowMediatoshare} ><i className="fa fa-camera"></i></a></li>
                        <li><a href=""><i className="fa fa-map-marker"></i></a></li>
                    </ul>
                    <div className={this.mystyle.join(' ')} >
                        <label htmlFor="file" className="medialabel"></label>
                        <input className="form-control" id="file" type="file" name="file" onChange={this.handleChange} multiple />
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" placeholder="Mettez a jour votre statut" name="content" onChange={this.handleChange}></textarea>
                    </div>
                </form>

            </div>
                <TimeLine User={this.props.User} interval={10000} content={this.state.content}/>
            </div>
        );
    }
}