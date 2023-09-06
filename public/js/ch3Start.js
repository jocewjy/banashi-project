var i = 0;
var count = 0;

// Starting Chapter
const img = [
    'images/ginger/ginger_neutral.png', //my
    'images/ginger/ginger_amuse.png', //wow
    'images/ginger/ginger_neutral.png', //anyw
    'images/ginger/ginger_amuse.png', //hm
    'images/ginger/ginger_amuse.png', //guess
    'images/ginger/ginger_amuse.png', //when
    'images/ginger/ginger_amuse.png', //now
]

const text = [
    '"My name’s Ginger. Definitely not from ‘gingerbread’, remember that! So what’s yours?"',
    '"Wow, great name. Kinda makes me jealous. Everyone has a good name but look at me, born with GINGER as my name."',
    '"Anyway, from the look of your face you’ve been through the other world I suppose?"',
    '"Hm, hm. Means there’s no need for explanation. Hurry, hurry, this world is missing its content and it’s not hard I swear."',
    '"Guess you have also received the notes. I`m a good bread so I will give you time to learn first. Better to be safe than sorry, right?"',
    '"When you`re ready, just tell me!"',
    '"Now, come, come. Let me read you my story."',
];

function next_btn() {
    var textElement = document.getElementById("text");
    var next = document.getElementById("next-button");

    var myAnswer = document.getElementById("my-answer");
    var myAnswer2 = document.getElementById("my-answer2");
    var myAnswer3 = document.getElementById("my-answer3");
    var start_story = document.getElementById("start-story");

    textElement.innerHTML = text[i];
    document.getElementById("illustration").src = img[i];


    if (next.classList.contains("invisible")) {
        next.classList.remove("invisible");
        if (!myAnswer.classList.contains("d-none")) {
            myAnswer.classList.add("d-none");
        }
        if (!myAnswer2.classList.contains("d-none")) {
            myAnswer2.classList.add("d-none");
        }
        if (!myAnswer3.classList.contains("d-none")) {
            myAnswer3.classList.add("d-none");
        }
        if (!start_story.classList.contains("d-none")) {
            start_story.classList.add("d-none");
        }
    }

    if (i === 0) {
        myAnswer.classList.remove("d-none");
        next.classList.add("invisible");
    }

    if (i === 2) {
        myAnswer2.classList.remove("d-none");
        next.classList.add("invisible");
    }

    if (i === 5) {
        myAnswer3.classList.remove("d-none");
        next.classList.add("invisible");
    }

    if (i === (text.length - 1)) {
        start_story.classList.remove("d-none");
        next.classList.add("invisible");
    } else i++;
}

function showStory1() {
    var start_story = document.getElementById("start-story");
    start_story.classList.add("d-none");

    var curator_img = document.getElementById("curator-img");
    curator_img.classList.add("d-none");

    var next = document.getElementById("next-button");
    next.classList.add("d-none");

    var dialogue = document.getElementById("dialogue");
    dialogue.classList.add("d-none");

    var choices = document.getElementById("choices"); // Get div id
    choices.classList.remove("d-none"); // Make it appear

    var story_quiz = document.getElementById("story-quiz");
    story_quiz.classList.remove("d-none");

    var point_div = document.getElementById("point-div");
    point_div.classList.remove("d-none");

    setChoiceBtn();
}

// Story Chapter & Quizzes
const text_story = [
    'She put in some more water and some more flour, and then rolled it out into a tasty dough.',
    'Next, she said, “I`m going to make a little gingerbread man for little Bobby.”',
    'Two still smaller pieces were made into arms, with dear little hands and fingers.',
    'The head was nicest work, for the top was shaped into a pretty sugary hat.',
    'A beautiful mouth was made from a big raisin, and two bright little eyes with burnt almonds and caraway seeds. Finally, a very jolly little gingerbread man was ready to be baked.',
    'Because of that, she put the little gingerbread man in a far back corner, where he couldn’t get away in a hurry. Then she went up to sweep the parlor.',
    'The square and round cakes were all done, so was the gingerbread man. He was standing up in his corner, with his little seeds eyes sparkling, and his raisin mouth bubbling with mischief.',
    'The instant the door was opened, with a hop and a jump, he went right over the square cakes and the round cakes, and over the cook’s arm.',
    '"Run, run, as fast as you can! You can`t catch me, I`m the Gingerbread Man!" <br>The old cook turned around as fast as she could, and things had been quite taken by surprise, then she saw old Mouser, the cat, lying right across the door-way sleeping in the sun.',
    'The little gingerbread man cleverly jumped under her tail, and in an instant was trotting down the garden walk.',
    'Now at the bottom of the walk, lying fast asleep in the sun was Towser, the dog. And the cook called out: “Towser, Towser, stop him, stop him! Stop the gingerbread man! I want him for little Bobby.”',
    'Towser saw nothing but the cat running towards him, and behind the cat the cook, now quite out of breath. <br> "Run, run, as fast as you can! You can`t catch me, I`m the Gingerbread Man!"',
    'Now, if there was anything that Towser liked, it was going after the cat, so he jumped so fiercely and Mouser and Towser came together, tumbled with a great barking, and meowing, and howling.',
    'They all three rolled over on round and round together. <br>Meanwhile, the gingerbread man had climbed up on the garden wall, and stood on the top, looking at the tussle, and laughing till eyes tearing and mouth bubbling.',
    'The irked dog let go of the cook, and at last, catching sight of the gingerbread man, made a bolt for the garden wall.',
    'When the gingerbread man saw the dog coming, he jumped down on the farther side of the wall, and began running across the field.',
    'He saw the little man running across the field and heard the cook calling, “Jocko, Jocko, stop the gingerbread man!”',
    '“Now, I know the dog can’t climb a tree, and I don’t believe the old cook can climb a tree; and as for the monkey I’m not sure, for I’ve never seen a monkey before, but I am going up.”',
    'So he pulled himself up hand over hand until he had got to the topmost branch. <br> "Climb, climb, as fast as you can! You can`t catch me, I`m the Gingerbread Man!"',
    'Stretching out his long arm, he pulled the gingerbread man in.',
    'And suddenly little Bobby himself came running up.',
    'He could see through the window in the field beyond the garden, the cook, and the dog, and the monkey, and could even hear the barking of Towser and the chattering of Jocko.',
    '“Drop it, Jocko!” cried Bobby, and Jocko did. He dropped it so straight into Bobby`s hands.',
    'But Bobby was too hungry to mind gingerbread tears.',
];
const quiz = [
    'She took the square tins and cut out square cakes for the boys, then with a round tins she cut out <span id="blank" data-text="round cakes">_______</span> for the little girls.',
    'So, she pulled off <span id="blank" data-text="a round lump of dough">_______</span> for his body, and a smaller lump for his head. She then shaped the two legs and two smaller pieces of arms.',
    'Two other lumps were made for the legs, and were pulled out into proper shape, with <span id="blank" data-text="feet and toes">_______</span> all complete.',
    'On both sides, little ears <span id="blank" data-text="were made">_______</span>, and the nose was carefully molded.',
    'The little gingerbread appeared so sly the cook was afraid he <span id="blank" data-text="was plotting">_______</span> some mischief.',
    'She swept until the clock struck twelve! Shocked, the cook dropped her broom in a hurry, and exclaimed, “My! The gingerbread would be baked to cinder!” <br> Hurriedly, she ran down into the kitchen, and <span id="blank" data-text="threw">_______</span> open the oven door.',
    'He <span id="blank" data-text="had been waiting">_______</span> for the oven door to be opened.',
    'Before she could yell, he was running across the kitchen floor, as fast as his <span id="blank" data-text="little feet">_______</span> would carry him, towards the back door, and through which he could see the garden path.',
    '“Mouser, Mouser!” she cried, “stop the gingerbread man! I want him for little Bobby.” When the cook called. <br> The old cat <span id="blank" data-text="sprang">_______</span> up with a jump, but just as she turned round to ask the cook what all the noise was about.',
    'Mouser turned in a hurry and ran after the cook who <span id="blank" data-text="kept">_______</span> chasing the gingerbread man.',
    'Then the dog woke up in good earnest, and jumped up on his feet to see what it was that he should stop. But just as the dog jumped up, the little gingerbread man quietly <span id="blank" data-text="slipped">_______</span> between his legs, and climbed up on the top of the stone wall.',
    'He thought that the cat must <span id="blank" data-text="have stolen">_______</span> something, and that it was the cat the cook wanted him to stop. ',
    'But the old cook had been running so hard that she was not able to stop herself any better and she <span id="blank" data-text="fell">_______</span> right on top of the mixed up dog and cat.',
    '"Run, run, as fast as you can! You can`t catch me, I`m the Gingerbread Man!" <br>After a little while, the cat <span id="blank" data-text="managed">_______</span> to pull herself out that she had had enough of hunting gingerbread men.',
    'The cook picked herself up, with a badly scratched face and torn dress, she <span id="blank" data-text="was determined">_______</span> to see the end of the chase',
    'Now in the middle of the field was <span id="blank" data-text="a tree">_______</span>, and at the foot of it was lying Jocko, the monkey.',
    'And Jocko at once <span id="blank" data-text="gave">_______</span> one big jump. But he jumped so fast and so far that he went right over the gingerbread man, stumbling to Towser the dog.',
    'Said the gingerbread man to himself as he <span id="blank" data-text="had got">_______</span> to the bottom of the tree.',
    'But the monkey had jumped with one spring onto the lowest branch, and in an instant he also was at the top of the tree. The gingerbread man crawled out to the furthermost end of <span id="blank" data-text="a branch">_______</span>, and hung by one hand, but the monkey swung himself under the branch.',
    'He held him up and looked at him so hungrily that little raisin mouth began to pucker down at the corners, and caraway-seed eyes filled with <span id="blank" data-text="tears">_______</span>.',
    'He had been taking his noon nap until finally he <span id="blank" data-text="woke">_______</span> up, and was so sure that someone was calling him that he ran downstairs.',
    'He ran down the path, climbed over the wall, and arrived under the tree, just as the <span id="blank" data-text="group">_______</span> caught up and Jocko was holding up the poor little gingerbread man.',
    'Then Bobby <span id="blank" data-text="held">_______</span> him up and looked at him, and the little raisin mouth puckered down lower than ever, and tears ran right out of the caraway-seed eyes.',
    'He <span id="blank" data-text="gave">_______</span> one big bite, and swallowed both legs and a piece of the body. “Oh!” said the gingerbread man, “I’m one-third gone!”',
];

// Choices Button
const button_arr = [];
button_arr[0] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a round cakes </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="true"> round cakes </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> round cake </button> </div>';
button_arr[1] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> a round lump of dough </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> round lump of doughs </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a dough </button> </div>';
button_arr[2] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> foots and toes </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> feet and toe </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> feet and toes </button> </div>';
button_arr[3] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> was made </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> were make </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> were made </button> </div>';
button_arr[4] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> was plotted </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> was plotting </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> was plot </button> </div>';
button_arr[5] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> threw </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> thrown </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> throwed </button> </div>';
button_arr[6] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> he has been waiting </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> he had been waiting </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> he had been waited </button> </div>';
button_arr[7] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> footed </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> feet </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> foots </button> </div>';
button_arr[8] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> sprang </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> sprung </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> springed </button> </div>';
button_arr[9] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> keeped </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> keeps </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> kept </button> </div>';
button_arr[10] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> slap </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> slop </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> slipped </button> </div>';
button_arr[11] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> have stole </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> have stolen </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> have steal </button> </div>';
button_arr[12] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> fell </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> felled </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> fallen </button> </div>';
button_arr[13] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> managing </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> manages </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> managed </button> </div>';
button_arr[14] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> was determine </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> was determined </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> were determine </button> </div>';
button_arr[15] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> a tree </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a trees </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> trees </button> </div>';
button_arr[16] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> gave </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> gaves </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> given </button> </div>';
button_arr[17] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> has got </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> had got </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> has gotten </button> </div>';
button_arr[18] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a branches </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a brunch </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> a branch </button> </div>';
button_arr[19] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a tear </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> tears </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> teares </button> </div>';
button_arr[20] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> wake </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> woke </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> woken </button> </div>';
button_arr[21] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> group </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> groups </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> groupies </button> </div>';
button_arr[22] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> helded </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> helds </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> held </button> </div>';
button_arr[23] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> gaves </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> gave </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> gaved </button> </div>';



function nextQuestion() {
    var nextQuestion = document.getElementById("nextQuestion");
    if (!nextQuestion.classList.contains("d-none")) { // If appears
        nextQuestion.classList.add("d-none"); // Make it disappears
    }

    var story = document.getElementById("story-display");
    story.innerHTML = text_story[count];

    var quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quiz[count];

    var buttons = document.getElementById("buttons");
    buttons.innerHTML = button_arr[count];

    setChoiceBtn();

    if (count === (text_story.length - 1)) {
        $(document).ready(function () {
            $('#nextQuestion').click(function () {
                var final_points = $('#points').text();
                $('#inputValue').val(final_points);
                console.log($('#inputValue').val());
            });
        });
    }

    if (count === text_story.length) {
        story.innerHTML = "Bobby gave a second bite, and swallowed the rest of the body and the arms. “Oh!” said the gingerbread man, “I’m two-thirds gone!”";
        quizElement.innerHTML = "Bobby gave a third bite, and gulped down the head. “Oh!” said the gingerbread man, “I’m all gone!”";

        var choices = document.getElementById("choices");
        choices.classList.add("d-none");

        var input_points = document.getElementById("inputPoints");
        input_points.classList.remove("d-none");
    } else count++;

}

function setChoiceBtn() {
    var choice = document.querySelectorAll(".choice");
    var blank = document.getElementById("blank");

    // For every btn which has 'choice' class, they have function(event) when click
    for (var ctr = 0; ctr < choice.length; ctr++) {
        choice[ctr].addEventListener("click", function (event) {
            var chosen_btn = event.target;
            var nextQuestion = document.getElementById("nextQuestion");

            if (chosen_btn.value === "true") {
                // Change blank with the correct answer
                blank.innerHTML = blank.getAttribute("data-text");
                nextQuestion.classList.remove("d-none");

                // Change btn background color to green
                chosen_btn.classList.remove("btn-outline-primary");
                chosen_btn.classList.add("btn-success");

                // Make other button disabled
                // Select all buttons that do not have a value of "true"
                var falseButtons = document.querySelectorAll('button.choice:not([value="true"])');
                // Disable all false buttons
                for (var j = 0; j < falseButtons.length; j++) {
                    falseButtons[j].setAttribute('disabled', 'disabled');
                }
            } else {
                // Change btn background color to red
                chosen_btn.classList.remove("btn-outline-primary");
                chosen_btn.classList.add("btn-danger");

                // Decrease chapter points
                var pointsSpan = document.getElementById("points");
                var pointsValue = parseInt(pointsSpan.innerHTML);

                if (pointsValue > 0) {
                    var totalPoints = pointsValue - 20;
                    pointsSpan.innerHTML = totalPoints.toString();
                }
            }
            // If button with function(event) clicked, the method won't run again
            event.target.removeEventListener("click", arguments.callee);
        });
    };
}

// function showNext() {
//     var next = document.getElementById("next-button");
//     next.classList.remove("invisible");
//     var takeNotes = document.getElementById("takeNotes");
//     takeNotes.classList.add("d-none");
// }
