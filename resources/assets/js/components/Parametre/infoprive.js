import React, { Component } from 'react';

export default class Infoprive extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Example Component</div>
                                    
                            <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="inputPassword4">Mot de Passe Actuel</label>
                                    <input type="password" class="form-control" id="inputPassword4" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="inputPassword4">Nouveau Mot de Passe</label>
                                    <input type="password" class="form-control" id="inputPassword4" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="inputPassword4">Confirmez Votre Mot de Passe</label>
                                    <input type="password" class="form-control" id="inputPassword4" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="indice_memoire">Indice de Mémoire</label>
                                    <input type="texte" class="form-control" id="indice_memoire" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
