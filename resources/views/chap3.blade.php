<script src="{{ asset('js/chap3.js') }}" defer></script>

@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                {{-- Dialogue Box --}}
                <div class="row mb-3 border border-primary rounded-3 text-div" id="dialogue">
                    <div class="row mt-3 h-50">
                        <span id="starting-text" class="h4 mx-3 px-3">
                            "Welcome to the last world. This is a world where once upon a time there was a delicious ginger bread who tried to escape."
                        </span>
                    </div>
                    <div class="row mb-3">
                        <a class="text-right h5" id="next-button" onclick="next_btn()"
                            style="cursor: pointer; letter-spacing: 1px;"><u>next>></u></a>
                    </div>
                </div>

                <div class="row mb-3 d-none" id="vocabs">
                    <button type="submit" onclick="cinder()" id="cinder"
                        class="mb-3 btn btn-outline-primary chapter-button">
                        <i>cinder</i>
                    </button>
                    <button type="submit" onclick="determine()" id="determine"
                        class="mb-3 btn btn-outline-primary chapter-button">
                        <i>determine</i>
                    </button>
                    <button type="submit" onclick="dough()" id="dough"
                        class="mb-3 btn btn-outline-primary chapter-button">
                        <i>dough</i>
                    </button>
                    <button type="submit" onclick="mischief()" id="mischief"
                        class="mb-3 btn btn-outline-primary chapter-button">
                        <i>mischief</i>
                    </button>
                    <button type="submit" onclick="trot()" id="trot"
                        class="mb-3 btn btn-outline-primary chapter-button">
                        <i>trot</i>
                    </button>
                    <button type="submit" onclick="next_btn()"
                        class="mb-3 btn btn-outline-primary chapter-button">
                        "I've learn them."
                    </button>
                </div>

                {{-- Translate --}}
                <div class="row mb-3">
                    <div class="col-sm">
                        <a data-bs-toggle="collapse" href="#translate" aria-expanded="false" aria-controls="translate">
                            Translate
                        </a>
                    </div>
                </div>

                <div class="collapse row mb-3" id="translate">
                    <div class="h5" id="translate-content">
                        "Selamat datang di dunia yang terakhir. Dunia di mana pada suatu kala ada sepotong kue jahe enak yang berusaha untuk melarikan diri."
                    </div>
                </div>

                {{-- Take Notes --}}
                <div class="row mb-3">
                    <button type="submit" id="takeNotes" class="btn btn-outline-primary chapter-button d-none"
                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Take Notes
                    </button>
                </div>

            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Notes</h5>
                    </div>
                    <div class="modal-body">
                        <div class="justify-content-center">
                            <div class="row mb-3">
                                <button class="btn btn-outline-secondary chapter-button" onclick="nouns()">
                                    Nouns
                                </button>
                            </div>
                            <div class="row mb-3">
                                <button class="btn btn-outline-secondary chapter-button" onclick="past_tenses()">
                                    Past Tenses
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <form method="POST" action="{{ route('chap3.notes') }}" id="chapter3Notes">
                            @csrf
                            <input type="hidden" name="notes_value" value="1">
                            <button type="submit" id="takeNotes" class="btn btn-secondary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                I Got it. Let's start. (Start Chapter)
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
