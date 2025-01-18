const questions = [
    {
        imager: "img/nymeria.jpg",
        question: "Ko je svom vuku dao ime po Kraljici ratnika Rhoynar?",
        answers: [
            {answer: "Sansa", correct: false},
            {answer: "Arya", correct: true},
            {answer: "Robb", correct: false},
            {answer: "Jon Snow", correct: false},
        ]
    },

    {   
        imager: "img/winterfell.jpg",
        question: "Koja kuća vlada Kraljevstvom severa?",
        answers: [
            {answer: "Lanister", correct: false},
            {answer: "Baratheon", correct: false},
            {answer: "Martell", correct: false},
            {answer: "Stark", correct: true},
        ]
    },

    {   
        imager: "img/the reach.jpg",
        question: "Koja kuća reguliše The Reach?",
        answers: [
            {answer: "Tully",correct: false},
            {answer: "Baratheon",correct: false},
            {answer: "Tyrell",correct: true},
            {answer: "Arryn",correct: false},
        ]
    },
    
    {
        imager: 'img/river.jpg',
        question: "Koja kuća vlada Riverlandsom?",
        answers: [
            {answer: "Mormont",correct: false},
            {answer: "Arryn",correct: false},
            {answer: "Martell",correct: false},
            {answer: "Tully",correct: true},
        ]
    },

    {   
        imager: 'img/flags.jpg',
        question: "Koja kuca vlada u Dorni?",
        answers: [
            {answer: "Greyjoy",correct: false},
            {answer: "Lanister",correct: false},
            {answer: "Martell",correct: true},
            {answer: "Bolton",correct: false},
        ]
    },

    {
        imager: 'img/bran.jpg',
        question: "Koju je kuću osnovao Bran Graditelj?",
        answers: [
            {answer: "Stark",correct: true},
            {answer: "Baratheon",correct: false},
            {answer: "Lanister",correct: false},
            {answer: "Martell",correct: false},
        ]
    },

    {
        imager: 'img/city.jpg',
        question: "Ko je unistio Kucu Reine i Kucu Tarbeck zbog pobune protiv oca Titosa?",
        answers: [
            {answer: "Robert Baratheon",correct: false},
            {answer: "Tywin Lanister",correct: true},
            {answer: "Ned Stark",correct: false},
            {answer: "Jamie Lanister",correct: false},
        ]
    },

    {
        imager: 'img/ned stark.jpg',
        question: "Ko je brat Edarda Starka?",
        answers: [
            {answer: "Robert",correct: false},
            {answer: "Bren",correct: false},
            {answer: "Brandon",correct: true},
            {answer: "Edrik",correct: false},
        ]
    },

    {
        imager: 'img/catelyn.jpg',
        question: "Kejtlin je iz koje kuće?",
        answers: [
            {answer: "Martell",correct: false},
            {answer: "Stark",correct: false},
            {answer: "Tyrell",correct: false},
            {answer: "Tully",correct: true},
        ]
    },

    {
        imager: 'img/kniht.jpg',
        question: "Loras Tyrel je poznat kao Vitez čega?",
        answers: [
            {answer: "Stare Ruze",correct: false},
            {answer: "Crvene Zmije",correct: false},
            {answer: "Cveca",correct: true},
            {answer: "Pauka",correct: false},
        ]
    },

    {
        imager: 'img/dragons.jpg',
        question: "Koju ulogu igra Piter Dinklejdž u 'Igri prestola'?",
        answers: [
            {answer: "Tywin",correct: false},
            {answer: "Tyrion",correct: true},
            {answer: "Jon Snow",correct: false},
            {answer: "Jamie",correct: false},
        ]
    },

    {
        imager: 'img/jamie.jpg',
        question: "Ko je proglasio Jamie Lanistera za viteza?",
        answers: [
            {answer: "Tywin Lanister",correct: false},
            {answer: "Ned Stark",correct: false},
            {answer: "Arthur Dayne",correct: true},
            {answer: "The Mad King",correct: false},
        ]
    },

    {
        imager: 'img/ned.avif',
        question: "Ko je ubio Neda Starka?",
        answers: [
            {answer: "Jamie Lanister",correct: false},
            {answer: "Joffrey",correct: false},
            {answer: "Ser Ilyn Payne",correct: true},
            {answer: "Cersei",correct: false},
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
    imageQuiz.src = 'img/result.webp';
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