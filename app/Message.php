<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    public function userSender(){
        return $this->belongsTo(User::class,'userExp_id');
    }
    public function userRecipient(){
        return $this->belongsTo(User::class,'userDest_id');
    }
}
