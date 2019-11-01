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

Route::get('comments', function(){
    return response([
        [
            'text' => 'Comment 1',
            'userName' => 'Joe Writer',
            'userEmail' => 'somewhere@gmail.com'
        ],
        [
            'text' => 'Comment 2',
            'userName' => 'Jam Writer',
            'userEmail' => 'somewhere@gmail.com'
        ],
        [
            'text' => 'Comment 3',
            'userName' => 'Joseph Writer',
            'userEmail' => 'somewhere@gmail.com'
        ],
        [
            'text' => 'Comment 4',
            'userName' => 'James Writer',
            'userEmail' => 'somewhere@gmail.com'
        ],
        [
            'text' => 'Comment 5',
            'userName' => 'Jacob Writer',
            'userEmail' => 'somewhere@gmail.com'
        ]
    ], 200);
});