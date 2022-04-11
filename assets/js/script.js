// variables for the element selectors
const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('.info_box');
const continue_btn = info_box.querySelector('.buttons .restart')
const highscore_box = document.querySelector('.highscore_box');
const exit_btn = highscore_box.querySelector('.buttons .quit');
const restart_btn = highscore_box.querySelector('.buttons .restart');
const quiz_box = document.querySelector('.quiz_box');
const result_box = document.querySelector('.result_box');
const answers_text = document.querySelector('.answers');
const timeCount = document.querySelector('.timer .timer_sec');

// when start button is clicked
start_btn.onclick = () => {
    // show the quiz info box
    info_box.classList.add('activeInfo');
};

// if the Begin .restart button is clicked
continue_btn.onclick = () => {
    // hide info box
    info_box.classList.remove('activeInfo');
    // show quiz
    quiz_box.classList.add('activeQuiz');
    showQuestions(0);
    startTimer(30);
};

let timeValue = 30;
let question_count = 0;
let question_number = 1;

const restart_quiz = highscore_box.querySelector('.buttons .restart');

// if restart quiz is clicked
restart_quiz.onclick = () => {
    // show the quiz
    quiz_box.classList.add('activeQuiz');
    // hide the highscores
    highscore_box.classList.remove('activeScore');
    timeValue = 30;
    question_count = 0;
    question_number = 1;
    showQuestions(question_count);
    startTimer(timeValue);

};

// if quit button is clicked from highscores
exit_btn.onclick = () => {
    window.location.reload();
};

const next_btn = document.querySelector('footer .next_btn');

// when next quaestion button is clicked
next_btn.onclick = () => {
    if (question_count < questions.length - 1) {
        question_count++;
        question_number++;
        showQuestions(question_count);
        next_btn.classList.remove('show');
    } else {
        showResult();
    }
};

function showQuestions(i){
    const question_text = document.querySelector('.question_text');

    // create new elements for the questions and answers using the current index
    let question_tag = '<span>' + questions[i].number + '. ' + questions[i].question + '</span>';

    let answer_tag = '<div class="answer"><span>' + questions[i].options[0] + '</span></div>'
    + '<div class="answer"><span>' + questions[i].options[1] + '</span></div>'
    + '<div class="answer"><span>' + questions[i].options[2] + '</span></div>'
    + '<div class="answer"><span>' + questions[i].options[3] + '</span></div>';
    
    question_text.innerHTML = question_tag;
    answers_text.innerHTML = answer_tag;

    const answer = answers_text.querySelectorAll('.answer');

    // set an onclick on all the answers
    for (i = 0; i < answer.length; i++) {
        answer[i].setAttribute('onclick', "answerSelected(this)");
    };
};

