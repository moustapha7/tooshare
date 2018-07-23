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
Route::post('markUserNotificationasRead','Api\UserController@markUserNotificationasRead');
Route::get('UserAllPosts','Api\UserController@getUserAllPosts');
Route::get('UserAllFriends','Api\UserController@getUserAllFriends');
Route::post('DemandeFriend','Api\FriendsheapController@DemandeFriend');
Route::post('DemandeTraited','Api\FriendsheapController@DemandeTraited');
Route::post('DeleteFriendSheap','Api\FriendsheapController@DeleteFriendSheap');
Route::get('follow','Api\FriendsheapController@Follow');

Route::get  ('User/Notifications','Api\UserController@getUserAllUnreadNotifications');
Route::get('timeline','Api\TimelineController@getUserTimeline');


Route::apiResource('posts', 'Api\PostController');
Route::post('likedPost','Api\PostController@LikePost');
Route::post('CommentedPost','Api\PostController@CommentedPost');
Route::post('savePost','Api\PostController@store');
Route::post('sharePost','Api\PostController@SharePost');
Route::post('reportedPost','Api\PostController@ReportedPost');

Route::post('register', 'Api\AuthController@register');
Route::post('login', 'Api\AuthController@login');
Route::get('users',function (){
    return \App\User::all()->jsonSerialize();
});

Route::group(['prefix' => 'user'], function() {
    Route::post('/', function() {
        return response()->json(request()->user());
    });
});