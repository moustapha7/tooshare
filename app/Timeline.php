<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timeline extends Model
{
    public $table = 'timelines';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'username',
        'name',
        'about',
        'avatar_id',
        'cover_id',
        'cover_position',
        'type',
        'deleted_at',
    ];

    public function posts()
    {
        return $this->hasMany('App\Post');
    }

    public function user()
    {
        return $this->hasOne('App\User');
    }

    public function DayTimline(){
        /*   foreach($this->user()->allFriends as $freids){

            }
        */
    }

    public function avatar(){
        return  $this->belongsTo('App\File');
    }

    public function cover(){
        return  $this->belongsTo('App\File');
    }


}
