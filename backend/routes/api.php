<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\Auth\ModeratorAuthController;
use App\Http\Controllers\Auth\UserAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Admin routes
Route::prefix('admin')->group(function () {
    Route::post('/login', [AdminAuthController::class, 'login']);
    Route::middleware('auth:sanctum')->get('/profile', [AdminAuthController::class, 'profile']);
    Route::middleware('auth:sanctum')->post('/logout', [AdminAuthController::class, 'logout']);
});

// Moderator routes
Route::prefix('moderator')->group(function () {
    Route::post('/login', [ModeratorAuthController::class, 'login']);
    Route::middleware('auth:sanctum')->get('/profile', [ModeratorAuthController::class, 'profile']);
    Route::middleware('auth:sanctum')->post('/logout', [ModeratorAuthController::class, 'logout']);
});

// User routes
Route::prefix('user')->group(function () {
    Route::post('/login', [UserAuthController::class, 'login']);
    Route::middleware('auth:sanctum')->get('/profile', [UserAuthController::class, 'profile']);
    Route::middleware('auth:sanctum')->post('/logout', [UserAuthController::class, 'logout']);
});
