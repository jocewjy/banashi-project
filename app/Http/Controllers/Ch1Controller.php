<?php

namespace App\Http\Controllers;

use App\Models\Notes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Ch1Controller extends Controller
{
    public function index(){
        return view('chap1');
    }

    public function notes(Request $request)
    {
        $user = Auth::user();
        $user->notes1 = $request->input('notes_value');
        $user->save();

        return redirect('/ch1Start');
    }
}
