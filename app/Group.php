<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function users(){
        return $this->belongsToMany(User::class,'user_groups','group_id','user_id')
            ->withTimestamps();
    }
}
