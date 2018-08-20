<?php

namespace App\Http\Controllers\Api;

use App\File;
use App\User;
use App\Timeline;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use phpDocumentor\Reflection\Types\Integer;

class UserController extends Controller
{
    private $photos_path;
    /**
     * UserController constructor.
     */
    public function __construct()
    {
        $this->photos_path = public_path('/users');
         $this->middleware('auth:api');
    }

    public function updateParamGen(Request $request) {
       // $user = User::where('id', $request->id)->first();
        //$user=Auth::user();
        $user=User::find( $request->id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->gender = $request->gender;
        $user->country = $request->country;
        $user->city = $request->city;
        $user->birthday = $request->birthday;
        $user->save();

        return response()->json($user, 201);
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadImage(Request $request){
           $user=User::find($request->user_id);
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
                      ->resize(250, null, function ($constraints) {
                          $constraints->aspectRatio();
                      })
                      ->save($this->photos_path . '/' . $resize_name);

                  $photo->move($this->photos_path, $save_name);

                  $upload = new File();
                  $upload->file_name = $save_name;
                  $upload->file_Resize_name = $resize_name;
                  $upload->original_name = basename($photo->getClientOriginalName());
                  $upload->user()->associate($user)->save();


              }
        return  response()->json(['succes'=>'Image saved :)'],200);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function DestroyImage(Request $request){

        // $filename = $request->id;

        $uploaded_image = File::find($request->id);

        if (empty($uploaded_image)) {
            return response()->json(['message' => 'Sorry file does not exist'], 400);
        }

        $file_path = $this->photos_path . '/' . $uploaded_image->file_name;
        $resized_file = $this->photos_path . '/' . $uploaded_image->file_Resize_name;

        if (file_exists($file_path)) {
            unlink($file_path);
        }

        if (file_exists($resized_file)) {
            unlink($resized_file);
        }

        if (!empty($uploaded_image)) {
            $uploaded_image->delete();
        }

        return  response()->json(['succes'=>'Image Deleted :)'],200);
    }

     public function getUserAllUnreadNotifications(){
         $notifs= Auth::user()->unreadNotifications;
         return  response()->json($notifs,200);
     }
     public function markUserNotificationasRead(Request $request){
         Auth::user()->unreadNotifications()->find($request->notificaton_id)->markAsRead();
         return  response()->json(['message'=>'succes'],200);
     }

     public function getUserAllPosts(){
          return response()->json(Auth::user()->posts->paginate(20),200);

     }

     public function getUserAllFriends(){
         return response()->json(Auth::user()->allFriends,200);
     }

     public function getUserInfo(){
        $timeline= Auth::user()->userInfo;
       /* $user = Auth::user();
            $merged = $timeline->merge($user);
            $result = $merged->all();
        */
        return response()->json($timeline);
    }

}
