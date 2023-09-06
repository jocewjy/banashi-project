var i = 0;
var j = 0;

const img = [
    'images/lilRed/ltred_smile.png', //thank
    'images/lilRed/ltred_happy.png', //your
    'images/lilRed/ltred_smile.png', //you
    'images/lilRed/ltred_happy.png', //i cant
    'images/lilRed/ltred_neutral.png', //goodybye
]

const finished_scene = [
    '"Thank you for your help, let`s see if your hard work will bring good to this story."',
    '"Your current points are ',
];

const passed_scene = [
    '"I can`t thank you enough for your help. But I must ask you to help the other world."',
    '"Good bye to you. May we meet again in your fairy tales."',
]


function next_btn() {
    var textElement = document.getElementById("text");

    if (i === 1) {
        textElement.innerHTML = finished_scene[i] + '<b>' + points + '</b>."';
        document.getElementById("illustration").src = img[i];
    } else {
        textElement.innerHTML = finished_scene[i];
        document.getElementById("illustration").src = img[i];
    }

    if (i === (finished_scene.length)) {
        if (parseInt(points) > 450) {
            textElement.innerHTML = '"You passed! You complete the story and save us!"';
            $(document).ready(function () {
                $('#next-button').click(function () {
                    textElement.innerHTML = passed_scene[j];
                    document.getElementById("illustration").src = img[i];
                    if (j === 1) {
                        document.getElementById('go-home-btn').classList.remove('d-none');
                        document.getElementById('next-button').classList.add('d-none');
                    } else {
                        j++; i++;
                    }
                });
            });

        } else {
            var next_btn = document.getElementById("next-button");
            next_btn.classList.add("invisible");

            var quit = document.getElementById("quit-chapter");
            quit.classList.remove('d-none');

            var try_again = document.getElementById("try-again");
            try_again.classList.remove("d-none");

            textElement.innerHTML = '"Oh no… It seems you made mistakes along the way. It`s okay, everyone makes mistakes at the start. What`s important is whether you`re still willing to try again or not."';
            document.getElementById("illustration").src = 'images/lilRed/ltred_sad.png';
        }
    } else i++;
}
