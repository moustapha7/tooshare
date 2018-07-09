<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $fillable = [
         'type'
    ];

    public function messages()
    {
        return $this->hasMany('App\Message','conversation_id')->latest();
    }

    public function latest_message()
    {
        // $messages = $this->messages()->first();
        return $this->hasMany('App\Message','conversation_id')->orderBy('created_at', 'desc');
    }

    public function users()
    {
        return  $this->belongsToMany('App\User', 'conversation_user', 'conversation_id', 'user_id');
    }
}
