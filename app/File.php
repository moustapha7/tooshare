<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    public $fillable=['file_name','original_name','file_Resize_name'];

    public function posts(){
        return $this->belongsToMany(Post::class,'file_post','file_id','post_id');
    }

    public function user(){
      return  $this->belongsTo(User::class);
    }
}
