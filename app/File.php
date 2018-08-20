<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    public $fillable=['file_name','original_name','file_Resize_name','user_id'];

    public function posts(){
        return $this->belongsToMany('App\Post','file_post','file_id','post_id');
    }

    public function user(){
      return  $this->belongsTo('App\User','user_id');
    }

    public function avatar()
    {
        return $this->hasOne('App\Timeline', "avatar_id");
    }

    public function cover()
    {
        return $this->hasOne('App\Timeline', "cover_id");
    }
}
