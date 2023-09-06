<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Points;
use Illuminate\Support\Facades\Auth;

class Ch1StartController extends Controller
{
    public function index()
    {
        return view('ch1Start');
    }

    public function points(Request $request)
    {
        // dd($request->all());
        $user = Auth::user();
        $user->points_ch1 = $request->input('inputValue');
        $user->save();

        return redirect('/ch1End');
    }

}
