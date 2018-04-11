<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ForumSubject extends Model
{
    protected $primaryKey = 'id';
    public $incrementing = false;

    public function parent() {
        return $this->belongsTo(Post::class, 'id','id');
    }

}
