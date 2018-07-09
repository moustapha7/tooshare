<?php

namespace App\Http\Controllers\Api;

use App\File;
use App\User;
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
       // $this->middleware('auth:api');
    }


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

}
