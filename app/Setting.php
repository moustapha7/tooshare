<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    public function users(){
        return $this->belongsToMany(User::class,'user_settigns','user_id','setting_id')
            ->withPivot('value')
            ->withTimestamps();
    }
}
