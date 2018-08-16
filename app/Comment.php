<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable=['content','parent_id'];


   /* protected $primaryKey = 'id';
    public $incrementing = false;
*/
/*    public function parent(){
        return $this->belongsTo(Post::class, 'id', 'id');
    }*/

    public function user()
    {
        return $this->belongsTo('App\User')->with('userInfo');
    }


    public function post(){
        return $this->belongsTo(Post::class, 'post_id', 'id');
    }
    public function comments_liked()
    {
        return $this->belongsToMany('App\User', 'comment_likes', 'comment_id', 'user_id');
    }

    public function replies()
    {
        return $this->hasMany('App\Comment', 'parent_id', 'id')->latest();
    }
}
