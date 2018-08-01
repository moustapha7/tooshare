import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class PublicUniversiteSideBarDroite extends Component {
    render() { 
        const user=this.props.User
        return (
            <div >         
                
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Universite Cheikh Anta DIOP</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional contentWith supporting text below as a natural lead-in to additional content.</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Abonnés</li>
                            <li class="list-group-item">Certificat délivrés</li>
                            <li class="list-group-item">Diplome Délivrés</li>
                        </ul>
                    </div>
                </div>
               
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title text-center">Dernieère formation en Ligne</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Gestion des ressources Humaines</li>
                            <li class="list-group-item">Bien débuter avec Java</li>
                            <li class="list-group-item">Sociologie de l'enfant</li>
                        </ul>
                </div>

                 </div>
                 </div>

        );
    }
}