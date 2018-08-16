import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import defaultBarner from '../../../../images/barnerProfil.jpg'
import AuthService from "../../services/AuthService";

export default class Barner extends Component {
    constructor(props) {
        super(props)
        this.state={
            cover: defaultBarner,

        }
        this.Auth=new AuthService();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id,event) {
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
                this.setState({useravatar: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
            this.updateAvatart(id);
        }
    }

    updateAvatart(id) {
       // alert('Timeline Id: '+ id);
        const data={
            file:this.state.file,
            timline_id:id
        }

       data.file =document.querySelector('#file');
        var formdata= new FormData();
        formdata.append('timline_id',data.timline_id);
        for ( var pas = 0; pas < data.file.files.length; pas++) {
            formdata.append('file[]',data.file.files[pas]);
        }
        const config= {
             headers: {
                'Authorization': 'Bearer ' + this.Auth.getToken(),
                'Content-Type': 'multipart/form-data'
             }
         }
         axios.post('http://localhost:8000/api/udateCover',formdata,config).then(res=>{
                // alert(res.succes);
             }).catch(err=>{
                 console.log(err);
         })
    }
    render() {
        const timeline_id =  this.props.User.timeline_id;
        return (
            <div>
            <div className="card bg-faded ">
                   <div className="barner " style={!!(this.props.UserCover)? {backgroundImage: 'url(http://localhost:8000/covers/'+ this.props.UserCover.file_Resize_name +')'} : {backgroundImage: 'url('+defaultBarner+')'}}>
                      
                       <label htmlFor="file" className="medialabel btn btn-changer" >Charger de couverture</label>
                        <input className="form-control" id="file" type="file" name="file" onChange={this.handleChange.bind(this,timeline_id)} multiple />
                   </div>
            </div>
            </div>

        );
    }
}