<script src="{{ asset('js/ch2Start.js') }}" defer></script>

@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row justify-content-center" id="curator-img">
                    <img id="illustration" src="images\pigies\pogi_sily.png" alt="Piggies" style="height: 230px; width: auto;">
                </div>
                {{-- Dialogue Box --}}
                <div class="row mb-3 border border-primary rounded-3 text-div" id="dialogue">
                    <div class="row mt-3 h-50">
                        <span id="text" class="h4 mx-3 px-3">
                            "WHOA! Who are you!? Why are you here!? Where did you come from!!??"
                        </span>
                        <span id="final-result" class="h4 mx-3 px-3 d-none"></span>
                    </div>
                    <div class="row mb-3">
                        <a class="text-right h5 invisible" id="next-button" onclick="next_btn()"
                            style="cursor: pointer; letter-spacing: 1px;"><u>next>></u></a>
                    </div>
                </div>

                {{-- Answer Box --}}
                <div class="row mb-3">
                    <button type="submit" onclick="next_btn()" id="my-answer"
                        class="btn btn-outline-primary chapter-button">
                        "Hello, I'm {{ Auth::user()->username }}."
                    </button>
                    <button type="submit" onclick="next_btn()" id="my-answer2"
                        class="btn btn-outline-primary chapter-button d-none">
                        "Yes, I get the gist of it."
                    </button>
                    <button type="submit" onclick="showStory1()" id="start-story"
                        class="btn btn-outline-primary chapter-button d-none">
                        Start Story
                    </button>
                </div>

                {{-- Start quizzes --}}
                <div id="story-quiz" class="row mb-3 d-none">
                    <span id="story-display" class="h4 mx-3 px-3">
                        Once upon a time, there was an old mother pig who had three little pigs and not enough food to feed them.
                    </span>
                    <p class="h4 mx-3 px-3" id="quiz">
                        So when they were old enough, she sent them out into the world to seek <span id="blank" data-text="their">_______</span> fortunes
                    </p>
                </div>

                <div class="row mb-3 justify-content-center d-none" id="choices">
                    <div class="col-md-8" id="buttons">
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary chapter-button choice" value="true">
                                their
                            </button>
                        </div>
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary chapter-button choice" value="false">
                                theirs
                            </button>
                        </div>
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary chapter-button choice" value="false">
                                they're
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
            <form method="POST" action="{{ route('ch2Start.points') }}">
                @csrf
                <input type="hidden" name="inputValue" id="inputValue" value="">
                <button type="submit" id="inputPoints" class="btn btn-outline-primary chapter-button d-none">
                    The End.
                </button>
            </form>
        </div>
    </div>
@endsection
