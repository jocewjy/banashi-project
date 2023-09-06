<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Banashi Project</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
</head>

<body>
    <script>
        @if (Auth::check())
            const notes_ch1 = "{{ Auth::user()->notes1 }}";
            const notes_ch2 = "{{ Auth::user()->notes2 }}";
            const notes_ch3 = "{{ Auth::user()->notes3 }}";

            const points_ch1 = "{{ Auth::user()->points_ch1 }}";
            const points_ch2 = "{{ Auth::user()->points_ch2 }}";
            const points_ch3 = "{{ Auth::user()->points_ch3 }}";
        @else
            const notes_ch1 = null;
            const notes_ch2 = null;
            const notes_ch3 = null;

            const points_ch1 = null;
            const points_ch2 = null;
            const points_ch3 = null;
        @endif
    </script>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    Banashi Project
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            {{-- Header Navbar --}}
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Good to see you, {{ Auth::user()->username }}!
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#memoModal"
                                        style="cursor: pointer;" onclick="check_notes()">
                                        {{ __('View Notes') }}
                                    </a>

                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>

                            {{-- Notes Modal --}}
                            <div class="modal fade" id="memoModal" tabindex="-1" role="dialog"
                                aria-labelledby="memoModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Notes</h5>
                                        </div>
                                        <div class="modal-body justidy-content-center">
                                            <span id="content" class="h5">
                                                You haven't obtained any notes.<br>Play a Chapter to receive them.
                                            </span>

                                            {{-- Chapter 1 Notes --}}
                                            <div class="row mb-3">
                                                <div class="row mb-1">
                                                    <button class="btn btn-secondary notes-button invisible" href="#notes-content-1"
                                                    aria-expanded="false" aria-controls="notes-content-1"
                                                    id="dropdownMenuButton1" data-bs-toggle="collapse">
                                                    Chapter 1 Notes
                                                    </button>
                                                </div>

                                                <div class="collapse" id="notes-content-1">
                                                    <div class="row mb-3">
                                                        <button class="btn btn-outline-secondary chapter-button"
                                                            onclick="pronouns_ch1()">
                                                            Pronouns
                                                        </button>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <button class="btn btn-outline-secondary chapter-button"
                                                            onclick="determiners_ch1()">
                                                            Determiners
                                                        </button>
                                                    </div>
                                                    <div class="row">
                                                        <button class="btn btn-outline-secondary chapter-button"
                                                            onclick="quantifiers_ch1()">
                                                            Quantifiers
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>


                                            {{-- Chapter 2 Notes --}}
                                            <div class="row mb-3">
                                                <div class="row mb-1">
                                                    <button class="btn btn-secondary notes-button invisible" href="#notes-content-2"
                                                    aria-expanded="false" aria-controls="notes-content-2"
                                                    id="dropdownMenuButton2" data-bs-toggle="collapse">
                                                    Chapter 2 Notes
                                                    </button>
                                                </div>

                                                <div class="collapse" id="notes-content-2">
                                                    <div class="row mb-3">
                                                        <button class="btn btn-outline-secondary chapter-button" onclick="possessives_ch2()">
                                                            Possessives
                                                        </button>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <button class="btn btn-outline-secondary chapter-button" onclick="adjectives_ch2()">
                                                            Adjectives
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {{-- Chapter 3 Notes --}}
                                            <div class="row mb-3">
                                                <div class="row mb-1">
                                                    <button class="btn btn-secondary notes-button invisible" href="#notes-content-3"
                                                    aria-expanded="false" aria-controls="notes-content-2"
                                                    id="dropdownMenuButton3" data-bs-toggle="collapse">
                                                    Chapter 3 Notes
                                                    </button>
                                                </div>

                                                <div class="collapse" id="notes-content-3">
                                                    <div class="row mb-3">
                                                        <button class="btn btn-outline-secondary chapter-button" onclick="nouns_ch3()">
                                                            Nouns
                                                        </button>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <button class="btn btn-outline-secondary chapter-button" onclick="past_tenses_ch3()">
                                                            Past Tenses
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                                aria-label="Close">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>

</html>
