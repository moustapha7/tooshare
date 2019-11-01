<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Resources\User;

Route::get('/', function () {
    return view('welcome');
});

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');


Route::resource('offreemplois','OffreemploisController');
//Route CRUD de Demande
Route::get('/offreemploi/create', 'OffreemploisController@create')->name('offreemploi_create');
Route::get('/offreemploi/edit/{id}', 'OffreemploisController@edit')->name('offreemploi_edit');
Route::post('/offreemploi/add', 'OffreemploisController@add')->name('offreemploi_add');
Route::post('/offreemploi/update', 'OffreemploisController@update')->name('offreemploi_update');
Route::get('/offreemploi/delete/{id}', 'OffreemploisController@delete')->name('offreemploi_delete');



Route::get('/users',function (){
   return new User(\App\User::paginate());


});