<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    public $fillable=['name'];
    public function users(){
        return $this->belongsToMany(User::class,'formation_user','user_id','formation_id');
    }
}
