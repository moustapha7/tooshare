import React, { Component } from 'react';
import Header from '../Header';

export default class CreationEntreprise extends Component {
    render() {
        return (
            <div className="user-profil">
                <Header link="logout"/>



                <div className="container">
                   
                    <div class="card ">
                            <a class="btn btn-primary"> <h3 >Création Entreprise</h3></a>
                    </div>
                    <form>
                                <div class="form-row ">
                                    <div class="form-group col-md-6">
                                    <label for="inputlg">Nom Entreprise</label>
                                    <input type="text" class="form-control" id="name_entreprise" />
                                    </div>
                               
                                    <div class="form-group col-md-6">
                                    <label for="adress_entreprise">Adresse</label>
                                    <input type="text" class="form-control" id="adress_entreprise" />
                                    </div>
                                </div>
                                    
                                
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="phone_entreprise">Telephone</label>
                                    <input type="text" class="form-control" id="phone_entreprise" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="text" class="form-control" id="email" />
                                    </div>
                                    
                                
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="ville_entreprise">Ville, Etat</label>
                                    <input type="text" class="form-control" id="ville_entreprise" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="codePostal_entreprise">Code Postal</label>
                                    <input type="text" class="form-control" id="codePostal_entreprise" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="ninea_entreprise">NINEA</label>
                                    <input type="text" class="form-control" id="ninea_entreprise" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="domaine1">Donmaine Activité 1</label>
                                    <input type="text" class="form-control" id="domaine1_entreprise" />
                                    </div>
                                </div>
                                <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="domaine2">Donmaine Activité 2</label>
                                    <input type="text" class="form-control" id="domaine2_entreprise" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="domaine3">Donmaine Activité 3</label>
                                    <input type="text" class="form-control" id="domaine3_entreprise" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="description_entreprise">Description</label>
                                    <textarea class="form-control" id="description_entreprise" rows="3"></textarea>
                                    </div>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Enregistrer</button>
</form>
                   
                </div>

                
               
                    
            </div>
        );
    }
}

                            