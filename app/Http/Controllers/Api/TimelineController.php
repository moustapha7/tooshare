<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TimelineController extends Controller
{

    /**
     * TimelineController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getUserTimeline(){
        foreach (Auth::user()->followers as $follower){
             foreach($follower->posts as $post){
                 if($post->timeline->id !=Auth::user()->timeline->id){
                     $post->timeline()->associate(Auth::user()->timeline)->save();
                 }
             }
        }
        foreach (Auth::user()->posts as $post){
            if($post->timeline_id !=Auth::user()->timeline->id){
                $post->timeline()->associate(Auth::user()->timeline)->save();
            }
        }
        return response()->json(Auth::user()->timeline->posts()->with('files')->with('users_liked')->with('comments')->with('user')->where('timeline_id',Auth::user()->timeline->id)->orderBy('created_at', 'desc')->get(),200);

    }
}
