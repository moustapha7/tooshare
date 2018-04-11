<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function roles(){
        return $this->belongsToMany(Role::class,'role_user', 'user_id', 'role_id');
    }

    public function skills(){
        return $this->belongsToMany(Skill::class,'skill_user','user_id','skill_id');
    }
    public function experiences(){
        return $this->hasMany(Experience::class);
    }

    public function formations(){
        return $this->belongsToMany(Formation::class, 'formation_user', 'user_id', 'formation_id');
    }

    public function friends()
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id','friend_id');
    }

    public function allFriends()
    {
        return $this->friends()->with('allFriends');
    }
    public function messages(){
        return $this->hasMany(Message::class);
    }

    public function settings(){
        return $this->belongsToMany(Setting::class, 'user_settigns', 'user_id', 'setting_id')
            ->withPivot('value')
            ->withTimestamps();
    }

    public function groups(){
        return $this->belongsToMany(Setting::class, 'user_groups', 'user_id', 'group_id');
    }

    public function posts() {
        return $this->belongsToMany(Post::class, 'post_user', 'user_id', 'post_id')
            ->withPivot('action')
            ->withTimestamps();
    }
}


