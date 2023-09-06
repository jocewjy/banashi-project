var i = 0;

const starting_text = [
    '"In this chapter you will learn some of the vocabularies that will be inserted to the story."',
    '"Choose one of the vacabulary to review or learn its meaning. I will uncover it for you."',
    '"Remember you can`t visit this again later. Make sure to understand fully what it means."',
    '"Now, here is the note that you need. It will help you with your task to travel in this world."',
    '"You can always look at the notes again later. Make sure to learn it beforehand, so your travel sails smooth and safe."',
    '"Good luck."',
]

const translation = [
    '"Dalam Chapter ini kamu akan mempelajari beberapa kosa kata yang akan dimasukkan ke dalam cerita."',
    '"Pilih salah satu kosakata untuk dilihat atau dipelajari. Aku akan mengungkapnya untukmu. Kamu dapat melihat artinya dalam Bahasa Indonesia dengan mengklik <b>Terjemahan</b> di bawah ini."',
    '"Ingat kamu tidak dapat melihat translasi ini lagi nanti. Pastikan untuk memahami sepenuhnya apa arti kosa kata tersebut."',
    '"Sekarang, berikut adalah catatan yang kamu butuhkan. Ini akan membantu kamu dalam menyelesaikan tugasmu di dunia ini."',
    '"Kamu bisa selalu melihat catatan itu lagi nanti. Pastikan untuk mempelajarinya terlebih dahulu, agar perjalananmu lancar dan aman."',
    '"Semoga beruntung."',
]

function next_btn() {
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");

    var takeNotes = document.getElementById("takeNotes");
    var vocabs = document.getElementById("vocabs");
    var next = document.getElementById("next-button");

    textElement.innerHTML = starting_text[i];
    translate.innerHTML = translation[i];

    if (next.classList.contains("invisible")) {
        next.classList.remove("invisible");
        if (!vocabs.classList.contains("d-none")) {
            vocabs.classList.add("d-none");
        }
    }

    if(i === 2){
        vocabs.classList.remove("d-none");
        next.classList.add("invisible");
    }

    if (i === (starting_text.length - 1)) {
        takeNotes.classList.remove("d-none");
        next.classList.add("invisible");
    } else i++;

}

// Vocabs
function cinder(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("cinder");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>cinder</i></b><br>
    1. a small piece of partly burned coal: "cinder in the chimney"
    `
    translate.innerHTML = `
    <b><i>abu api</i></b><br>
    1. abu sisa batu bara yang terbakar: "abu di cerobond asap"
    `
}

function determine(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("determine");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>determine</i></b><br>
    1. ascertain a result: "the point of our study was to determine the effectivity"
    2. firmly decide: "he determined to left"
    `
    translate.innerHTML = `
    <b><i>menentukan, memutuskan</i></b><br>
    1. memastikan suatu hasil: "tujuan dari pembelajaran kita adalah untuk menentukan efektivitasnya"
    2. memutuskan dgn tegas: "ia memutuskan dengan yakin untuk pergi"
    `
}

function dough(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("dough");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>dough</i></b><br>
    1. a thick, malleable mixture of solid subtances and liquid: "dough of bread"
    `
    translate.innerHTML = `
    <b><i>adonan</i></b><br>
    1. campuran zat padat dan cair yang kental dan dapat dibentuk: "adonan roti"
    `
}

function mischief(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("mischief");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>mischief</i></b><br>
    1. playful misbehavior or troublemaking: "she'll make sure te kids don't get into mischief"
    `
    translate.innerHTML = `
    <b><i>kenakalan</i></b><br>
    1. perilaku nakal atau pembuat onar yang menyenangkan: "dia akan memastikan anak-anak tidak melakukan kenakalan"
    `

}

function trot(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("trot");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>trot</i></b><br>
    1. a pace faster than a walk: "the horses trotted through the night"
    `
    translate.innerHTML = `
    <b><i>berderap</i></b><br>
    1. langkah lebih cepat daripada berjalan: "kuda-kuda berderap sepanjang malam"
    `
}

// Notes
function nouns() {
    console.log("yaho");
    const backHTML = $("#exampleModal .modal-body").html();

    $("#exampleModal .modal-body").html(`
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
        $("#exampleModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

function past_tenses() {
    const backHTML = $("#exampleModal .modal-body").html();

    $("#exampleModal .modal-body").html(`
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
        $("#exampleModal .modal-body").html(backHTML);
        console.log('haha');
    });
}
