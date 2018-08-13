<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    public $fillable=['name','description'];

    public function categorie_Formations()
    {
        return $this->belongsTo(Categorie_Formation::class);
    }

    public function users(){
        return $this->belongsToMany(User::class,'formation_user','formation_id','user_id');
    }
}
