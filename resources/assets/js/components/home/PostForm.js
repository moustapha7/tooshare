import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import AuthService from "../../services/AuthService";
import TimeLine from './TimeLine'
import defaulteFile from '../../../../images/default.jpg'
import EmojiPicker from 'emoji-picker-react';

export default class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            file:null,
            content:'',
            addClass: false,
            image: defaulteFile,
            addPostClass: false
        };
        this.Auth=new AuthService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggle(event) {
        event.preventDefault();
        this.setState({addClass: !this.state.addClass});
        if(!this.state.addPostClass){
            this.setState({addPostClass: !this.state.addPostClass});
        }
    }
    togglePost(event) {
        event.preventDefault();
        this.setState({addPostClass: !this.state.addPostClass});
    }
    handleChange(event) {
        // this.setState({login: event.target.value});
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
       // console.log("Image detail : Value ="+ value + " Name = "+ name )

        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
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
        let mystyle = ['mediatoshare'];
        let postformstyle = ['card card-body bg-faded'];
        if(this.state.addClass) {
            mystyle.push('show-media card card-body nopadding post-form');
        }
        if(this.state.addPostClass) {
            postformstyle.push(' post-formIn');
        }
        return (
            <div>
            <div className={postformstyle.join(' ')}>
                <form className="form-horizontal"  role="form" encType="multipart/form-data" method="POST" onSubmit={this.handleSubmit} >
                    <h5>Quoi de Neuf a partager ?</h5>
                    <button className="btn bg-tooshare pull-right btnpartager" type="submit">Partager</button>
                    <ul className="list-inline">
                        <li><a href="#" onClick={this.toggle.bind(this)}><i className="fa fa-upload"></i></a></li>
                        <li><a href="#" onClick={this.toggle.bind(this)} ><i className="fa fa-camera"></i></a></li>
                        <li><a href="#" onClick={this.toggle.bind(this)}><i className="fa fa-map-marker"></i></a></li>
                    </ul>
                    <div className={mystyle.join(' ')}>
                        <label htmlFor="file" className="medialabel" style={{backgroundImage: 'url('+ this.state.image +')'}}></label>
                        <input className="form-control" id="file" type="file" name="file" onChange={this.handleChange.bind(this)} multiple />
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control " placeholder="Mettez a jour votre statut" name="content" onChange={this.handleChange} onClick={this.togglePost.bind(this)}></textarea>
                    </div>
                </form>
            </div>
                <TimeLine User={this.props.User} interval={10000} content={this.state.content}/>
            </div>
        );
    }
}
