function check_notes() {
    console.log("in");
    var content = document.getElementById("content");
    var ch1 = document.getElementById("dropdownMenuButton1");
    var ch2 = document.getElementById("dropdownMenuButton2");
    var ch3 = document.getElementById("dropdownMenuButton3");

    if (notes_ch1 || notes_ch2 || notes_ch3) {
        content.classList.add("d-none");
    }

    if (notes_ch1 && notes_ch1.toString().length > 0) {
        ch1.classList.remove("invisible");
    }
    if (notes_ch2 && notes_ch2.toString().length > 0) {
        ch2.classList.remove("invisible");
        console.log('visible')
    }
    if (notes_ch3 && notes_ch3.toString().length > 0) {
        ch3.classList.remove("invisible");
    }
}

// Chapter 1
function pronouns_ch1() {
    console.log("yaho");
    const backHTML = $("#memoModal .modal-body").html();

    $("#memoModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch1/memo_pronouns1.JPG'>
        <img class='row' src='images/memo/ch1/memo_pronouns2.JPG'>
        <img class='row' src='images/memo/ch1/memo_pronouns3.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#memoModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

function determiners_ch1() {
    const backHTML = $("#memoModal .modal-body").html();

    $("#memoModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch1/memo_determiners1.JPG'>
        <img class='row' src='images/memo/ch1/memo_determiners2.JPG'>
        <img class='row' src='images/memo/ch1/memo_determiners3.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#memoModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

function quantifiers_ch1() {
    const backHTML = $("#memoModal .modal-body").html();

    $("#memoModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch1/quantifiers1.JPG'>
        <img class='row' src='images/memo/ch1/quantifiers2.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#memoModal .modal-body").html(backHTML);
        console.log('haha');
    });

}

// Chapter 2
function possessives_ch2() {
    const backHTML = $("#memoModal .modal-body").html();

    $("#memoModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch2/possessives1.JPG'>
        <img class='row' src='images/memo/ch2/possessives2.JPG'>
        <img class='row' src='images/memo/ch2/possessives3.JPG'>
        <img class='row' src='images/memo/ch2/possessives4.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#memoModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

function adjectives_ch2() {
    const backHTML = $("#memoModal .modal-body").html();

    $("#memoModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch2/adjectives1.JPG'>
        <img class='row' src='images/memo/ch2/adjectives2.JPG'>
        <img class='row' src='images/memo/ch2/adjectives3.JPG'>
        <img class='row' src='images/memo/ch2/adjectives4.JPG'>
        <img class='row' src='images/memo/ch2/adjectives5.JPG'>
        <img class='row' src='images/memo/ch2/adjectives6.JPG'>
        <img class='row' src='images/memo/ch2/adjectives7.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#memoModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

// Chapter 3
function nouns_ch3() {
    console.log("yaho");
    const backHTML = $("#memoModal .modal-body").html();

    $("#memoModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch3/nouns1.JPG'>
        <img class='row' src='images/memo/ch3/nouns2.JPG'>
        <img class='row' src='images/memo/ch3/nouns3.JPG'>
        <img class='row' src='images/memo/ch3/nouns4.JPG'>
        <img class='row' src='images/memo/ch3/nouns5.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#memoModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

function past_tenses_ch3() {
    const backHTML = $("#memoModal .modal-body").html();

    $("#memoModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch3/pastTense1.JPG'>
        <img class='row' src='images/memo/ch3/pastTense2.JPG'>
        <img class='row' src='images/memo/ch3/pastTense3.JPG'>
        <img class='row' src='images/memo/ch3/pastTense4.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#memoModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

