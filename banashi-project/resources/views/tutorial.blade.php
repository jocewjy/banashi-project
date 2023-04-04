@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <span id="text" class="h4">Oh, Welcome! I`ve been waiting for you.</span>

                <div class="row mb-3 ">
                    <a class="text-right h5" id="next-button" onclick="tutorialText()" style="cursor: pointer;"><u>Next>></u></a>
                </div>

                <div class="row mb-3">
                    <form method="POST" action="{{ route('chap1') }}" id="chapter1" class="d-sm-none">
                        @csrf
                        <input type="hidden" name="_method" value="GET">
                        <button class="btn btn-outline-primary chapter-button" type="submit">
                            Chapter 1
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>

@endsection
