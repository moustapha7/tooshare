<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    public $fillable=['file_name','original_name','file_Resize_name'];

    public function post(){
        $this->belongsTo(Post::class,'post_id');
    }
}
