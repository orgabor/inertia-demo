<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\Auth\LoginController;

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
Route::get('login', [LoginController::class, 'create'])->name('login');
Route::post('login', [LoginController::class, 'store']);
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', function () {
        //return inertia('Welcome');
        return Inertia::render('Home');
    });

    Route::group([
        'prefix' => 'users',
    ], function () {
        Route::get('/', [UsersController::class, 'index']);
        Route::get('/create', [UsersController::class, 'create']);
        Route::post('/', [UsersController::class, 'store']);
        Route::get('/{user:id}', [UsersController::class, 'show']);
    });

    Route::get('/settings', function () {
        //return inertia('Welcome');
        return Inertia::render('Settings');
    });



});
