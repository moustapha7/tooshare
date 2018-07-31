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
        $merged = null;
        $timelineUser = Auth::user()->timeline->posts()->with('files')->with('users_liked')->with('comments')->with('user')->where('timeline_id',Auth::user()->timeline->id)->orderBy('created_at', 'desc')->get();
        foreach (Auth::user()->friends as $ami){
            $time = $ami->timeline->posts()->with('files')->with('users_liked')->with('comments')->with('user')->where('timeline_id',$ami->timeline->id)->orderBy('created_at', 'desc')->get();
            $merged = $timelineUser->merge($time);
        }
        if( $merged != null){
            $result = $merged->all();
           /* $result = $result->flatMap(function ($values) {
                return $values->timeline;
            });*/
            return response()->json($result,200);
        }else{
            return response()->json($timelineUser,200);
        }


    }
}
