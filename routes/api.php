<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('confirmation','Api\AuthController@CompteConfirmation');
Route::post('upload','Api\UserController@uploadImage');
Route::post('DeleteImage','Api\UserController@DestroyImage');
Route::post('DemandeFriend','Api\FriendsheapController@DemandeFriend');
Route::post('DemandeTraited','Api\FriendsheapController@DemandeTraited');
Route::get  ('User/Notifications','Api\UserController@getUserAllUnreadNotifications');



Route::apiResource('posts', 'Api\PostController');
Route::post('likedPost','Api\PostController@LikePost');
Route::post('CommentedPost','Api\PostController@CommentedPost');

Route::post('register', 'Api\AuthController@register');
Route::post('login', 'Api\AuthController@login');
Route::get('users',function (){
    return \App\User::all()->jsonSerialize();
});
