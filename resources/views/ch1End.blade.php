<script src="{{ asset('js/ch1End.js') }}" defer></script>
<script>
    const points = "{{ Auth::user()->points_ch1 }}";
</script>

@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row justify-content-center" id="curator-img">
                    <img id="illustration" src="images\lilRed\ltred_happy.png" alt="Little Red" style="height: 230px; width: auto;">
                </div>
                {{-- Dialogue Box --}}
                <div class="row mb-3 border border-primary rounded-3 text-div" id="dialogue">
                    <div class="row mt-3 h-50">
                        <span id="text" class="h4 mx-3 px-3">
                            "You did it! You have completed the story!"
                        </span>
                        <span id="final-result" class="h4 mx-3 px-3 d-none"></span>
                    </div>
                    <div class="row mb-3">
                        <a class="text-right h5" id="next-button" onclick="next_btn()"
                            style="cursor: pointer; letter-spacing: 1px;"><u>next>></u></a>
                    </div>
                </div>

                <div class="row mb-3">
                    <a class="btn btn-outline-primary chapter-button d-none" href="/" role="button" id="go-home-btn">Return</a>
                </div>

                <div class="row mb-3">
                    <form method="POST" action="{{ route('ch1Start') }}">
                        @csrf
                        <input type="hidden" name="_method" value="GET">
                        <button class="btn btn-outline-primary chapter-button d-none" type="submit" id="try-again">
                            Try Again
                        </button>
                    </form>
                </div>

                <div class="row mb-3">
                    <form method="POST" action="{{ url('/') }}">
                        @csrf
                        <input type="hidden" name="_method" value="GET">
                        <button class="btn btn-outline-primary chapter-button d-none" type="submit" id="quit-chapter">
                            Quit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>


    </div>
@endsection
