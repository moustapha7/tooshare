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

    protected function respondWithToken($data, $token)
    {
        return response()->json([
            'access_token' => $token,
            'data'=>$data,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
    public function Register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|unique:users',
            'first_name' => 'required',
            'last_name'=>'required',
            'password'=> 'required|min:6',
            'phone'=>'required|alpha_num|unique:users|min:6'
        ]);
        if($validator->fails()){
            return response()->json($validator->errors());
        }
         $mail_token = str_random(100);
        $user=User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone'=>$request->phone,
            'email'=>$request->email,
            'mail_token'=>$mail_token,
            'password' => bcrypt($request->password),
            'delai_confirmation'=>now()->addWeeks(3)
        ]);

        $url='http://localhost:4200/confirmation?mail_token='.$mail_token.'&email='.$user->email.'&password='.$user->password;
        Mail::to($user->email)->send(new Confirmation($user,$url));
        $token=auth()->login($user);
        return $this->respondWithToken($user,$token);

    }

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

        return $this->respondWithToken(User::find(auth()->id()),$token);
    }
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
