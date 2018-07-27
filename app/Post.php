<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    public $fillable=['content','description','timeline_id'];



    public function users_liked()
    {
        return $this->belongsToMany('App\User', 'post_likes', 'post_id', 'user_id');
    }

    public function shares()
    {
        return $this->belongsToMany('App\User', 'post_shares', 'post_id', 'user_id');
    }

    public function notifications_user()
    {
        return $this->belongsToMany('App\User', 'post_follows', 'post_id', 'user_id');
    }

    public function reports()
    {
        return $this->belongsToMany('App\User', 'post_reports', 'post_id', 'reporter_id');
    }

    public function comments()
    {
        return $this->hasMany('App\Comment','post_id')->with('user')->latest()->where('parent_id', null)->with('user');
    }

    public function users() {
        return $this->belongsToMany(User::class, 'post_user', 'post_id', 'user_id')
            ->withPivot('action')
            ->withTimestamps();
    }

  /*  public function comments() {
        return $this->hasMany(Comment::class, 'post_id', 'id');
    }*/

    public function files(){
        return $this->belongsToMany('App\File','file_post','post_id','file_id');
    }

    public function user()
    {
        return $this->belongsTo('App\User','user_id');
    }
   public function timeline(){
        return $this->belongsTo('App\Timeline','timeline_id');
   }

  /*  public function getCreatedAtAttribute($value) {
        return Carbon::createFromFormat('Y-m-d h:i:s', $value)->diffForHumans();
    }
  */
}
