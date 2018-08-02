import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class SideBarDroit extends Component {
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
                <form role="form">
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







