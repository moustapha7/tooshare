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
            categories :[],
            formations:[],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.selectTypeFormation = this.selectTypeFormation.bind(this);
       this.selectFormation = this.selectFormation.bind(this);
    }
  
    componentWillMount(){
        console.log("formation");
         this.Cv.getAllCategories().then(res=>{
                this.setState({categories: res});
                console.log("formation"+this.state.categories);
            }).catch(err=>{
               Console.log("Resolver "+ err);
            })
            
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
    selectTypeFormation (event) {
       this.setState({categorie_id: event.target.value});
        this.Cv.getAllFormationByCategories(event.target.value).then(res=>{
            this.setState({formations: res});
        }).catch(err=>{
           Console.log("Resolver "+ err);
        })


    }
    
    selectFormation (event) {
        this.setState({formation_id: event.target.value});
        console.log(this.state.formation_id);
     }
    handleSubmit(event) {
        event.preventDefault();
        alert("ok");
        this.setState({user_id: this.props.User.id})
        
            const userformation = {
                formation_id: this.state.formation_id,
                user_id : this.state.user_id,
                lieu: this.state.lieu,
                datedebut:this.state.datedebut,
                datefin:this.state.datefin,
            };

            this.Cv.AjoutUserFormation(userformation).then(response=>{
                this.props.router.push("home",response);
                alert(response);
            }).catch(err=>{
                alert(err);
            })



     
    }
    render() {     
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
                <form role="form" method="POST" onSubmit={this.handleSubmit}>
              
                    <div class="form-group">
                        <label for="sel1">Type de Formation:</label>
                        <select class="form-control" id="sel1"  onChange={this.selectTypeFormation} >
                        {this.state.categories.map((cat)=>
                                     <option value={cat.id}>{cat.name}</option>

                                    )}
                        </select>
                        
                    </div>


                     <div class="form-group">
                        <label for="sel2">Formation:</label>
                        <select class="form-control" id="sel2" onChange={this.selectFormation}>
                        {this.state.formations.map((formation)=>
                                     <option value={formation.id}>{formation.name}</option>

                                    )}
                        </select>
                        
                    </div>
                    <div className="col-md-6">
                            <div className="form-group">
                             <label for="birthday">Date de debut</label>
                                 <input id="datedebut" type="date" className="form-control" ref="datedebut" name="datedebut"  required autoFocus placeholder="Date de debut" onChange={this.handleChange}/>
                                                          
                             </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="birthday">Date de fin</label>
                                    <input id="datefin" type="date" className="form-control" ref="datefin" name="datefin"  required autoFocus placeholder="Date de fin" onChange={this.handleChange}/>
                                                          
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                    <label for="lieu">Lieu</label>
                                    <input type="text" class="form-control" id="lieu"  ref="lieu" name="lieu"  required autoFocus  onchange={this.handleChange}/>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Enregister<i className="fa fa-paper-plane-o ml-1"></i></button>
            </div>
                    </form>
                    
                </div>
                                            

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






