<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Chap2Controller extends Controller
{
    public function showPage()
    {
        return view('chap2');
    }
}
