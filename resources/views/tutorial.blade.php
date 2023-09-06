<script src="{{ asset('js/tutorial.js') }}" defer></script>

@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row mb-3 justify-content-center" id="curator-img">
                    <img id="illustration" src="images/curr/curr_smile.png" alt="My Image" style="height:250px; width:300px;">
                </div>
                <div class="row mb-3 border border-primary rounded-3 text-div">
                    <div class="row mt-3 h-50">
                        <span id="text" class="h4 mx-3 px-3">
                            "Oh, Welcome! I`ve been waiting for you."
                        </span>
                    </div>
                    <div class="row mb-3">
                        <a class="text-right h5" id="next-button" onclick="tutorialText()"
                            style="cursor: pointer; letter-spacing: 1px;">
                            <u>next>></u>
                        </a>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm">
                        <a data-bs-toggle="collapse" href="#translate" aria-expanded="false" aria-controls="translate">
                            Translate
                        </a>
                    </div>
                </div>

                <div class="collapse row mb-3" id="translate">
                    <div class="h5" id="translate-content">
                        "Oh, selamat datang! Aku sudah menunggumu."
                    </div>
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
