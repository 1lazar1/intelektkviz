const questions = [
    {
        imager: "img znak/stark.jpg",
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Lanister", correct: false},
            {answer: "Stark", correct: true},
            {answer: "Targeryan", correct: false},
            {answer: "Bolton", correct: false},
        ]
    },

    {   
        imager: "img znak/lanister.jpg",
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Tyrell", correct: false},
            {answer: "Targeryan", correct: false},
            {answer: "Baratheon", correct: false},
            {answer: "Lanister", correct: true},
        ]
    },

    {   
        imager: "img znak/baratheon.jpg",
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Targeryan",correct: false},
            {answer: "Tully",correct: false},
            {answer: "Baratheon",correct: true},
            {answer: "Mormont",correct: false},
        ]
    },
    
    {
        imager: 'img znak/targeryan.jpg',
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Greyjoy",correct: false},
            {answer: "Tyrell",correct: false},
            {answer: "Mormont",correct: false},
            {answer: "Targeryan",correct: true},
        ]
    },

    {   
        imager: 'img znak/martell.jpg',
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Greyjoy",correct: false},
            {answer: "Tyrell",correct: false},
            {answer: "Martell",correct: true},
            {answer: "Mormont",correct: false},
        ]
    },

    {
        imager: 'img znak/tully.jpg',
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Tully",correct: true},
            {answer: "Greyjoy",correct: false},
            {answer: "Tyrell",correct: false},
            {answer: "Arryn",correct: false},
        ]
    },

    {
        imager: 'img znak/greyjoy.jpg',
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Mormont",correct: false},
            {answer: "Greyjoy",correct: true},
            {answer: "Tyrell",correct: false},
            {answer: "Arryn",correct: false},
        ]
    },

    {
        imager: 'img znak/tyrell.jpg',
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Bolton",correct: false},
            {answer: "Clegane",correct: false},
            {answer: "Tyrell",correct: true},
            {answer: "Arryn",correct: false},
        ]
    },

    {
        imager: 'img znak/arryn.jpg',
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Strong",correct: false},
            {answer: "Clegane",correct: false},
            {answer: "Bolton",correct: false},
            {answer: "Arryn",correct: true},
        ]
    },

    {
        imager: 'img znak/bolton.jpg',
        question: "Kojoj kuci pripada znak sa slike?",
        answers: [
            {answer: "Mormont",correct: false},
            {answer: "Strong",correct: false},
            {answer: "Bolton",correct: true},
            {answer: "Clegane",correct: false},
        ]
    },

];


const questionElement = document.querySelector('#question');
const answerButtons = document.querySelector('#answer-buttons');
const nextButton = document.querySelector('#next');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Dalje';
    showQuestion();
}

function showQuestion() {
    resetState();
    resetImage()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    showImage();

    currentQuestion.answers.forEach(answ => {
        const button = document.createElement('button');
        button.innerHTML = answ.answer;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answ.correct){
            button.dataset.correct = answ.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
//changing photo on diff question
let imageDiv = document.querySelector('#quiz-img');

function showImage(){
    let imageQuiz = document.createElement('img');
    imageQuiz.src = questions[currentQuestionIndex].imager;
    imageQuiz.loading = 'lazy';
    imageQuiz.style.width = '100%';

    imageDiv.appendChild(imageQuiz);
}

function showImageResult(){
    let imageQuiz = document.createElement('img');
    imageQuiz.src = 'img znak/finisher.jpg';
    imageQuiz.loading = 'lazy';
    imageQuiz.style.width = '600px';

    imageDiv.appendChild(imageQuiz);
}

//deleting previous photo from prev question

function resetImage(){
    nextButton.style.display = "none";
    while(imageDiv.firstChild) {
        imageDiv.removeChild(imageDiv.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;
    })

    nextButton.style.display = "block";

    scrollTo(0, 1340);
}

//show the result at the end

function showScore() {
    resetState();
    if(score < 4){
        scrollTo(0, 1020);
        questionElement.innerHTML = `Vi ste naseljenik Westerosa! Osvojili ste ${score} poena od mogucih ${questions.length}!`;
        resetImage();
        showImageResult();
    }else if(score < 11 ){
        scrollTo(0, 1020);
        questionElement.innerHTML = `Cestitamo! Malo Veće zna odgovore kao Vi! Osvojili ste ${score} poena od mogucih ${questions.length}!`;
        resetImage();
        showImageResult();
    }else{
        scrollTo(0, 1020);
        questionElement.innerHTML = `Cestitamo! Imate znanje Ruke Kralja / Kraljice! Osvojili ste ${score} poena od mogucih ${questions.length}!`;
        resetImage();
        showImageResult();
    }
    
    nextButton.innerHTML = "Igraj Opet Kviz";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex ++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});

//delete previous answers

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

startQuiz();

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
});

//play quiz button

const playQuiz = document.querySelector('#play-quiz');

const quizStart = document.querySelector('.quiz-starts');

playQuiz.addEventListener('click', e => {
    window.scrollTo(0, 980);
});