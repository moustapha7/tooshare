import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header';

export default class CreationUniversite extends Component {
    render() {
        return (
            <div className="user-profil">
                <Header link="logout"/>



                <div className="container">
                   
                    <div class="card ">
                            <a class="btn btn-primary"> <h3 >Création d'Universite</h3></a>
                    </div>
                    <form>
                                <div class="form-row ">
                                    <div class="form-group col-md-6">
                                    <label for="name_universite">Nom de l'Universite</label>
                                    <input type="text" class="form-control" id="name_universite" />
                                    </div>
                               
                                    <div class="form-group col-md-6">
                                    <label for="adress_universite">Adresse</label>
                                    <input type="text" class="form-control" id="adress_universite" />
                                    </div>
                                </div>
                                    
                                
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="phone_universite">Telephone</label>
                                    <input type="text" class="form-control" id="phone_universite" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="text" class="form-control" id="email" />
                                    </div>
                                    
                                
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="ville_universite">Ville, Etat</label>
                                    <input type="text" class="form-control" id="ville_universite" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="codePostal_universite">Code Postal</label>
                                    <input type="text" class="form-control" id="codePostal_universite" />
                                    </div>
                                    
                                
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="description_universite">Description</label>
                                    <textarea class="form-control" id="description_universite" rows="3"></textarea>
                                    </div>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Enregistrer</button>
</form>
                   
                </div>

                
               
                    
            </div>
        );
    }
}

                            