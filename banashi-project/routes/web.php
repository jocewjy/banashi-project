<?php

use Illuminate\Support\Facades\Route;

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
Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/tutorial', [App\Http\Controllers\TutorialController::class, 'showPage'])->name('tutorial');

Route::get('/chap1', [App\Http\Controllers\Chap1Controller::class, 'showPage'])->name('chap1');
Route::post('/chap1Add', [App\Http\Controllers\Chap1Controller::class, 'store']);

Route::get('/chap2', [App\Http\Controllers\Chap2Controller::class, 'showPage'])->name('chap2');

Route::get('/chap3', [App\Http\Controllers\Chap3Controller::class, 'showPage'])->name('chap3');
