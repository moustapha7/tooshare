<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    public $fillable=['name'];
    public function users(){
        return $this->belongsToMany(User::class,'skill_user','user_id','skill_id');
    }
}
