import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class PriveEntrepriseTimeLine extends Component {
    render() {
        return (
        
        <div >         
                 <div class="card text-right">
                <div class="card-body">
                <button type="button" className="btn btn-primary pull-right">Ajouter un Offre d'Emploi</button>
            </div>

             </div>
            <div class="card text-center">
         
            <div class="row">


 
    <div class="col-sm-3">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Tout les Offres d'emploi</h3>
                <p class="card-text">67 Offre d'Emploi proposé cette Année</p>
                <a href="#" class="btn btn-primary">Voir Details</a>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Offres Publiés</h3>
                <p class="card-text">67 Offre d'Emploi proposé cette Année</p>
                <a href="#" class="btn btn-primary">Voir Details</a>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Offres Expiré</h3>
                <p class="card-text">67 Offre d'Emploi proposé cette Année</p>
                <a href="#" class="btn btn-primary">Voir Details</a>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Offres d'emploi en cours</h3>
                <p class="card-text">67 Offre d'Emploi proposé cette Année</p>
                <a href="#" class="btn btn-primary">Voir Details</a>
            </div>
        </div>
    </div>

    
    

</div>
            </div>
           
            <div class="row">

    <div class="col-sm-6">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Toutes les candidatures</h3>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telephone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Moustapha</td>
                    <td>Ndour</td>
                    <td>Moustapha@ndour.com</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Fary</td>
                    <td>Diop</td>
                    <td>diop@fat.com</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>ka</td>
                    <td>ka@lary.com</td>
                    </tr>
                </tbody>
                </table>
                <a href="#" class="btn btn-primary">Voir +</a>
            </div>
        </div>
    </div>
    
    <div class="col-sm-6">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Nombres de vues</h3>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telephone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Moustapha</td>
                    <td>Ndour</td>
                    <td>Moustapha@ndour.com</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Fary</td>
                    <td>Diop</td>
                    <td>diop@fat.com</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>ka</td>
                    <td>ka@lary.com</td>
                    </tr>
                </tbody>
                </table>
                <a href="#" class="btn btn-primary">Voir +</a>
            </div>
        </div>
    </div>

</div>
             </div>
        );
    }
}