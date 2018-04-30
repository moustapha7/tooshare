<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    protected function respondWithToken($data,$token)
    {
        return response()->json([
            'Accept'=> 'application/json',
            'access_token' => $token,
            'data'=>$data,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
    public function Register(Request $request)
    {


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
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken(User::find(auth()->id()),$token);
    }
}
