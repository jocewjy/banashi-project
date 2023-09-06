var i = 0;
var j = 0;

const img = [
    'images/pigies/pogi_sad.png', //well
    'images/pigies/peggi_smile.png', //let
    'images/pigies/pugi.png', //your
    'images/pigies/peggi_happy.png', //no
    'images/pigies/peggi_smile.png', //howe
    'images/pigies/pugi.png', //yes
    'images/pigies/peggi_smile.png' //thank
]

const finished_scene = [
    '"Well, that was a ride. Scary bad wolf…"',
    '"Let me thank you for the help. Now let`s see how well your work is."',
    '"Your current points are ',
];

const passed_scene = [
    '"No amount of thanks will enough to appreciate what you`ve just done! However this is so far we can accompany you, now that this world is saved."',
    '"Yes, please go saved the other world. They must`ve been waiting for you too."',
    '"Thank you again. And farewell. May we meet again in your fairy tales."',
]


function next_btn() {
    var textElement = document.getElementById("text");

    if (i === 2) {
        textElement.innerHTML = finished_scene[i] + '<b>' + points + '</b>"';
        document.getElementById("illustration").src = img[i];
    } else {
        textElement.innerHTML = finished_scene[i];
        document.getElementById("illustration").src = img[i];
    }

    if (i === (finished_scene.length)) {
        if (parseInt(points) > 450) {
            textElement.innerHTML = '"My goodness, you did it!"';
            $(document).ready(function () {
                $('#next-button').click(function () {
                    textElement.innerHTML = passed_scene[j];
                    document.getElementById("illustration").src = img[i];
                    console.log(i);
                    if (j === 2) {
                        document.getElementById('go-home-btn').classList.remove('d-none');
                        document.getElementById('next-button').classList.add('d-none');
                    } else {
                        j++; i++;
                    }
                });
            });

        } else {
            var quit = document.getElementById("quit-chapter");
            quit.classList.remove('d-none');

            var try_again = document.getElementById("try-again");
            try_again.classList.remove("d-none");

            textElement.innerHTML = '"Oh no… It seems you made mistakes along the way. It`s okay, everyone makes mistakes at the start. What`s important is whether you`re still willing to try again or not."';
            document.getElementById("illustration").src = 'images/pigies/pogi_sad.png';
        }
    } else i++;
}
