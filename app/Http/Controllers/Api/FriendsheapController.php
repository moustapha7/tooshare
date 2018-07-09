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
        $this->middleware('auth:api');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function DemandeFriend(Request $request){
        $user= User::find($request->friend_id);
        $user->notify(new FriendSheapNotification(Auth::user()));
        return response()->json(['message'=>'succes'],200);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function DemandeTraited(Request $request){
      $user=User::find(Auth::user());
      $user->friends()->attach($request->friend_id);
        return response()->json(['message'=>'succes'],200);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function DeleteFriendSheap(Request $request){
        $user=User::find(Auth::user());
        $user->friends()->detach($user->id,$request->id)->save();
        return response()->json(['message'=>'succes'],200);
    }

    public function Follow(Request $request){
        Auth::user()->followers()->attach($request->follower_id)->save();
    }

    public function Unfollow(){

    }

}
