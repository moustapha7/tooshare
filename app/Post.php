<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function users() {
        return $this->belongsToMany(User::class, 'post_user', 'post_id', 'user_id')
            ->withPivot('action')
            ->withTimestamps();
    }

    public function comments() {
        return $this->hasMany(Comment::class, 'post_id', 'id');
    }
}
