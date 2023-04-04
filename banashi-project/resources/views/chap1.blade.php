@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <span id="text" class="h4">Hello. Welcome, welcome. How are you? Great! Me? Nah, no good.</span>

                <div class="row mb-3 ">
                    <a class="text-right h5" id="next-button" onclick="chap1Text()" style="cursor: pointer;"><u>Next>></u></a>
                </div>

                <div class="row mb-3">
                    {{-- <form method="POST" action="{{ url('/chap1Add') }}" id="chapter1Notes" class="d-sm-none">
                        @csrf
                        <input type="hidden" name="_method" value="1"> --}}
                        <button type="submit" onclick="showNext()" id="takeNotes" class="btn btn-warning chapter-button " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Take Notes
                        </button>
                    {{-- </form> --}}
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Notes</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <form method="POST" action="{{ url('/chap1Add') }}" id="chapter1Notes">
                            @csrf
                            <input type="hidden" name="_method" value="1">
                            <button type="submit" id="takeNotes" class="btn btn-warning chapter-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                OK
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection


