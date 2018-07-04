<?php

namespace App\Http\Controllers\Api;

use App\File;
use App\Http\Resources\PostRessource;
use App\Post;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;

class PostController extends Controller
{
    private $photos_path;
    private $videos_extensions=['.avi','.flv','.mp4','.mpg','.3gp'];
    private $audio_extensions=['.mp4','.mp3'];

    /**
     * PostController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
        $this->photos_path = public_path('/posts');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user=User::find($request->user_id);
         $post=Post::create($request->all());
         $post->user()->associate($user)->save();
        if($request->hasFile('file')){

            $files = $request->file('file');

            if (!is_array($files)) {
                $files = [$files];
            }

            if (!is_dir($this->photos_path)) {
                mkdir($this->photos_path, 0777);
            }


            for ($i = 0; $i < count($files); $i++) {
                $file = $files[$i];
                if(in_array($file->getClientOriginalExtension(),$this->videos_extensions)||in_array($file->getClientOriginalExtension(),$this->audio_extensions)){
                    $name = sha1(date('YmdHis') . str_random(30));
                    $save_name = $name . '.' . $file->getClientOriginalExtension();
                    $upload = new File();
                    $upload->original_name = basename($file->getClientOriginalName());
                    $upload->file_name = $save_name;
                    $upload->save();
                    $upload->posts()->sync($post->id)->save();
                }else{
                    $name = sha1(date('YmdHis') . str_random(30));
                    $save_name = $name . '.' . $file->getClientOriginalExtension();
                    $resize_name = $name . str_random(2) . '.' . $file->getClientOriginalExtension();

                    Image::make($file)
                        ->resize(250, null, function ($constraints) {
                            $constraints->aspectRatio();
                        })
                        ->save($this->photos_path . '/' . $resize_name);

                    $file->move($this->photos_path, $save_name);

                    $upload = new File();
                    $upload->file_name = $save_name;
                    $upload->file_Resize_name = $resize_name;
                    $upload->original_name = basename($file->getClientOriginalName());
                    $upload->save();
                    $upload->posts()->sync($post->id);
                }



            }
        }


         return response()->json($post->with('user')->with('files')->get()->where('id',$post->id));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $post= Post::findorfail($id);

     return response()->json($post->with('user')->with('files')->get()->where('id',$post->id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        //on doit voir sa apres Insha Allah

        $post=Post::findorfail($id);

        $post->update($request->all());
      return $post;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      return  Post::destroy($id);

    }
}
