var i = 0;
var count = 0;

function chap1Text() {
    const text = [
        '"Are you the one they sent to help me? My name is Charlotte, and you are?"',
        '"Nice to meet you! I`m so glad that you come. You know, this world hasn`t been feeling its best lately and I hope I can use your help. Are you willing to help me?"',
        '"Great! This world, and just like the others, have lost words in their story. This is a problem because if it happens, no one wants to visit our story anymore."',
        '"People in those worlds need you. I hope you can lend your knowledge and aptitude to help us all."',
        '"Here! I have write you a note so you can look at it anytime."',
        '"Now you just need to complete the story by filling the missing words with the correct one."',
        '"Now, come, come. Let me read you my story."',
    ];

    var textElement = document.getElementById("text");
    var takeNotes = document.getElementById("takeNotes");
    var next = document.getElementById("next-button");
    var myAnswer = document.getElementById("my-answer");

    textElement.innerHTML = text[i];

    if (next.classList.contains("invisible")) {
        next.classList.remove("invisible");
        if (!myAnswer.classList.contains("d-sm-none")) {
            myAnswer.classList.add("d-sm-none");
        }
    }

    if (i === 0) {
        myAnswer.classList.remove("d-sm-none");
        next.classList.add("invisible");
    }

    if (i === 4) {
        takeNotes.classList.remove("d-sm-none");
        next.classList.add("invisible");
    }

    if (i === (text.length - 1)) {
        showStory1();
    } else i++;
}

function showStory1() {
    var choices = document.getElementById("choices"); // Get div id
    choices.classList.remove("d-sm-none"); // Make it appear

    var next = document.getElementById("next-button");
    next.classList.add("d-sm-none");
    var dialogue = document.getElementById("dialogue");
    dialogue.classList.add("d-sm-none");

    var startStory = document.getElementById("start-story");
    startStory.classList.remove("d-sm-none");

    setChoiceBtn();
}

function nextQuestion() {
    var nextQuestion = document.getElementById("nextQuestion");
    if (!nextQuestion.classList.contains("d-sm-none")) { // If appear
        nextQuestion.classList.add("d-sm-none"); // Make it disappear
    }

    const text_story = [
        '"Who am I, you asked? I`m the Curator, the one who will watch you to the worlds beyond this screen."',
        '"Don`t worry too much. I`m sure you will do just fine!"',
        '"So without further ado, how about we dive in!"',
    ];
    const quiz = [
        'something something <span id="blank" data-text="yaho">_______</span> something something something something something something something.',
        'something something something something something something <span id="blank" data-text="yaho">_______</span> something something something.',
    ];
    const button = [];
    button[0] =
        '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> ehe </button> </div> <div class="row mb-3"> <button  class="btn btn-outline-primary chapter-button choice" value="false"> tte </button> </div> <div class="row mb-3"> <button onclick="answerStory1()" class="btn btn-outline-primary chapter-button choice" value="false"> nandayo </button> </div>';
    button[1] =
        '<div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="false"> false </button> </div> <div class="row mb-3"> <button class="btn btn-outline-primary chapter-button choice" value="true"> true </button> </div> <div class="row mb-3"> <button onclick="answerStory1()" class="btn btn-outline-primary chapter-button choice" value="false"> nandayo </button> </div>';

    var story = document.getElementById("story-display");
    story.innerHTML = text_story[count];

    var quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quiz[count];

    var buttons = document.getElementById("buttons");
    buttons.innerHTML = button[count];

    setChoiceBtn();
    count++;

}

function setChoiceBtn() {
    var choice = document.querySelectorAll(".choice");
    var blank = document.getElementById("blank");

    // For every btn which has 'choice' class, they have function(event) when click
    for (var i = 0; i < choice.length; i++) {
        choice[i].addEventListener("click", function (event) {
            var button = event.target;
            var nextQuestion = document.getElementById("nextQuestion");

            if (button.value === "true") {
                blank.innerHTML = blank.getAttribute("data-text");
                nextQuestion.classList.remove("d-sm-none");

                // Change btn background color to green
                button.classList.remove("btn-outline-primary");
                button.classList.add("btn-success");

            } else {
                // Change btn background color to red
                button.classList.remove("btn-outline-primary");
                button.classList.add("btn-danger");

                // Decrease chapter points
                var pointsSpan = document.getElementById("points");
                var pointsValue = parseInt(pointsSpan.innerHTML);

                if (pointsValue > 0) {
                    var totalPoints = pointsValue - 40;
                    pointsSpan.innerHTML = totalPoints.toString();
                }
            }
            // If button with function(event) clicked, the method won't run again
            event.target.removeEventListener("click", arguments.callee);
        });
    };
}

function showNext() {
    var next = document.getElementById("next-button");
    next.classList.remove("invisible");
    var takeNotes = document.getElementById("takeNotes");
    takeNotes.classList.add("d-sm-none");
}
