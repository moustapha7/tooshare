@extends('layouts.app')

@section('content')
    <div class="row">
        <form action="" method="post" class="col-6 offset-3">
            @csrf
            

            <label>Titre</label>
            <div class="form-group">
                <input type="text" class="form-control" name="titre" required="required" >
            </div>

            <label>Description</label>
            <div class="form-group">
                <textarea type="text" class="form-control" name="description" required="required" ></textarea>
            </div>

            <label>Catégorie</label>
            <div class="form-group">
                <select name="categorie" class="form-control" required="required">
                     <option>...selectionner    </option>
                   
                    <option value="Technologie"></option>
                   
                </select>
            </div>

             <label>Type de contrat</label>
            <div class="form-group">
                <select name="typeContrat" class="form-control" required="required">
                    <option>...selectionner un contrat   </option>
                   
                    <option value="CDD">CDD</option>
                    <option value="CDI">CDI</option>
                    <option value="Stage">Stage</option>
                    <option value="Travail temporaire">Travail Temporaire</option>
                    <option value="Alternance">Alternance</option>
                    <option value="Independant">Indépendant</option>
                    <option value="Franchise">Franchise</option>
                   
                </select>
            </div>

             <label>Niveau d'Etude</label>
            <div class="form-group">
                <select name="niveauEtude" class="form-control" required="required">
                     <option>...selectionner un niveau d'étude    </option>
                   
                    <option value="Bac+1">Bac+1</option>
                    <option value="Bac+2">Bac+2</option>
                    <option value="Bac+3">Bac+3</option>
                    <option value="Bac+4">Bac+4</option>
                    <option value="Bac+5">Bac+5</option>
                   
                </select>
            </div>


            <label>Salaire min </label>
            <div class="form-group">
                <input type="text" class="form-control" name="salaireMin" required="required">
            </div>

            <label>Salaire max</label>
            <div class="form-group">
                <input type="text" class="form-control" name="salaireMax" required="required">
            </div>

             <label>Langues requises</label>
            <div class="form-group">
                <select name="languesRequises" class="form-control" required="required">
                     <option>...selectionner une langue   </option>
                   
                    <option value="Français">Français</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Espagnol">Espagnol</option>
                    <option value="Portuguais">Portuguais</option>
                   
                </select>
            </div>

             <label>Date d'Expiration</label>
            <div class="form-group">
                <input type="date" class="form-control" name="dateExpiration" required="required" >
            </div>

           

            <div class="form-group">
                <button class="btn btn-primary">Enregistrer</button>
            </div>
        </form>
    </div>
@endsection
