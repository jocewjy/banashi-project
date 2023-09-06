<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Points;
use Illuminate\Support\Facades\Auth;

class PointsController extends Controller
{
    public function chapter1(Request $request)
    {
        // dd($request->all());
        $user = Auth::user();
        $user->points_ch1 = $request->input('inputValue');
        $user->save();

        return redirect('/ch1End');
    }

    public function chapter2(Request $request)
    {
        // dd($request->all());
        $user = Auth::user();
        $user->points_ch2 = $request->input('inputValue');
        $user->save();

        return redirect('/ch1End');
    }

    public function chapter3(Request $request)
    {
        // dd($request->all());
        $user = Auth::user();
        $user->points_ch3 = $request->input('inputValue');
        $user->save();

        return redirect('/ch1End');
    }
}
