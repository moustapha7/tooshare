<?php

namespace App\Http\Controllers\Api;

use App\Comment;
use App\File;
use App\Http\Resources\PostRessource;
use App\Notifications\PostCommentedNotification;
use App\Notifications\PostLikedNotification;
use App\Notifications\PostReporteddNotification;
use App\Notifications\PostSharedNotification;
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

    public function index(){
        return response()->json(Auth::user()->posts,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       // $user=Auth::user();
         $post=new Post($request->all());
         $post->user()->associate(Auth::user())->save();
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
                   // $upload->save();
                    $upload->user()->associate(Auth::user())->save();
                    $upload->posts()->sync([$post->id]);
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
                   // $upload->save();
                    $upload->user()->associate(Auth::user())->save();
                    $upload->posts()->sync([$post->id]);
                }
            }
        }
         return response()->json($post->with('user')->with('files')->with('users_liked')->get()->where('id',$post->id));
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

     return response()->json($post->with('user')->with('files')->with('files')->get()->where('id',$post->id));
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

          Post::destroy($id);

        return response()->json(['message'=>'succes',200]);

    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function LikePost(Request $request){

        $post=Post::find($request->post_id);
        $user_id=Auth::user()->id;
        $post->users_liked()->sync($user_id);
        //notified the user posted the post
       if(Auth::user()->id!=$post->user_id){
        $post->user->notify(new PostLikedNotification($post,Auth::user()));
       } 
     
        return response()->json(['message'=>'succes'],200);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function CommentedPost(Request $request){
        $post=Post::find($request->post_id);
        $comment= new Comment($request->all());
        $comment->post()->associate($post);
        $comment->user()->associate(Auth::user())->save();

        $post->notifications_user()->sync(Auth::user()->id);
        //notifier les utilisateurs abboner au post dabords
        foreach($post->notifications_user as $user){
            if($user->id!=Auth::user()->id){
                $user->notify(new PostCommentedNotification($post,Auth::user()));
            }
        }
        $post->user->notify(new PostCommentedNotification($post,Auth::user()));
        //ensuite notifier l'utilisateur proprietaire du post que son post viens d'etre commnter expeter par lui meme
        return response()->json(['message'=>'succes'],200);

    }

    public function SharePost(Request $request){
      $post=Post::find($request->post_id);
      $post->shares->attach(Auth::user()->id);
      $post->user->notify(new PostSharedNotification($post,Auth::user()));

      return response()->json(['message'=>'succes'],200);

    }

    public  function ReportedPost(Request $request){
        //recuperer le post qui est a reporter
        $post=Post::find($request->post_id);
        $post->reports->attach(Auth::user()->id)->save();
        $post->user->notify(new PostReporteddNotification($post,Auth::user()));

        return response()->json(['message'=>'succes'],200);

    }

}
