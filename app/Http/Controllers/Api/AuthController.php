<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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

        $user=User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone'=>$request->phone,
            'email'=>$request->email,
            'password' => bcrypt($request->password),
        ]);
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
            return response()->json($validator->errors());
        }
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken(User::find(auth()->id()),$token);
    }
}
