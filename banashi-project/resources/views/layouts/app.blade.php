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

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    Banashi Project
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">

                    </ul>

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
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Good to see you,  {{ Auth::user()->username }}!
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#memoModal">
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

                            <div class="modal fade" id="memoModal" tabindex="-1" role="dialog" aria-labelledby="memoModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Notes</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            tes abc
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

<script>
    var i=0;
        function tutorialText() {
            const text = [];
            text[0] = 'Who am I, you asked? I`m the Curator, the one who will watch you to the worlds beyond this screen.';
            text[1] = 'Each world is made of a story and of course every story is different. In those worlds, there are so many things you can learn.';
            text[2] = 'Unfortunately, they`re incomplete. And that is why you`re here!';
            text[3] = 'Your task is to guide people in those worlds to complete their story. Anyhow, it`s your chance to learn together! Isn`t it exciting?';
            text[4] = 'Without further ado, let`s dive in!';

            var textElement = document.getElementById("text");
            // var takeNotes = document.getElementById("takeNotes");
            var next = document.getElementById("next-button");

            // if(i===2){
            //     takeNotes.classList.remove("d-sm-none");

            //     next.classList.add("d-sm-none");
            // }

            textElement.innerHTML = text[i];

            if(i === (text.length-1)){
                next.classList.add("d-sm-none");

                var chapt1 = document.getElementById("chapter1");
                chapt1.classList.remove("d-sm-none");

            } else i++;
        }

    function chap1Text() {
        const text = [];
        text[0] = 'abcde';
        text[1] = 'babibu';
        text[2] = 'cacicu';
        text[3] = 'Each world is made of a story and of course every story is different. In those worlds, there are so many things you can learn.';
        text[4] = 'Unfortunately, they`re incomplete. And that is why you`re here!';
        text[5] = 'Your task is to guide people in those worlds to complete their story. Anyhow, it`s your chance to learn together! Isn`t it exciting?';
        text[6] = 'Without further ado, let`s dive in!';

        var textElement = document.getElementById("text");
        var takeNotes = document.getElementById("chapter1Notes");
        var next = document.getElementById("next-button");

        textElement.innerHTML = text[i];

        if(i===2){
            takeNotes.classList.remove("d-sm-none");
            next.classList.add("d-sm-none");
        }
        i++;
    }

    function showNext(){
        var next = document.getElementById("next-button");
        next.classList.remove("d-sm-none");
        takeNotes.classList.add("d-sm-none");
    }


</script>
