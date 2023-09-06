var i = 0;
var count = 0;

// Starting Chapter
const img = [
    'images/pigies/peggi_frown.png', //silly
    'images/pigies/pogi_sily.png', //oh
    'images/pigies/peggi_happy.png', //forgive
    'images/pigies/pugi.png', //nice
    'images/pigies/pogi_sad.png', //yea
    'images/pigies/peggi_smile.png', //now
    'images/pigies/peggi_smile.png', //our
    'images/pigies/pugi.png', //the
    'images/pigies/peggi_happy.png', //well
    'images/pigies/peggi_smile.png', //now

]

const text = [
    '"Silly Poggi! They`re the person we`ve been waiting for. We just talked about it!”"',
    '"Oh… OH!"',
    '"Forgive my brother, he`s a bit silly sometimes. I`m Peggi and these are my brothers Poggi and Puggi."',
    '"Nice to meet you."',
    '"Yeah, hello. Sorry for being too jumpy earlier."',
    '"Now that you`re here, I assume that you already know what happens throughout some worlds?"',
    '"Our world is incomplete and we need your help. It might be insignificant to you but it`s very important to those of us who live in this world."',
    '"The story of this world is missing some grammars too. If it`s you, It will be easy, I suppose."',
    '"Well, since you have receive a little note earlier at the entrance, feel free to check on it whenever you need it."',
    '"Now, come, come. Let me read you our story."',
];

function next_btn() {
    var textElement = document.getElementById("text");
    var next = document.getElementById("next-button");

    var myAnswer = document.getElementById("my-answer");
    var myAnswer2 = document.getElementById("my-answer2");
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
        if (!start_story.classList.contains("d-none")) {
            start_story.classList.add("d-none");
        }
    }

    if (i === 5) {
        myAnswer2.classList.remove("d-none");
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
    'The first was a complete sloth. He did not want to work at all, thus he built his house using straw.',
    'The second little pig worked a little bit harder than the youngest, yet in the end, he got lazy and used sticks to build his house.',
    'The third pig was the only one who had yet to finish building his house. He used sturdy materials to build his house. Unlike his two siblings` house, it had a fireplace complete with the chimney which he could use to warm himself up during winter.',
    'The next day, a hungry wolf happened to pass by the lane where the three little pigs lived. Smelling the pigs, he was lured over and finally saw the three houses.',
    'Clouded by hunger, the wolf walked toward the first house, lifted his strong front paw, and knocked on the flimsy door, rattling it easily.<br> The wolf called out, "Little pig! Little pig! Let me in! Let me in!"',
    'Hearing it refuse, the wolf merely bared his teeth and said: “Then I`ll huff and puff and I`ll blow your house down.” True to his words, the wolf huffed and puffed and blew!',
    'Humiliated, the wolf followed the scent, continuing down the lane and he passed by the second house which was made of sticks.',
    'So it knocked on the house door and eerily said: “Little pigs! Little pigs! Let me in! Let me in!”',
    'So the wolf grinned, showing his sharp teeth, and said, “Then I`ll huff and puff and I`ll blow your house down!” So he huffed and puffed and he blew the house down!',
    'His big jaws clamped down on nothing but air.',
    'The second failure had truly angered the big wolf. He chased them down the lane, almost catching them.',
    'They made it to the brick house, the third little pig had built, and slammed the door closed before the wolf could catch them.',
    'Chasing the pigs around, made them smell stronger, and the wolf`s stomach growl loudly.',
    'So the wolf knocked on the door and said: “Little pigs! Little pigs! Let me in! Let me in!” <br> But the little pigs saw his narrow eyes through the keyhole, so their answer was the same: “No! No! No! Not by the hairs on our chinny chin!” <br> Then the wolf showed his teeth and said: “Then I`ll huff and puff and I`ll blow your house down.”',
    'And he huffed a lot and puffed a lot; but the house still stood strong as if his efforts were nothing!',
    'The house was too sturdy for him to blow and too hard to destroy.',
    'But he was exhausted, he needed to stop and rest and think a bit. He swore he would never leave until he could catch and eat them all!',
    'Oh! He noticed the quiet chimney over the roof! How happy he was, thinking that going down the chimney was a very good idea.',
    'However, while he was climbing on to the roof, the little pigs made a blazing fire and put on a big pot full of water to boil.',
];
const quiz = [
    'His home was a simple <span id="blank" data-text="brittle">_______</span> house which had nothing in it, as long as he can sleep inside.',
    'It might be feeble but <span id="blank" data-text="quite good">_______</span> to be a house. Afterwards, he sang, danced, and played for the rest of the day.',
    'His house could withstand the strongest wind, and it was obvious that out of the three siblings, the youngest worked <span id="blank" data-text="the hardest">_______</span>.',
    'Realizing that there were three pigs, the wolf`s mouth began to water, thinking that these pigs would be <span id="blank" data-text="an amazing">_______</span> meal.',
    'The first pig peeked through the keyhole and saw <span id="blank" data-text="his">_______</span> big paws through the keyhole, so he answered back: “No! No! No! Not by the hairs on my chinny chin!”',
    'The house broke down in a mere second and the wolf opened his jaw widely and bit down... on nothing! The first little pig escaped and ran away to hide in <span id="blank" data-text="his brother`s">_______</span> house.',
    'He saw the house of stick, and the wolf grew <span id="blank" data-text="delightful">_______</span>, thinking that he could also blow this house and eat two pigs in one go!',
    'But the two little pigs saw the wolf`s pointy ears through the gap of the house`s <span id="blank" data-text="unstable">_______</span> sticks, so they answered back: “No! No! No! Not by the hairs on our chinny chin!”',
    'The wolf was greedy, but he become <span id="blank" data-text="greedier">_______</span>. He tried to catch both pigs at once, and got neither!',
    'The two little pigs scrambled away as fast as <span id="blank" data-text="their">_______</span> little hooves would carry them.',
    'The two little pigs were <span id="blank" data-text="very">_______</span> frightened, the wolf wanted to devour them! Their fear caused them ran even quicker.',
    'The wolf hadn`t eaten all day. He was <span id="blank" data-text="hungry enough">_______</span> to truly gobble three little pigs in one go',
    'He knew that the three little pigs would make a <span id="blank" data-text="delicious">_______</span> feast once he caught them all!',
    'So <span id="blank" data-text="the awful wolf">_______</span> huffed and puffed! He huffed and puffed.',
    'At last, he spent all of <span id="blank" data-text="his breath">_______</span> until he couldn`t huff and puff anymore. ',
    'The wolf danced with rage, <span id="blank" data-text="terribly">_______</span> angry and swore he would come and eat them all.',
    'The wolf looked up, observing the brick house with his <span id="blank" data-text="keen">_______</span> eyes.',
    'So, he climbed up and up and was very <span id="blank" data-text="excited">_______</span> to catch the little pigs for his supper.',
    'Then, just as he was coming down the chimney, the little piggy pulled off the lid, and <span id="blank" data-text="the frightening wolf">_______</span> plopped into the scalding water.',
];

// Choices Button
const button_arr = [];
button_arr[0] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> clever </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="true"> brittle </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> delicious </button> </div>';
button_arr[1] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> quite sad </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> quite awful </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> quite good </button> </div>';
button_arr[2] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> the harder </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> hardest </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> the hardest </button> </div>';
button_arr[3] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> an amazing </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a terrible </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> an amazingly </button> </div>';
button_arr[4] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> he </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> his </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> he`s </button> </div>';
button_arr[5] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> his brother`s </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> his brother </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> he`s brother</button> </div>';
button_arr[6] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> beautiful </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="false"> friendly </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> delighful </button> </div>';
button_arr[7] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> unstable </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> unstabler </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> unstabling </button> </div>';
button_arr[8] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> greedier </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> more greedy </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> more greedier </button> </div>';
button_arr[9] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> theirs` </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> their </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> theirs </button> </div>';
button_arr[10] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> quite </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> slightly </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> very </button> </div>';
button_arr[11] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> hungry </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> enough hungry </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> hungry enough </button> </div>';
button_arr[12] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> clever </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="false"> brittle </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> delicious </button> </div>';
button_arr[13] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> the awful wolf </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="false"> the angry wolf </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> the friendly wolves </button> </div>';
button_arr[14] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> theirs breath </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="false"> hers breath </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> his breath </button> </div>';
button_arr[15] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> cheerfully </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="true"> terribly </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> cleverly </button> </div>';
button_arr[16] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> sad </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="true"> keen </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> fearless </button> </div>';
button_arr[17] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> excited </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="false"> exciting </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> excitingly </button> </div>';
button_arr[18] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> the frighteningly wolf </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="true"> the frightening wolf </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> the fright wolf </button> </div>';

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
        story.innerHTML = "Quickly, the little pigs placed down the lid and boiled the wolf to his death. In the end, the three little pigs ate him up for supper.";
        quizElement.innerHTML = "The first and the second little pigs promised to themselves, that they didn`t want to be lazy and will always do their best to work hard.";

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
