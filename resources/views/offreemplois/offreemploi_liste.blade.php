@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-12 text-right">
            <div class="">
                <a class="btn btn-default" href="{{ route('offreemploi_create') }}">Ajouter</a>
            </div>
        </div>
    </div><hr>
    <div class="row">
        <div class="col-12">

            <div class="col-12 offset-2">
                
                @if (count($offreemplois) > 0)
                    <table class="table table-responsive">
                        <thead>
                            <th with="80px">No</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Categorie</th>
                            <th>Type Contrat</th>
                            <th>Niveau d'Etude</th>
                            <th>Sa </th>
                            <th>Libellé </th>
   
                            <th>Action</th>
                        </thead>
                        <tbody>

                        @foreach ($demandes as $demande)
                            <tr>
                                 <td>{{ $demande->id }}</td>
                                <td>{{ App\Demande::find($demande->entreprises_id)->entreprise->nomEntreprise}}</td>
                                <td>{{ $demande->niveauFormation }}</td>
                                <td>{{ $demande->nbreAnneeExperience }}</td>
                                 <td>{{ $demande->dureeContrat}}</td>
                                 <td>{{ $demande->dateLimite}}</td> 

                               <td>{{ $demande->specialites_id}}</td>
                                <td>{{ $demande->libelleSpecialite}}</td> 
                                <td>
                                    <a class="btn btn-primary" href="{{ route('demande_edit', ['id' => $demande->id ] ) }}">
                                        edit
                                    </a>
                                    <a class="btn btn-danger" href="{{ route('demande_delete', ['id' => $demande->id ] ) }}">
                                        delete
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                @else
                    <div class="alert alert-danger">
                        <strong>Pas de demandes dans la base de données</strong>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection
