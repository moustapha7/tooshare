import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import CvService from '../../services/CvService';
import AuthService from '../../services/AuthService';

export default class Formation extends Component {
    constructor(props) {

        super(props);
       this.Cv=new CvService();
       this.Auth= new AuthService();
        this.state = {
            user_id:'',
            categorie_id:'',
            formation_id :'',
            datedebut: '',
            datefin: '',
            lieu : '',
            categories :[
                {id: 1, name: "INFORMATIQUE", created_at: null, updated_at: null}
                ,
                {id: 2, name: "MANAGEMENT", created_at: null, updated_at: null}
              ,
                {id: 3, name: "QUALITÉ - ORGANISATION", created_at: null, updated_at: null}
               ,
                {id: 4, name: "TRANSPORT LOGISTIQUE", created_at: null, updated_at: null},
                {id: 5, name: "COMPTABILITÉ GESTION", created_at: null, updated_at: null}],
            formations:{},
        }
        this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }
  
    componentWillMount(){
        console.log("formation");
         /* this.Cv.getAllCategories.then(res=>{
              console.log(res);
                this.setState({categories: res});
                console.log("formation"+this.state.categories);
            }).catch(err=>{
               Console.log("Resolver "+ err);
            })
            */
           // console.log(this.Cv.loadCommentsFromServer());
            console.log("ok");
           // console.log(this.Cv.getAllCategories());
          //  this.setState({categories: this.Cv.getAllCategories()});
            console.log("test");
            console.log(this.state.categories)
        
    } 
    componentWillUnmount () {
        ths.setState({categories: null});
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
        // this.setState({login: event.target.value});
    }
    render() {
     let categories = this.state.categories;
      let optionItems;
      optionItems =(
            categories.forEach(element => {
             <option value={element.id}>{element.name}</option>;
            })); 
            console.log(optionItems)         
        return (
            <div >
               
            <div>
<div className="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Ajouter Une Nouvelle Formation</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body mx-3">
                <div className="md-form mb-5">
                <form role="form">
                <div>
                <label >CAT:</label>
                <select>{this.state.categories.map(element => {
             <option value={element.id}>{element.name}</option>
            })}</select>
                </div>
                <div class="form-group">
                        <label for="sel3">Test:</label>
                        <select class="form-control" id="sel3">
                        {optionItems}
                        <option value="1">"Okkkkk"</option>
                        <option>1</option>
                        <option>2</option>
                        </select>
                        
                    </div>
              
                    <div class="form-group">
                        <label for="sel1">Type de Formation:</label>
                        <select class="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        
                    </div>


                     <div class="form-group">
                        <label for="sel1">Formation:</label>
                        <select class="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        
                    </div>
                    </form>
                    
                </div>
                                                         <div className="col-md-6">
                                                            <div className="form-group">
                                                            <label for="birthday">Date de debut</label>
                                                            <input id="date_debut" type="date" className="form-control" ref="date_debut" name="date_debut"  required autoFocus placeholder="Date de debut" onChange={this.handleChange}/>
                                                          
                                                        </div>
                                                        </div>


                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                            <label for="birthday">Date de fin</label>
                                                            <input id="date_debut" type="date" className="form-control" ref="date_debut" name="date_debut"  required autoFocus placeholder="Date de debut" onChange={this.handleChange}/>
                                                          
                                                        </div>
                                                        </div>
                <div className="md-form">
                   
                    <label data-error="wrong" data-success="right" for="form32">Lieu</label>
                    <input type="text" id="form32" className="form-control validate"/>
                </div>

            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-primary">Enregister<i className="fa fa-paper-plane-o ml-1"></i></button>
            </div>
        </div>
    </div>
</div>

<div className="text-center">
    <a href="" className="btn btn-primary" data-toggle="modal" data-target="#modalContactForm">Ajouter Une Formation</a>
    
</div>









            </div>
        </div>
        );
    }
}






