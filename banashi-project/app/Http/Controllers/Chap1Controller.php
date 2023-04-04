<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Chap1Controller extends Controller
{
    public function showPage()
    {
        return view('chap1');
    }

    public function store(Request $request)
    {
        dd($request->all());

        $notes = Chap1Notes::create([
            'notes1'=>$request->input('_method')
        ]);

        // $notes = new Users;

        // $notes->notes1 = $request->input('_method');
        // // Set other fields as needed

        // $notes->save();

        return redirect()->previous();
    }
}
