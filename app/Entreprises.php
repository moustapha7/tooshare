<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entreprises extends Model
{
    protected $key=['id'];
    protected $fillable = ['nomEntreprise','ninea','domaine1','domaine2','domaine3','description','adresse','villeEtat','codePostal','telephone','email','userId'];
    protected $dates = ['created_at','updated_at'] ;
}
