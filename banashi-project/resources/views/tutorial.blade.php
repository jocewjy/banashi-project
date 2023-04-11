<script src="{{ asset('js/tutorial.js') }}" defer></script>

@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row mb-3 border border-primary rounded-3 text-div" style="height: 100pt;">
                    <div class="row mt-3 h-50">
                        <span id="text" class="h4 mx-3 px-3">
                            "Oh, Welcome! I`ve been waiting for you."
                        </span>
                    </div>
                    <div class="row mb-3">
                        <a class="text-right h5" id="next-button" onclick="tutorialText()" style="cursor: pointer; letter-spacing: 1px;"><u>next>></u></a>
                    </div>
                </div>

                <div class="row mb-3">
                    <form method="POST" action="{{ route('chap1') }}" id="chapter1" class="d-sm-none">
                        @csrf
                        <input type="hidden" name="_method" value="1">
                        <button class="btn btn-outline-primary chapter-button" type="submit">
                            Chapter 1
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection
