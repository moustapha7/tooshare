<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Offreemplois extends Model
{
    protected $key=['id'];
    protected $fillable = ['titre','description','categorie_id','typeContrat','niveauEtude','salaireMin','salaireMax','languesRequises','dateExpiration'];
    protected $dates = ['created_at','updated_at'] ;

    public function categorieoffreemploi()
    {
    
       return $this->belongsTo('App\Categorieoffreemploi','categorie_id');

        
    }

}
