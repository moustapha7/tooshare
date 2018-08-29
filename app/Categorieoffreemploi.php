<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorieoffreemploi extends Model
{
     protected $key=['id'];
    protected $fillable = ['libelle','description'];
    protected $dates = ['created_at','updated_at'] ;

   public function offreemplois()
    {
    	
    	 return $this->hasMany(Offreemplois::class);
       
    }

}
