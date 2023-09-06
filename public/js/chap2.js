var i = 0;

const starting_text = [
    '"In this chapter you will learn some of the vocabularies that will be inserted to the story."',
    '"Choose one of the vacabulary to review and learn its meaning. I will uncover it for you."',
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
function brittle(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("brittle");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>brittle</i></b><br>
    1. hard but liable to break or shatter easily.: "her bones became brittle": tulangnya menjadi mudah retak
    `

    translate.innerHTML = `
    <b><i>rapuh</i></b><br>
    1. keras tapi mudah hancur atau retak: "tulangnya menjadi mudah retak"
    `
}

function gobble(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("gobble");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>gobble</i></b><br>
    1. eat (something) hurriedly: "a man gobbled his food"
    `
    translate.innerHTML = `
    <b><i>melahap, makan dgn rakus</i></b><br>
    1. memakan (sesuatu) terburu-buru: "seorang pria melahap makanannya"
    `
}

function huff(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("huff");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>huff</i></b><br>
    1. expressing annoyance: "she walked off in a huff"<br>
    2. blow out loudly: "huffing under a heavy load"
    `
    translate.innerHTML = `
    <b><i>kemarahan atau gusar, menghembuskan nafas</i></b><br>
    1. ekspresi kesal: "ia berjalan pergi dengan perasaan kesal"<br>
    2. menghembuskan nafas dengan keras: "ia terengah-engah membawa benda berat"
    `
}

function sturdy(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var vocab_btn = document.getElementById("sturdy");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    vocab_btn.classList.add('active');

    textElement.innerHTML = `
    <b><i>sturdy</i></b><br>
    1. strongly and solidly built: "he had a sturdy, muscular physique"<br>
    `

    translate.innerHTML = `
    <b><i>kokoh, kekar</i></b><br>
    1. kuat dan kokoh: "ia mempunyai fisik yang kekar berotot"<br>
    `
}

function slam(){
    var textElement = document.getElementById("starting-text");
    var translate = document.getElementById("translate-content");
    var button = document.getElementById("slam");

    var choice = document.querySelectorAll(".mb-3");
    for (var j = 0; j < choice.length; j++) {
        if (choice[j].classList.contains('active')){
            choice[j].classList.remove('active');
        }
    }

    button.classList.add('active');

    textElement.innerHTML = `
    <b><i>slam</i></b><br>
    1. shutting something forcefully and loudly: "he slams the door open"<br>
    2. a loud bang caused by the forceful shutting of something: "the door closed with a slam"
    `
    translate.innerHTML = `
    <b><i>membanting, bantingan</i></b><br>
    1. menutup sesuatu dengan keras: "ia membanting pintu itu terbuka"<br>
    2. suara keras yang diakibatkan oleh bantingan: "pintu itu tertutup dengan bantingan"
    `
}

// Notes
function possessives() {
    const backHTML = $("#exampleModal .modal-body").html();

    $("#exampleModal .modal-body").html(`
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
        $("#exampleModal .modal-body").html(backHTML);
        console.log('haha');
    });
}

function adjectives() {
    const backHTML = $("#exampleModal .modal-body").html();

    $("#exampleModal .modal-body").html(`
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
        $("#exampleModal .modal-body").html(backHTML);
        console.log('haha');
    });
}
