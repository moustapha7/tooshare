<?php

namespace App\Http\Controllers\Api;

use App\Notifications\FriendSheapNotification;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class FriendsheapController extends Controller
{

    /**
     * FriendsheapController constructor.
     */
    public function __construct()
    {
    }

    public function DemandeFriend(Request $request){
        $user= User::find($request->friend_id);
        $user->notify(new FriendSheapNotification(User::find($request->user_id)));
        return response()->json(['message'=>'succes'],200);
    }
}
