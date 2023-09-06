<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Points;
use Illuminate\Support\Facades\Auth;

class Ch2StartController extends Controller
{
    public function index()
    {
        return view('ch2Start');
    }

    public function points(Request $request)
    {
        // dd($request->all());
        $user = Auth::user();
        $user->points_ch2 = $request->input('inputValue');
        $user->save();

        return redirect('/ch2End');
    }

}


