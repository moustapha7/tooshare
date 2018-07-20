<?php

namespace App\Http\Controllers\Api;

use App\Mail\Confirmation;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{


    /**
     * AuthController constructor.
     */
    public function __construct()
    {
    }

    /**
     * descripption : return the response with token
     * @param $data
     * @param $token
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($data, $token)
    {
        return response()->json([
            'access_token' => $token,
            'data'=>$data,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ],200);
    }

    /**description : register an user and return it and his timline
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function Register(Request $request)
    {
        $validator = Validator::make($request->all(),User::$rules);
        if($validator->fails()){
            return response()->json($validator->errors());
        }
         $mail_token = str_random(100);
        $user=User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone'=>$request->phone,
            'email'=>$request->email,
            'gender'=>$request->gender,
            'country'=>$request->country,
            'city'=>$request->city,
            'birthday'=>$request->birthday,
            'mail_token'=>$mail_token,
            'password' => bcrypt($request->password),
            'delai_confirmation'=>now()->addWeeks(3)
        ]);
       $user->saveTimline();
       $user->InitTimelinePosts();

        $url='http://localhost:8000/confirmation?mail_token='.$mail_token.'&email='.$user->email.'&password='.$user->password;
        Mail::to($user->email)->send(new Confirmation($user,$url));
        $token=auth()->login($user);
        return $this->respondWithToken($user,$token);

    }

    /**
     * description : Auuthentification methode return the user authenticated
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password'=> 'required|min:6'
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson());
        }
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }


        return $this->respondWithToken(User::find(auth()->id())->with('timeline')->with('posts')->where('id',auth()->id())->get(),$token);
    }

    /**
     * description : this methode is using for confirmation the user acount and return it
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function CompteConfirmation(Request $request){
        $user=User::where('email',$request->email)->first();
       if($request->get('email')&& $request->get('mail_token')&& $request->get('password')){

          if($user->where('email',$request->email)&& $user->where('mail_token',$request->mail_token)){
              if(!empty($user)){
               if($user->delai_confirmation < now()){
                   return response()->json(['warning' => 'Delai de confirmation depasser'], 200);

               }
                  $user->mail_token=NULL;
                  $user->confirmed_at=now();
                  $user->save();
                  return $this->login($request);
              }

          }


       }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
