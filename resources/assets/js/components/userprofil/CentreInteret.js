import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class SideBarDroit extends Component {
    render() {
        return (
            <div >
            
            <div>



<div class="modal fade" id="modalSubscriptionForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Nouveau Centre d'Interet</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body mx-3">
                <div class="md-form mb-5">
                   
                    <label data-error="wrong" data-success="right" for="form32">Nom du Centre d'Interet</label>
                    <input type="text" id="form32" class="form-control validate"/>
                    
                </div>

                <div class="md-form">
                   
                    <label data-error="wrong" data-success="right" for="form8">Description du Centre d'Interet</label>
                    <textarea type="text" id="form8" class="md-textarea form-control" rows="4"></textarea>
                </div>

            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-primary">Enregistrer<i class="fa fa-paper-plane-o ml-1"></i></button>
            </div>
        </div>
    </div>
</div>

<div class="text-center">
    <a href="" class="btn btn-primary" data-toggle="modal" data-target="#modalSubscriptionForm">Ajouter Un Centre d'Interet</a>
</div>








            </div>
        </div>
        );
    }
}







