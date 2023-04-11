<script src="{{ asset('js/chap1.js') }}" defer></script>

@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row mb-3 border border-primary rounded-3 text-div" style="height: 100pt;" id="dialogue">
                    <div class="row mt-3 h-50">
                        <span id="text" class="h4 mx-3 px-3">
                            "Hello to you! Welcome to my one and only world."
                        </span>
                    </div>
                    <div class="row mb-3">
                        <a class="text-right h5" id="next-button" onclick="chap1Text()"
                            style="cursor: pointer; letter-spacing: 1px;"><u>next>></u></a>
                    </div>
                </div>

                <div class="row mb-3">
                    <button type="submit" onclick="chap1Text()" id="my-answer"
                        class="btn btn-outline-primary chapter-button d-sm-none">
                        "My name is {{ Auth::user()->username }}"
                    </button>
                </div>

                <div class="row mb-3">
                    <button type="submit" onclick="showNext()" id="takeNotes"
                        class="btn btn-outline-primary chapter-button d-sm-none" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Take Notes
                    </button>
                </div>
                <div id="start-story" class="row mb-3 d-sm-none">
                    <span id="story-display" class="h4 mx-3 px-3">
                        first question
                    </span>
                    <p class="h4" id="quiz">
                        <span id="blank" data-text="Ehe">_______</span> something something something something something something something something something.
                    </p>

                </div>

                <div class="row mb-3 justify-content-center d-sm-none" id="choices">
                    <div class="col-md-8" id="buttons">
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary chapter-button choice" value="true">
                                ehe
                            </button>
                        </div>
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary chapter-button choice" value="false">
                                tte
                            </button>
                        </div>
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary chapter-button choice" value="false">
                                nandayo
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row mb-3 text-right d-sm-none" id="nextQuestion">
                    <a class="text-right h5" onclick="nextQuestion()" style="cursor: pointer; letter-spacing: 1px;">
                        <u>next>></u>
                    </a>
                </div>
            </div>
        </div>

        <div class="position-absolute bottom-0 end-0">
            <span id="points"> 1000 </span> / 1000
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Notes</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        tes abc
                    </div>
                    <div class="modal-footer justify-content-center">
                        <form method="POST" action="{{ url('/chap1Add') }}" id="chapter1Notes">
                            @csrf
                            <input type="hidden" name="notes_value" value="1">
                            <button type="submit" id="takeNotes" class="btn btn-secondary"
                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Got it.
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
