<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use phpDocumentor\Reflection\Types\Integer;

use App\File;
use App\Timeline;
class TimelineController extends Controller
{

    /**
     * TimelineController constructor.
     */
    public function __construct()
    {
        $this->photos_path = public_path('/avatars');
        $this->covers_path = public_path('/covers');
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
            $result = $merged->flatten()->all();
           /* $result = $result->flatMap(function ($values) {
                return $values->timeline;
            });*/
            return response()->json($result,200);
        }else{
            return response()->json($timelineUser,200);
        }


    }

    public function UpdateAvatar(Request $request){
        $timeline=Timeline::find($request->timline_id);
           $photos = $request->file('file');

           if (!is_array($photos)) {
               $photos = [$photos];
           }

           if (!is_dir($this->photos_path)) {
               mkdir($this->photos_path, 0777);
           }

           for ($i = 0; $i < count($photos); $i++) {
               $photo = $photos[$i];
               $name = sha1(date('YmdHis') . str_random(30));
               $save_name = $name . '.' . $photo->getClientOriginalExtension();
               $resize_name = $name . str_random(2) . '.' . $photo->getClientOriginalExtension();

               Image::make($photo)
                   ->resize(80, null, function ($constraints) {
                       $constraints->aspectRatio();
                   })
                   ->save($this->photos_path . '/' . $resize_name);

               $photo->move($this->photos_path, $save_name);

               $upload = new File();
               $upload->file_name = $save_name;
               $upload->file_Resize_name = $resize_name;
               $upload->original_name = basename($photo->getClientOriginalName());
               $upload->save();
               $upload->avatar()->save($timeline);
           }
            return  response()->json(['succes'=>'Avatar Saved :)'],200);
        }

        public function updateCover(Request $request){
            $timeline=Timeline::find($request->timline_id);
               $photos = $request->file('file');
    
               if (!is_array($photos)) {
                   $photos = [$photos];
               }
    
               if (!is_dir($this->covers_path)) {
                   mkdir($this->covers_path, 0777);
               }
    
               for ($i = 0; $i < count($photos); $i++) {
                   $photo = $photos[$i];
                   $name = sha1(date('YmdHis') . str_random(30));
                   $save_name = $name . '.' . $photo->getClientOriginalExtension();
                   $resize_name = $name . str_random(2) . '.' . $photo->getClientOriginalExtension();
    
                   Image::make($photo)
                       ->resize(1500, null, function ($constraints) {
                           $constraints->aspectRatio();
                       })
                       ->save($this->covers_path . '/' . $resize_name);
    
                   $photo->move($this->covers_path, $save_name);
    
                   $upload = new File();
                   $upload->file_name = $save_name;
                   $upload->file_Resize_name = $resize_name;
                   $upload->original_name = basename($photo->getClientOriginalName());
                   $upload->save();
                   $upload->cover()->save($timeline);
               }
                return  response()->json(['succes'=>'Cover Saved :)'],200);
            }
   
}
