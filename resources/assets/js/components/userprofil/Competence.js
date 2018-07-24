import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class SideBarDroit extends Component {
    render() {
        return (
            <div >
            
            <div>


<div className="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Ajouter Une Nouvelle Compétence</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body mx-3">
                <div className="md-form mb-5">
                   
                    <label data-error="wrong" data-success="right" for="form32">Nom de la Compétence</label>
                    <input type="text" id="form32" className="form-control validate"/>
                    
                </div>

                <div className="md-form">
                   
                    <label data-error="wrong" data-success="right" for="form8">Description de la Compétence</label>
                    <textarea type="text" id="form8" className="md-textarea form-control" rows="4"></textarea>
                </div>

            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-primary">Enregistrer</button>
            </div>
        </div>
    </div>
</div>

<div className="text-center">
    <a href="" className="btn btn-primary" data-toggle="modal" data-target="#modalLoginForm">Ajouter Une Compétence</a>
</div>





            </div>
        </div>
        );
    }
}







