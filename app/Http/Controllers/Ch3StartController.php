<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Points;
use Illuminate\Support\Facades\Auth;

class Ch3StartController extends Controller
{
    public function index()
    {
        return view('ch3Start');
    }

    public function points(Request $request)
    {
        // dd($request->all());
        $user = Auth::user();
        $user->points_ch3 = $request->input('inputValue');
        $user->save();

        return redirect('/ch1End');
    }
}
