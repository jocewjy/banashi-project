var i = 0;

const starting_text = [
    '"In this chapter you will learn some of the vocabularies that will be inserted to the story."',
    '"Choose one of the vacabulary to review or learn its meaning. I will uncover it for you. You can see the meaning in Bahasa Indonesia by clicking <b>Translation</b> below."',
    '"Remember you can`t visit this again later. Make sure to understand fully what it means."',
    '"Now, here is the note that you need. It will help you with your task to travel in this world."',
    '"You can always look at the notes again later. Make sure to learn it beforehand, so your travel sails smooth and safe."',
    '"Good luck."',
];

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
function gravely(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("gravely");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>gravely</b></i><br>
    1. to a degree that gives cause for alarm: "the man has suffered gravely from his sickness" <br>
    2. in a serious or solemn manner: "he nods gravely to the news"
    `

    translate.innerHTML = `
    <b><i>dengan serius</b></i><br>
    1. tingkat yang sangat genting: "pria itu sangat menderita karena penyakitnya" <br>
    2. secara serius atau khidmat: "ia mengangguk dengan serius mendengar berita tersebut"
    `

}

function latch(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("latch");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>latch</b></i><br>
    1. a metal bar used for fastening a door or gate: "they open the latch"<br>
    2. fasten (a door or gate) with a latch: "she latched the door"
    `

    translate.innerHTML = `
    <b><i>selot, gerendel</b></i><br>
    1. logam untuk mengencangkan pintu atau gerbang: "membuka selot itu" <br>
    2. mengencangkan dengan selot: "ia menutup pintu dengan selot/gerendel"
    `
}

function league(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("league");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>league</i></b> (n)<br>
    1. a collection of people that combine for a particular purpose: "the League of Nations"<br>
    2. join in a league or alliance: "He had leagued with other people"<br>
    `

    translate.innerHTML = `
    <b><i>liga</i></b> (n)<br>
    1. perkumpulan orang atau kelompok: "liga(perkumpulan) negara-negara"<br>
    2. bergabung dalam aliansi: "ia bergabung dalam (liga atau) aliansi bersama orang lain."
    `
}

function plenty(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("plenty");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>plenty</i></b><br>
    1. a large or sufficient amount or quantity: "plenty of time to get home"<br>
    2. more than enough: "plenty of fruits to eat"
    `

    translate.innerHTML = `
    <b><i>cukup (banyak)</i></b> <br>
    1. jumlah atau kuantitas yang besar: "waktu yang cukup banyak untuk ke rumah<br>
    2. lebih dari cukup: "buah yang cukup banyak untuk dimakan"
    `
}

function plump(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("plump");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>plump</i></b><br>
    1. having a full rounded shape: "the fruits were plump and sweet"
    `

    translate.innerHTML = `
    <b><i>montok, padat</i></b><br>
    1 memiliki bentuk yang bulat: buah tersebut montok dan manis
    `
}



// Notes
function pronouns() {
    console.log("yaho");
    const backHTML = $("#exampleModal .modal-body").html();

    $("#exampleModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch1/memo_pronouns1.JPG'>
        <img class='row' src='images/memo/ch1/memo_pronouns2.JPG'>
        <img class='row' src='images/memo/ch1/memo_pronouns3.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#exampleModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

function determiners() {
    const backHTML = $("#exampleModal .modal-body").html();

    $("#exampleModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch1/memo_determiners1.JPG'>
        <img class='row' src='images/memo/ch1/memo_determiners2.JPG'>
        <img class='row' src='images/memo/ch1/memo_determiners3.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#exampleModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

function quantifiers() {
    const backHTML = $("#exampleModal .modal-body").html();

    $("#exampleModal .modal-body").html(`
        <div class='row'>
            <a id='back-modal-btn' class='h5'> <u><b> << Back</b></u> </a>
        </div>
        <img class='row' src='images/memo/ch1/quantifiers1.JPG'>
        <img class='row' src='images/memo/ch1/quantifiers2.JPG'>
    `);

    $("#back-modal-btn").click(function () {
        // Restore the initial content of myDiv
        $("#exampleModal .modal-body").html(backHTML);
        console.log('haha');
    });

}
