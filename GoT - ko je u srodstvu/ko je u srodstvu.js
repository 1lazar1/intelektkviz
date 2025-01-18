const questions = [
    {
        imager: "img/sansa jon.jpg",
        question: "U kakvom su srodstvu Jon Snow i Sansa Stark?",
        answers: [
            {answer: "Polu brat / sestra", correct: false},
            {answer: "Brat / sestra", correct: true},
            {answer: "Daleki rodjaci", correct: false},
            {answer: "Ujak / necaka", correct: false},
        ]
    },

    {   
        imager: "img/robb theon.jpg",
        question: "U kakvom su srodstvu Robb i Theon?",
        answers: [
            {answer: "Braca", correct: false},
            {answer: "Daleki rodjaci", correct: false},
            {answer: "Ujak / necak", correct: false},
            {answer: "Nisu u srodstvu", correct: true},
        ]
    },

    {   
        imager: "img/jon deny.jpg",
        question: "U kakvom su srodstvu Jon Snow i Deneris?",
        answers: [
            {answer: "Brat / sestra",correct: false},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Tetka / necak",correct: true},
            {answer: "Nisu u srodstvu",correct: false},
        ]
    },
    
    {
        imager: 'img/robert.webp',
        question: "U kakvom su srodstvu Robert i Renly?",
        answers: [
            {answer: "Otac / sin",correct: false},
            {answer: "Nisu u srodstvu",correct: false},
            {answer: "Ujak / necak",correct: false},
            {answer: "Braca",correct: true},
        ]
    },

    {   
        imager: 'img/pod ilyn.webp',
        question: "u kakvom su srodstvu Pod i Ilyn?",
        answers: [
            {answer: "Deda / unuk",correct: false},
            {answer: "Ujak / necak",correct: false},
            {answer: "Daleki rodjaci",correct: true},
            {answer: "Nisu u srodstvu",correct: false},
        ]
    },

    {
        imager: 'img/davo.webp',
        question: "U kakvom su srodstvu Davons i Shireen?",
        answers: [
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Deda / unuka",correct: false},
            {answer: "Ujak / necaka",correct: false},
            {answer: "Nisu u srodstvu",correct: true},
        ]
    },

    {
        imager: 'img/deny mad king.webp',
        question: "U kakvom su srodstvu Daenerys i Ludi Kralj?",
        answers: [
            {answer: "Deda / unuka",correct: false},
            {answer: "Otac / cerka",correct: true},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Nisu u srodstvu",correct: false},
        ]
    },

    {
        imager: 'img/sansa little.jpg',
        question: "U kakvom su srodstvu Littlefinger i Sansa?",
        answers: [
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Ujak / necaka",correct: false},
            {answer: "Otac / cerka",correct: false},
            {answer: "Nisu u srodstvu",correct: true},
        ]
    },

    {
        imager: 'img/euron yara.webp',
        question: "U kakvom su srodstvu Euron i Yara?",
        answers: [
            {answer: "Brat / sestra",correct: false},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Ujak / necaka",correct: true},
            {answer: "Nisu u srodstvu",correct: false},
        ]
    },

    {
        imager: 'img/cersei lane.webp',
        question: "U kakvom su srodstvu Cersei i Lancel?",
        answers: [
            {answer: "Rodjaci",correct: false},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Brat / sestra",correct: true},
            {answer: "Nisu u srodstvu",correct: false},
        ]
    },

    {
        imager: 'img/jon ramsey.jpg',
        question: "U kakvom su srodstvu Jon Snow i Ramsey ?",
        answers: [
            {answer: "Braca",correct: false},
            {answer: "Rodjaci",correct: false},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Nisu u srodstvu",correct: true},
        ]
    },

    {
        imager: 'img/loras.webp',
        question: "U kakvom su srodstvu Margaery i Loras ?",
        answers: [
            {answer: "Ujak / necaka",correct: false},
            {answer: "Rodjaci",correct: false},
            {answer: "Brat / sestra",correct: true},
            {answer: "Nisu u srodstvu",correct: false},
        ]
    },

    {
        imager: 'img/robert ned.avif',
        question: "U kakvom su srodstvu Robert i Ned ?",
        answers: [
            {answer: "Braca",correct: false},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Rodjaci",correct: false},
            {answer: "Nisu u srodstvu",correct: true},
        ]
    },

    {
        imager: 'img/mad king.webp',
        question: "U kakvom su srodstvu Rhaegar i Ludi Kralj ?",
        answers: [
            {answer: "Deda / unuk",correct: false},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Otac / sin",correct: true},
            {answer: "Nisu u srodstvu",correct: false},
        ]
    },

    {
        imager: 'img/stanis.webp',
        question: "U kakvom su srodstvu Stannis i Gendry ?",
        answers: [
            {answer: "Otac / sin",correct: false},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Stric / necak",correct: true},
            {answer: "Nisu u srodstvu",correct: false},
        ]
    },

    {
        imager: 'img/igrit.jpg',
        question: "U kakvom su srodstvu Igrit i Tormund ?",
        answers: [
            {answer: "Sestra / brat",correct: false},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Stric / necak",correct: false},
            {answer: "Nisu u srodstvu",correct: true},
        ]
    },

    {
        imager: 'img/jorah.webp',
        question: "U kakvom su srodstvu Jorah i Jeor ?",
        answers: [
            {answer: "Otac / sin",correct: true},
            {answer: "Daleki rodjaci",correct: false},
            {answer: "Stric / necak",correct: false},
            {answer: "Nisu u srodstvu",correct: false},
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
    imageQuiz.src = 'img/result.jpg';
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
        window.scrollTo(0, 1092);
        questionElement.innerHTML = `Vi ste naseljenik Westerosa! Osvojili ste ${score} poena od mogucih ${questions.length}!`;
        resetImage();
        showImageResult();
    }else if(score < 11 ){
        window.scrollTo(0, 1092);
        questionElement.innerHTML = `Cestitamo! Malo Veće zna odgovore kao Vi! Osvojili ste ${score} poena od mogucih ${questions.length}!`;
        resetImage();
        showImageResult();
    }else{
        window.scrollTo(0, 1092);
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

    window.scrollTo(nextButton);
});

//delete previous answers

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

startQuiz();


//play quiz button

const playQuiz = document.querySelector('#play-quiz');

const quizStart = document.querySelector('.quiz-starts');

playQuiz.addEventListener('click', e => {
    window.scrollTo(0, 980);
});