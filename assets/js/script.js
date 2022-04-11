// variables for the element selectors
const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('.info_box');
const continue_btn = info_box.querySelector('.buttons .restart')
const highscore_box = document.querySelector('.highscore_box');
const exit_btn = highscore_box.querySelector('.buttons .quit');
const restart_btn = highscore_box.querySelector('.buttons .restart');
const quiz_box = document.querySelector('.quiz_box');
const result_box = document.querySelector('.result_box');
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
    questionCounter(1);
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
    questionCounter(question_number);
    startTimer(timeValue);

};

// if quit button is clicked from highscores
exit_btn.onclick = () => {
    window.location.reload();
};

