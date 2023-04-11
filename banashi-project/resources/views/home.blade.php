@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><b>{{ __('Select Chapter') }}</b></div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div class="row mb-3">
                        <form method="POST" action="{{ route('tutorial') }}">
                            @csrf
                            <input type="hidden" name="_method" value="GET">
                            <button class="btn btn-outline-primary border-3 chapter-button" type="submit">
                                Prologue
                            </button>
                        </form>
                    </div>

                    <div class="row mb-3">
                        <form method="POST" action="{{ route('chap1') }}">
                            @csrf
                            <input type="hidden" name="_method" value="GET">
                            <button class="btn btn-outline-primary chapter-button" type="submit">
                                Chapter 1
                            </button>
                        </form>
                    </div>

                    <div class="row mb-3">
                        <form method="POST" action="{{ route('chap2') }}">
                            @csrf
                            <input type="hidden" name="_method" value="GET">
                            <button class="btn btn-outline-primary chapter-button" type="submit">
                                Chapter 2
                            </button>
                        </form>
                    </div>

                    <div class="row mb-3">
                        <form method="POST" action="{{ route('chap3') }}">
                            @csrf
                            <input type="hidden" name="_method" value="GET">
                            <button class="btn btn-outline-primary chapter-button" type="submit">
                                Chapter 3
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
