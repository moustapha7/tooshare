import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class PriveUniversiteTimeLine extends Component {
    render() {
        return (
        
        <div >   
            <div class="col-sm-12">      
            <div class="card text-right">
                <div class="card-body">
                        <button type="button" class="btn btn-primary">Creer une Publication</button>
                        <button type="button" className="btn btn-primary">Album Photo / Vidéo</button>
                        <button type="button" className="btn btn-primary">Publier un Cour</button>
                 </div>

             </div>
             <div class="card text-right">
                <div class="card-body">
               
                 </div>

             </div>
             <div class="card text-right">
                <div class="card-body">
                 </div>

             </div>
             </div>
             </div>
        );
    }
}