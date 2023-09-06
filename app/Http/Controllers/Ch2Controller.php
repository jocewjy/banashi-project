<?php

namespace App\Http\Controllers;

use App\Models\Notes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Ch2Controller extends Controller
{
    public function showPage()
    {
        return view('chap2');
    }

    public function notes(Request $request)
    {

        $user = Auth::user();
        $user->notes2 = $request->input('notes_value');
        $user->save();

        return redirect('/ch2Start');
    }
}
