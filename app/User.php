<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'phone', 'email', 'password','mail_token','confirmed_at','delai_confirmation','gender','country','city','birthday','last_logged'
    ];

    public static $rules=[
        'email' => 'required|string|email|unique:users',
        'first_name' => 'required',
        'last_name'=>'required',
        'password'=> 'required|min:6',
        'phone'=>'required|unique:users|min:6'
        ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */

    public function saveTimline(){
     $timline=   Timeline::create([
            'type'=>'user',
            'username'=>$this->attributes['email'],
            'name'=>$this->attributes['first_name'],
            'about'=>'pour le moment je suis pas util peut etre un jour Insha allah '
        ]);
     $this->timeline()->associate($timline)->save();
    }


    public function setMail_tokenAttribute($value)
    {
        $this->attributes['mail_token'] =$value;
    }
    public function setConfirmed_atAttribute($value)
    {
        $this->attributes['confirmed_at'] =$value;
    }
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function timeline()
    {
        return $this->belongsTo('App\Timeline','timeline_id')->with('posts');
    }

   public function files(){
       return $this->hasMany(File::class,'user_id');
   }

    public function friendRequests()
    {
        return $this->belongsToMany('App\User', 'friend_requests', 'leader_id', 'friend_id')->withTimestamps();
    }


    public function followers()
    {
        return $this->belongsToMany('App\User', 'followers', 'leader_id', 'follower_id')->withPivot('status')->withTimestamps();
    }

    public function following()
    {
        return $this->belongsToMany('App\User', 'followers', 'follower_id', 'leader_id')->withTimestamps();
    }


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
        return $this->belongsToMany(User::class, 'friends', 'user_id','friend_id')->withTimestamps();
    }

    public function allFriends()
    {
        return $this->friends()->with('allFriends');
    }
   /* public function messages(){
        return $this->hasMany(Message::class);
    }*/

    public function settings(){
        return $this->belongsToMany(Setting::class, 'user_settigns', 'user_id', 'setting_id')
            ->withPivot('value')
            ->withTimestamps();
    }

    public function groups(){
        return $this->belongsToMany(Setting::class, 'user_groups', 'user_id', 'group_id');
    }
    public function conversations()
    {
        return $this->belongsToMany('App\Conversation', 'conversation_user', 'user_id', 'conversation_id');
    }

    public function messages()
    {
        return $this->conversations()->with('messages');
    }

    /*public function posts() {
        return $this->belongsToMany(Post::class, 'post_user', 'user_id', 'post_id')
            ->withPivot('action')
            ->withTimestamps();
    }*/

    public function InitTimelinePosts(){
        foreach($this->followers as $follower){
              foreach($follower->posts as $post){
                  if($post->created_at<=now() && $post->created_at >=now()->addWeeks(3)){
                      $post->timeline()->associate($this->timeline);
                  }

              }
            //$this->timeline()
        }


    }


    public function posts(){
        return $this->hasMany('App\Post','user_id','id');
    }
    /* jwt methodes  */

    //The first method gets the identifier that will be stored in the subject claim of the JWT
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    //allow us to add any custom claims we want added to the JWT
    public function getJWTCustomClaims()
    {
        return [];
    }


}


