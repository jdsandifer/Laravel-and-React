<?php

use Illuminate\Http\Request;
use App\Comment;

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

Route::get('comments', function(){
    return response(Comment::all(), 200);
});

Route::post('comments', function(Request $request){
    $resp = Comment::create($request->all());
    return $resp;
});
