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

// Home
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Tutorial
Route::get('/tutorial', [App\Http\Controllers\TutorialController::class, 'showPage'])->name('tutorial');

// Chapter 1
Route::get('/chap1', [App\Http\Controllers\Ch1Controller::class, 'index'])->name('chap1');
Route::post('/chap1', [App\Http\Controllers\Ch1Controller::class, 'notes'])->name('chap1.notes');

Route::get('/ch1Start', [App\Http\Controllers\Ch1StartController::class, 'index'])->name('ch1Start');
Route::post('/ch1Start', [App\Http\Controllers\Ch1StartController::class, 'points'])->name('ch1Start.points');
Route::get('/ch1End', [App\Http\Controllers\Ch1EndController::class, 'index'])->name('ch1End');

// Chapter 2
Route::get('/chap2', [App\Http\Controllers\Ch2Controller::class, 'showPage'])->name('chap2');
Route::post('/chap2', [App\Http\Controllers\Ch2Controller::class, 'notes'])->name('chap2.notes');

Route::get('/ch2Start', [App\Http\Controllers\Ch2StartController::class, 'index'])->name('ch2Start');
Route::post('/ch2Start', [App\Http\Controllers\Ch2StartController::class, 'points'])->name('ch2Start.points');
Route::get('/ch2End', [App\Http\Controllers\Ch2EndController::class, 'index'])->name('ch2End');


// Chapter 3
Route::get('/chap3', [App\Http\Controllers\Ch3Controller::class, 'showPage'])->name('chap3');
Route::post('/chap3', [App\Http\Controllers\Ch3Controller::class, 'notes'])->name('chap3.notes');

Route::get('/ch3Start', [App\Http\Controllers\Ch3StartController::class, 'index'])->name('ch3Start');
Route::post('/ch3Start', [App\Http\Controllers\Ch3StartController::class, 'points'])->name('ch3Start.points');
Route::get('/ch3End', [App\Http\Controllers\Ch3EndController::class, 'index'])->name('ch3End');
