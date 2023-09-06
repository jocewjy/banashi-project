var i = 0;
var ctr_img = 0;
var count = 0;

const img = [
    'images/curr/curr_smile.png',
    'images/curr/curr_smile.png', //who
    'images/curr/curr_troubled.png',
    'images/curr/curr_happy.png', // of
    'images/curr/curr_smile.png', //befo
    'images/curr/curr_neutral.png', // after
    'images/curr/curr_neutral.png', //wehn
    'images/curr/curr_neutral.png', //the
    'images/curr/curr_smile.png', //at
    'images/curr/curr_smile.png', //the
    'images/curr/curr_neutral.png',
    'images/curr/curr_happy.png', //do't
]

const text = [
    '"Who am I, you asked? I`m the Curator, the one who will oversee your journey to the worlds beyond this screen."',
    '"Each world is made of a story and of course every story is different. In those worlds, there are so many things you can learn."',
    '"Unfortunately, they`re incomplete. And that is why you`re here! I hope you can lend your knowledge and aptitude to help us all."',
    '"Of course we will try our best too to assist you."',
    '"Before the chapter begin, you will receive some notes that can help you completing your task. The notes will provide some information regarding the grammar that are learned in the specific chapter."',
    '"After you receive the notes, you will be able to see it any time. Just click the <b>View Notes</b> button that can you access on the upper right menu."',
    '"When you enter a world, you will be introduce to some of the vocabulary that will be use in that chapter."',
    '"The chapter will consist of a certain story, and your task is to complete the story in each world. To complete them, you have to fill the blanks with fitting words, by choosing the right answer."',
    '"At the start of the chapter you will have <b>Life Point</b> equals to <b>1000</b>. But, be careful. If you choose the wrong answer too many times, you will receive some damage that will decrease your Life Points."',
    '"The higher your Life Points, the better it is. Do remember that you can failed to meet the qualification to save a certain world."',
    '"Don`t worry too much. I`m sure you will do just fine."',
    '"So without further ado, how about we dive in!"',
];

const translation = [
    '"Kamu bertanya, siapa aku? Aku adalah Sang Kurator, aku akan mengawasi perjalananmu menjelajahi dunia-dunia dibalik layar ini."',
    '"Setiap dunia terbuat dari sebuah cerita yang tentunya memiliki kisah yang berbeda. Dalam dunia-dunia itu, ada banyak sekali hal yang bisa kamu pelajari."',
    '"Sayangnya, dunia tersebut tidak rampung. Dan itulah mengapa kamu di sini! Aku harap kamu dapat meminjamkan pengetahuan dan ketangkasanmu untuk membantu kami semua."',
    '"Tentu saja, kami akan membantumu sebaik mungkin."',
    '"Sebelum Chapter dimulai, kamu akan mendapatkan catatan-catanan yang akan membantumu menyelesaikan tugasmu. Catatan-catatan tersebut akan menyediakan informasi mengenai tata bahasa yang akan dipelajari dalam Chapter tertentu."',
    '"Setelah mencapatkan catatan, kamu bisa melihatnya kapan saja. Klik tombol <b>View Notes</b> yang bisa diakses dari menu atas kanan."',
    '"Saat kamu memasuki satu dunia, kamu akan dikenalkan dengan kosakata yang akan dipakai dalam Chapter tersebut."',
    '"Chapter akan terdiri dari suatu cerita, dan tugasmu adalah untuk menyelesaikan cerita itu dengan melengkapi bagian yang kosong dengan kata-kata yang tepat dengan memilih pilihan yang benar."',
    '"Pada awal Chapter, kamu akan mendapatkan <b>Life Point</b> setara dengan <b>1000</b> poin. Tapi hati-hati. Jika kamu memilih jawaban yang salah terlalu banyak, kamu bisa menerima <i>damage</i> yang akan mengurangi Life Points-mu."',
    '"Semakin tinggi Life Points yang kamu punya, semakin baik. Ingatlah bahwa kamu bisa gagal memenuhi kualifikasi untuk menyelamatkan dunia tertentu."',
    '"Jangan terlalu khawatir. Aku yakin kamu akan baik-baik saja!"',
    '"Nah, tanpa basa-basi, bagaimana jika kita mulai!"',
];

function tutorialText() {
    var textElement = document.getElementById("text");
    var next = document.getElementById("next-button");
    var translate = document.getElementById("translate-content");

    textElement.innerHTML = text[i];
    document.getElementById("illustration").src = img[i];
    translate.innerHTML = translation [i];


    if (i === (text.length - 1)) {
        next.classList.add("d-sm-none");
        var chapt1 = document.getElementById("chapter1");
        chapt1.classList.remove("d-sm-none");
    } else {
        i++;
    }

}

function showNext() {
    var next = document.getElementById("next-button");
    next.classList.remove("invisible");
    var takeNotes = document.getElementById("takeNotes");
    takeNotes.classList.add("d-sm-none");
}
