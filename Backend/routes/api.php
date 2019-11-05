<?php

use Illuminate\Http\Request;
use App\Author;
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
    $latestCommentsFirst = Comment::with('author')->orderBy('id', 'desc')->take(5)->get();
    return response($latestCommentsFirst, 200);
});

Route::post('comments', function(Request $request){
    if ($request->id > 0) {
        $author = Author::find($request->id);
    } else {
        $author = new Author();
        $author->name = $request->get('authorName'); $author->email = $request->get('authorEmail');
        $author->save();
    }
    $resp = $author->comments()->create($request->all());
    return $resp;
});
