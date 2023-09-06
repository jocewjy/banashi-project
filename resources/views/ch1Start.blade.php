<script src="{{ asset('js/ch1Start.js') }}" defer></script>

@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row justify-content-center" id="curator-img">
                    <img id="illustration" src="images\lilRed\ltred_smile.png" alt="Little Red" style="height: 230px; width: auto;">
                </div>
                {{-- Dialogue Box --}}
                <div class="row mb-3 border border-primary rounded-3 text-div" id="dialogue">
                    <div class="row mt-3 h-50">
                        <span id="text" class="h4 mx-3 px-3">
                            "Hello to you! Welcome to my one and only world."
                        </span>
                        <span id="final-result" class="h4 mx-3 px-3 d-none"></span>
                    </div>
                    <div class="row mb-3">
                        <a class="text-right h5" id="next-button" onclick="next_btn()"
                            style="cursor: pointer; letter-spacing: 1px;"><u>next>></u></a>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm">
                        <a data-bs-toggle="collapse" href="#translate" aria-expanded="false" aria-controls="translate">
                            Translate
                        </a>
                    </div>
                </div>

                {{-- Answer Box --}}
                <div class="row mb-3">
                    <button type="submit" onclick="next_btn()" id="my-answer"
                        class="btn btn-outline-primary chapter-button d-none">
                        "My name is {{ Auth::user()->username }}"
                    </button>
                    <button type="submit" onclick="next_btn()" id="my-answer2"
                        class="btn btn-outline-primary chapter-button d-none">
                        "Yes, of course."
                    </button>
                    <button type="submit" onclick="showStory1()" id="start-story"
                        class="btn btn-outline-primary chapter-button d-none">
                        Start Story
                    </button>
                </div>

                {{-- Start quizzes --}}
                <div id="story-quiz" class="row mb-3 d-none">
                    <span id="story-display" class="h4 mx-3 px-3">
                        Once upon a time there lived a little country girl, the prettiest creature who was ever seen. Her
                        mother had sewed a red riding hood made for her.
                    </span>
                    <p class="h4 mx-3 px-3" id="quiz">
                        <span id="blank" data-text="She">_______</span> was called Little Red Riding Hood by everyone in
                        the village.
                    </p>
                </div>

                <div class="row mb-3 justify-content-center d-none" id="choices">
                    <div class="col-md-8" id="buttons">
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary chapter-button choice" value="false">
                                they
                            </button>
                        </div>
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary chapter-button choice" value="true">
                                she
                            </button>
                        </div>
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary chapter-button choice" value="false">
                                you
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row mb-3 text-right d-none" id="nextQuestion">
                    <a class="text-right h5" onclick="nextQuestion()" style="cursor: pointer; letter-spacing: 1px;">
                        <u>next>></u>
                    </a>
                </div>
            </div>
        </div>

        <div class="h5 mx-5 mb-5 position-absolute bottom-0 end-0 d-none" id="point-div">
            <b><span id="points"> 1000 </span> / 1000 </b>
        </div>

        <div class="row mb-3 justify-content-center" id="input-points">
            <form method="POST" action="{{ route('ch1Start.points') }}">
                @csrf
                <input type="hidden" name="inputValue" id="inputValue" value="">
                <button type="submit" id="inputPoints" class="btn btn-outline-primary chapter-button d-none">
                    The End.
                </button>
            </form>
        </div>
    </div>
@endsection
