<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;

if (App::environment('production') || App::environment('staging')) {
    URL::forceScheme('https');
}

Route::get('/', function () {
    return view('welcome');
});
