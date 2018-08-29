@extends('layouts.app')

@section('content')
    <div class="row">
        <form action="" method="post" class="col-6 offset-3">
            @csrf
            

            <label>Nom de l'entreprise</label>
            <div class="form-group">
                <input type="text" class="form-control" name="nomEntreprise" required="required" >
            </div>

            <label>NIEA</label>
            <div class="form-group">
                <input type="text" class="form-control" name="niea" required="required" >
            </div>

            <label>Domaine 1</label>
            <div class="form-group">
                <select name="domaine1" class="form-control" required="required">
                     <option>...selectionner    </option>
                   
                    <option value="Technologie"></option>
                   
                </select>
            </div>

             <label>Domaine 2</label>
            <div class="form-group">
                <select name="domaine2" class="form-control" required="required">
                     <option>...selectionner    </option>
                   
                    <option value="Technologie"></option>
                   
                </select>
            </div>

             <label>Domaine 3</label>
            <div class="form-group">
                <select name="domaine3" class="form-control" required="required">
                     <option>...selectionner    </option>
                   
                    <option value="Technologie"></option>
                   
                </select>
            </div>


            <label>Description</label>
            <div class="form-group">
                <textarea type="text" class="form-control" name="description" required="required"></textarea>
            </div>

            <label>Adresse</label>
            <div class="form-group">
                <input type="text" class="form-control" name="adresse" required="required">
            </div>

            <label>Ville, Etat</label>
            <div class="form-group">
                <input type="text" class="form-control" name="villeEtat" required="required">
            </div>

             <label>Code Postal</label>
            <div class="form-group">
                <input type="text" class="form-control" name="codePostal" required="required" >
            </div>

            <label>Téléphone </label>
            <div class="form-group">
                <input type="text" class="form-control" name="telephone" required="required">
            </div>

            <label>Email </label>
            <div class="form-group">
                <input type="text" class="form-control" name="email" required="required">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Valider</button>
            </div>
        </form>
    </div>
@endsection
