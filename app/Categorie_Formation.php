<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorie_Formation extends Model
{
    protected $fillable = [
        'name'
   ];
   public function formations()
   {
       return $this->hasMany(Formation::class);
   }
}
