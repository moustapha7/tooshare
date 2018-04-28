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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('add-person', function(Request $request) {
    dd($request->all());
    $params = \Illuminate\Support\Facades\Input::get('params');
    return response()->json([
        'id' => 1,
        'name' => $params['updates'][0]['value'],
        'email' => $params['updates'][1]['value'],
        'phone' => $params['updates'][2]['value']
    ]);
});
