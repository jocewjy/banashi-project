<script src="{{ asset('js/home.js') }}" defer></script>
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

                        <div class="row mb-2">
                            <form method="POST" action="{{ route('tutorial') }}">
                                @csrf
                                <input type="hidden" name="_method" value="GET">
                                <button class="btn btn-outline-primary border-3 chapter-button" type="submit"
                                    id="btn-0">
                                    Prologue
                                </button>
                            </form>
                        </div>

                        <div class="row mb-2">
                            <form method="POST" action="{{ route('chap1') }}">
                                @csrf
                                <input type="hidden" name="_method" value="GET">
                                <button class="btn btn-outline-primary chapter-button" type="submit"
                                id="btn-1">
                                    Chapter 1
                                </button>
                            </form>
                        </div>

                        <div class="row mb-2">
                            <form method="POST" action="{{ route('chap2') }}">
                                @csrf
                                <input type="hidden" name="_method" value="GET">
                                <button class="btn btn-outline-primary chapter-button" type="submit" id="btn-2">
                                    Chapter 2
                                </button>
                            </form>
                        </div>

                        <div class="row mb-3">
                            <form method="POST" action="{{ route('chap3') }}">
                                @csrf
                                <input type="hidden" name="_method" value="GET">
                                <button class="btn btn-outline-primary chapter-button" type="submit" id="btn-3">
                                    Chapter 3
                                </button>
                            </form>
                        </div>

                        <div class="row mb-2">
                            <button class="btn btn-primary chapter-button" type="submit" data-bs-toggle="modal"
                                data-bs-target="#pointsModal" onclick="check_points()">
                                <i class="bi bi-stars"></i> Your Points & Badges
                            </button>
                        </div>
                        <div class="row mb-2">
                            <button class="btn btn-primary chapter-button" type="submit" data-bs-toggle="modal"
                                data-bs-target="#memoModal" onclick="check_notes()">
                                <i class="bi bi-journal-bookmark-fill"></i> View Notes
                            </button>
                        </div>
                    </div>
                </div>

                {{-- Points & Badges Modal --}}
                <div class="modal fade" id="pointsModal" tabindex="-1" role="dialog" aria-labelledby="memoModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Notes</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <span id="pt-modal-content" class="h5">
                                    You haven't played any chapter.
                                </span>
                                <div class="container">
                                    <div class="row">
                                        <div class="alert alert-info" role="alert">
                                            <b>"You can get different badges with different score ^-^ " - Currator</b>
                                          </div>
                                        <div class="col d-none" id="pt-ch1">
                                            <div class="row justify-content-center" id="curator-img">
                                                <img id="badge-ch1" src="" alt="badge" class="img-fluid"
                                                    style="height:auto; width: 170px;">
                                            </div>
                                            <div class="row h4 justify-content-center" style="font-weight: bold;">
                                                Chapter 1
                                            </div>
                                            <div class="row h5 justify-content-center">
                                                Little Red Riding Hood
                                            </div>
                                            <div class="row h5 justify-content-center" id="display-points-ch1">
                                                Points : {{ Auth::user()->points_ch1 }}
                                            </div>
                                        </div>
                                        <div class="col invisible" id="pt-ch2" style="font-weight: bold;">
                                            <div class="row justify-content-center" id="curator-img">
                                                <img id="badge-ch2" src="" alt="badge" class="img-fluid"
                                                    style="height:auto; width: 170px;">
                                            </div>
                                            <div class="row h4 justify-content-center" style="font-weight: bold;">
                                                Chapter 2
                                            </div>
                                            <div class="row h5 justify-content-center">
                                                Three Little Pigs
                                            </div>
                                            <div class="row h5 justify-content-center" id="display-points-ch2">
                                                Points : {{ Auth::user()->points_ch2 }}
                                            </div>
                                        </div>
                                        <div class="col invisible" id="pt-ch3">
                                            <div class="row justify-content-center" id="curator-img">
                                                <img id="badge-ch3" src="" alt="badge" class="img-fluid"
                                                    style="height:auto; width: 170px;">
                                            </div>
                                            <div class="row h4 justify-content-center" style="font-weight: bold;">
                                                Chapter 3
                                            </div>
                                            <div class="row h5 justify-content-center">
                                                The Gingerbread Man
                                            </div>
                                            <div class="row h5 justify-content-center" id="display-points-ch3">
                                                Points : {{ Auth::user()->points_ch3 }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-center">
                                <button class="btn btn-secondary" data-bs-toggle="modal"
                                data-bs-target="#collectionsModal">Your Collections</button>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Collections Modal --}}
                <div class="modal fade" id="collectionsModal" tabindex="-1" role="dialog" aria-labelledby="memoModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Your Collections</h5>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div class="row"  id="collect-lilred">
                                        <div class="col" id="gold-lilred">
                                            <img src="images/lilRed/badge_lilred_gold.png" alt="badge" class="img-fluid"
                                                    style="height:auto; width: 170px;">
                                        </div>
                                        <div class="col" id="silver-lilred">
                                            <img src="images/lilRed/badge_lilred_silver.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                        <div class="col" id="bronze-lilred">
                                            <img src="images/lilRed/badge_lilred_bronze.png" alt="badge" class="img-fluid"
                                                    style="height:150px; width: auto;">
                                        </div>
                                        <div class="col" id="failed-lilred">
                                            <img src="images/lilRed/badge_lilred_failed.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                    </div>
                                    <div class="row"  id="collect-piggies">
                                        <div class="col" id="gold-piggies">
                                            <img  src="images/pigies/badge_piggies_gold.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                        <div class="col" id="silver-piggies">
                                            <img src="images/pigies/badge_piggies_silver.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                        <div class="col" id="bronze-piggies">
                                            <img src="images/pigies/badge_piggies_bronze.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                        <div class="col" id="failed-piggies">
                                            <img src="images/pigies/badge_piggies_failed.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                    </div>
                                    <div class="row"  id="collect-ginger">
                                        <div class="col" id="gold-ginger">
                                            <img  src="images/ginger/badge_ginger_gold.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                        <div class="col" id="silver-ginger">
                                            <img src="images/ginger/badge_ginger_silver.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                        <div class="col" id="bronze-ginger">
                                            <img src="images/ginger/badge_ginger_bronze.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                        <div class="col" id="failed-ginger">
                                            <img src="images/ginger/badge_ginger_failed.png" alt="badge" class="img-fluid"
                                            style="height:auto; width: 170px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-center">
                                <button class="btn btn-secondary" data-bs-dismiss="modal"
                                    aria-label="Close">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
@endsection
