<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Domaines extends Model
{
    protected $key=['id'];
    protected $fillable = ['name','description'];
    protected $dates = ['created_at','updated_at'] ;
}
