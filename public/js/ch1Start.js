var i = 0;
var count = 0;

// Starting Chapter
const img = [
    'images/lilRed/ltred_smile.png',
    'images/lilRed/ltred_happy.png',
    'images/lilRed/ltred_sad.png',
    'images/lilRed/ltred_happy.png',
    'images/lilRed/ltred_smile.png',
    'images/lilRed/ltred_neutral.png',
    'images/lilRed/ltred_smile.png',
    'images/lilRed/ltred_happy.png',
]

const text = [
    '"Are you the one they sent to help me? My name is Charlotte, and you are?"',
    '"Nice to meet you! I`m so glad that you come."',
    '"You know, this world hasn`t been feeling its best lately and I hope I can use your help. Are you willing to help me?"',
    '"Great! This world, and just like the others, has lost words in their story. This is a problem because if it happens, no one would visit our story anymore."',
    '"People in this world need you. I hope you can lend your knowledge and aptitude to help us all."',
    '"I`m sure you have come here prepared, right? It seems you`ve receive a notes that can help you."',
    '"You just need to complete the story by filling the missing words with the correct ones."',
    '"Now, come, come. Let me read you my story."',
];

function next_btn() {
    var textElement = document.getElementById("text");
    var next = document.getElementById("next-button");
    var translate = document.getElementById("translate-content");

    var myAnswer = document.getElementById("my-answer");
    var myAnswer2 = document.getElementById("my-answer2");
    var start_story = document.getElementById("start-story");

    textElement.innerHTML = text[i];
    document.getElementById("illustration").src = img[i];
    translate.innerHTML = translation [i];


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

    if (i === 0) {
        myAnswer.classList.remove("d-none");
        next.classList.add("invisible");
    }

    if (i === 2) {
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
    'One day her mother said to her, "Come, Little Red Riding Hood, here is a piece of cake and a bottle of fresh juice."',
    '"Set out before it gets dark, walk nicely and quietly and do not run off the path, or you may fall and break the bottle."<br>“I will take great care,” said Little Red Riding Hood to her mother, and gave her hand on it.',
    '"Good day, Little Red Riding Hood. Where are you this early?" greeted the wolf.<br>"Good day, Mr. Wolf. I am on my way to visit my grandmother`s house."',
    'Little Red Riding Hood was unaware of the wickedness of the creature and so remained at ease.',
    '"Where does your grandmother live, Little Red Riding Hood?"<br>"A good quarter of a league farther on in the woods.',
    '"What a nice plump mouthful of meat, she will taste better than the old woman."',
    'So he walked slowly by the side of Little Red Riding Hood, like a tame wolf he was trying to be. Then the wolf spoke up, "Little Red Riding Hood, see how pretty the flowers are here."',
    'Little Red Riding Hood lifted her eyes. Seeing the sunbeams softly piercing through the gaps of the trees, she understood what the wolf means.',
    'So she ran from the path into the woods to look for flowers.',
    'It is so early in the day that she shall still get there in good time.',
    'Meanwhile, the wolf rushed straight to the house and knocked at the door.<br>"Who is there?"<br>"Little Red Riding Hood," replied the wolf. "She is bringing cake and wine. Open the door."',
    'The wolf lifted the latch, the door sprang open.',
    'After that, he put on her clothes and cap, lay himself in bed, and drew the curtains.',
    'The second she arrived, she was surprised to find the cottage-door open. A strange feeling bubbled in her heart as she murmured to herself.',
    'Hesitantly, she called out, "Good morning." and received no answer. She slowly stepped into the cottage and headed toward the bedroom. There, lay her grandmother with her cap pulled over her face, appearing very strange.<br>"Oh, grandmother," she said, "that big ears you have."',
    '"Why, so I can see my dear granddaughter better, of course."',
    '"So, that I can hug you better."',
    '"Much more satisfying to eat you with!"<br>Right after the wolf finished his words, he jumped out of the bed and swallowed Little Red Riding Hood whole.',
    'The huntsman passing by the house heard the loud snore, and was drawn by the noise. The huntsman passing by the house heard the loud snore, and was drawn by the noise.',
    'So he took a pair of scissors, and began to cut open the stomach of the sleeping wolf.',
    'The little girl crying, "Ah, how frightened I have been. How dark it was inside the wolf."',
    'After that the aged grandmother also came out alive.',
    'The hunter sew it back the stomach together so the stones stayed in his belly.',
    'Then all three were delighted.',
];

const quiz = [
    '"Take <span id="blank" data-text="these">_______</span> to your grandmother. She is ill and weak, and they will make her feel good."',
    'Little Red Riding Hood`s grandmother lived in the woods, located half a league away from her village. Just as Little Red Riding Hood entered the woods, she met <span id="blank" data-text="a wolf">_______</span>.',
    '"What is <span id="blank" data-text="that">_______</span> in your basket?"',
    '"Cake and wine. I deliver them <span id="blank" data-text="myself">_______</span>, to make my grandmother, who has been feeling unwell, better."',
    '"Her house stands under the three large oak-trees, the nut-trees are just below. <span id="blank" data-text="You">_______</span> surely must know it," replied Little Red Riding Hood.',
    '"I must act craftily, to catch adn eat both the grandmother and this little girl." The wolf thought to <span id="blank" data-text="himself">_______</span>.',
    '"Why do you not look around? You walk gravely along, while <span id="blank" data-text="plenty">_______</span> here in the woods are merry."',
    'Pretty flowers growing in <span id="blank" data-text="each">_______</span> nook. ',
    'She thought, "I suppose I should bring grandmother <span id="blank" data-text="some">_______</span> fresh daisies.',
    'Whenever she picked one, she saw a prettier <span id="blank" data-text="one">_______</span> farther on,and went to pick the new one, eventually venturing deeper and deeper into the woods.',
    '"Lift the latch," called out <span id="blank" data-text="the">_______</span> grandmother, "I am too weak, and cannot get up."',
    'Without saying <span id="blank" data-text="any">_______</span> word he went straight to the grandmother`s bed, and devoured her.',
    'Little Red Riding Hood, after gathering <span id="blank" data-text="a lot of">_______</span> flowers that she could carry no more, finally remembered her grandmother, and thus, set out on her way to her house.',
    '"Oh dear, how uneasy I feel today. Yet, at other times I feel <span id="blank" data-text="less">_______</span> discomfort when being with grandmother."',
    '"The better to hear you with, my child," was the reply.<br>"But, grandmother, <span id="blank" data-text="those">_______</span> big eyes you have..." She trailed off mid-sentence."',
    '"But, grandmother," she paused, "Those are<span id="blank" data-text="some">_______</span> large hands you have."',
    '"Oh, but, grandmother, <span id="blank" data-text="what">_______</span> a terrible big mouth you have."',
    'The wolf <span id="blank" data-text="who">_______</span> had appeased his appetite, lay down again in the bed, fell asleep and began to snore very loudly.',
    'It occurred to him that the wolf might have devoured the grandmother <span id="blank" data-text="a little">_______</span> while ago.',
    'When he had made <span id="blank" data-text="a few">_______</span> snips, he saw Little Red Riding Hood appear',
    'Then he made <span id="blank" data-text="more">_______</span> snips, and Little Red Riding Hood sprang out.',
    'Little Red Riding Hood, quickly fetched <span id="blank" data-text="plenty of">_______</span> stones with which they filled the wolf`s belly.',
    'The wolf, <span id="blank" data-text="whose">_______</span> stomach was so heavy, awoke and wanted to run away but he collapsed at once, and fell dead.',
    'The huntsman drew off the wolf`s skin and went home with it. The grandmother ate the cake and drank the fresh juice <span id="blank" data-text="which">_______</span> Little Red Riding Hood had brought.'
];

// Choices Button
const button_arr = [];
button_arr[0] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> these </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="false"> this </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> they </button> </div>';
button_arr[1] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> some wolf </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> a wolf </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a wolves </button> </div>';
button_arr[2] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> those </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> these </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> that </button> </div>';
button_arr[3] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> myself </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> my </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> mine </button> </div>';
button_arr[4] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> your </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> you are </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> you </button> </div>';
button_arr[5] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> him </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> himself </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> himselves </button> </div>';
button_arr[6] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> much </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> plenty </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> more </button> </div>';
button_arr[7] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> each </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> every </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> one </button> </div>';
button_arr[8] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> any </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> much </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> some </button> </div>';
button_arr[9] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> such </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> every </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> one </button> </div>';
button_arr[10] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> the </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> she </button> </div>';
button_arr[11] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> any </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> much </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> more </button> </div>';
button_arr[12] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a lots of </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a bit of </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> a lot of </button> </div>';
button_arr[13] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> so many </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> less </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> more </button> </div>';
button_arr[14] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> those </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> these </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> thus </button> </div>';
button_arr[15] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> some </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> any </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> more </button> </div>';
button_arr[16] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> who </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> which </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> what </button> </div>';
button_arr[17] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> who </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> which </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> what </button> </div>';
button_arr[18] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a few </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> a little </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a lot </button> </div>';
button_arr[19] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> a few </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a little </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> a lot </button> </div>';
button_arr[20] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> much </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> more </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> some </button> </div>';
button_arr[21] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> very lot of </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> more of </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> plenty of </button> </div>';
button_arr[22] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> who </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> whom </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> whose </button> </div>';
button_arr[23] =
    '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> which </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> what </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> who </button> </div>';


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
        story.innerHTML = "Little Red Riding Hood thought to herself.";
        quizElement.innerHTML = "As long as I live, I will never by myself leave the path, to run into the woods, when my mother has forbidden me to do so.";

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
