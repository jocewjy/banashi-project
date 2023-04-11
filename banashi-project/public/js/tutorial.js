var i = 0;
var count = 0;

function tutorialText() {
    const text = [
        '"Who am I, you asked? I`m the Curator, the one who will watch you to the worlds beyond this screen."',
        '"Each world is made of a story and of course every story is different. In those worlds, there are so many things you can learn."',
        '"Unfortunately, they`re incomplete. And that is why you`re here!"',
        '"People in those worlds need you. I hope you can lend your knowledge and aptitude to help us all."',
        '"It`s not hard, your task is to complete the story in each world. And to complete them, you need to fill the blanks with fitting words, by choosing the right grammar or vocabulary."',
        '"Of course we will try our best too to assist you."',
        '"You will receive some notes that can help you completing your task. The notes will provide some information regarding the grammar that is learned in the specific chapter."',
        '"But be careful. If you choose the wrong answer too many times, you will failed to meet the qualification to save that certain world."',
        '"Don`t worry too much. I`m sure you will do just fine!"',
        '"So without further ado, how about we dive in!"',
    ];

    const translation = [
        '"Kamu bertanya, siapa aku? Aku adalah Sang Kurator, aku akan mengawasimu menjelajahi dunia-dunia dibalik layar ini."',
        '"Setiap dunia terbuat dari sebuah cerita yang tentunya memiliki kisah yang berbeda. Dalam dunia-dunia itu, ada banyak sekali hal yang bisa kamu pelajari."',
        '"Sayangnya, dunia tersebut tidak rampung. Dan itulah mengapa kamu di sini!"',
        '"Orang-orang di dunia itu membutuhkanmu. Aku harap kamu dapat meminjamkan pengetahuan dan ketangkasanmu untuk membantu kami semua."',
        '"Ini tidak sulit, tugasmu adalah untuk menyelesaikan cerita mereka. Untuk menyelesaikannya, kamu perlu melengkapi kekosongan dengan kata-kata yang cocok dengan memilih tata bahasa atau kosakata yang benar."',
        '"Tentu saja, kami akan membantumu sebaik mungkin."',
        '"Kamu akan mendapatkan catatan-catanan yang akan membantumu menyelesaikan tugasmu. Catatan-catatan tersebut akan menyediakan informasi mengenai grammar yang akan dipelajari dalam Chapter tertentu."',
        '"Tapi hati-hati. Jika kamu memilih jawaban yang salah terlalu banyak, kamu akan gagal memenuhi kualifikasi untuk menyelamatkan dunia itu."',
        '"Jangan terlalu khawatir. Aku yakin kamu akan baik-baik saja!"',
        '"Nah, tanpa basa-basi, bagaimana jika kita mulai!"',
    ];

    var textElement = document.getElementById("text");
    var next = document.getElementById("next-button");

    textElement.innerHTML = text[i];

    if (i === (text.length - 1)) {
        next.classList.add("d-sm-none");
        var chapt1 = document.getElementById("chapter1");
        chapt1.classList.remove("d-sm-none");
    } else i++;

}

function showNext() {
    var next = document.getElementById("next-button");
    next.classList.remove("invisible");
    var takeNotes = document.getElementById("takeNotes");
    takeNotes.classList.add("d-sm-none");
}
