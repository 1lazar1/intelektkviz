const questions = [
    {
        imager: "got.webp",
        question: "Kada je serija Igre Prestola pocela da se emituje?",
        answers: [
            {answer: "2010", correct: false},
            {answer: "2011", correct: true},
            {answer: "2012", correct: false},
            {answer: "2014", correct: false},
        ]
    },

    {   
        imager: "banners.webp",
        question: "Koji je simbol kuce Stark?",
        answers: [
            {answer: "Lav", correct: false},
            {answer: "Riba", correct: false},
            {answer: "Zmaj", correct: false},
            {answer: "Vuk", correct: true},
        ]
    },

    {   
        imager: "ned.jpg",
        question: "Koliko dece je imao Ned Stark u seriji?",
        answers: [
            {answer: "3",correct: false},
            {answer: "6",correct: false},
            {answer: "5",correct: true},
            {answer: "4",correct: false},
        ]
    },
    
    {
        imager: 'jamie.jpg',
        question: "Koji je nadimak Jamie Lanistera?",
        answers: [
            {answer: "Maloprstic",correct: false},
            {answer: "Sečivo",correct: false},
            {answer: "Ludi Kralj",correct: false},
            {answer: "Kraljeubica",correct: true},
        ]
    },

    {   
        imager: 'tirion.webp',
        question: "Sta se kaze lordu Smrti (Many-Faced God)?",
        answers: [
            {answer: "Ne, sada!",correct: false},
            {answer: "Ne, nikada!",correct: false},
            {answer: "Ne, danas!",correct: true},
            {answer: "Ne!",correct: false},
        ]
    },

    {
        imager: 'bg.webp',
        question: "Koji Vitez je poznat kao Jutarnji mac (Sword of the Morning) ?",
        answers: [
            {answer: "Ser Arthur Dayne",correct: true},
            {answer: "Ser Barristan Selmy",correct: false},
            {answer: "Ser Loras Tyrell",correct: false},
            {answer: "Ser Jorah Mormont",correct: false},
        ]
    },

    {
        imager: 'stark2.jpg',
        question: "Ko je napravio zid na Severu?",
        answers: [
            {answer: "Bran Stark",correct: false},
            {answer: "King Brandon Stark",correct: true},
            {answer: "Rickard Stark",correct: false},
            {answer: "Torrhen Stark",correct: false},
        ]
    },

    {
        imager: 'stark1.jpg',
        question: "Koji je moto kuce Stark?",
        answers: [
            {answer: "Family, Duty, Honor!",correct: false},
            {answer: "Ours is the fury!",correct: false},
            {answer: "Winter Is Coming!",correct: true},
            {answer: "Growing Strong!",correct: false},
        ]
    },

    {
        imager: 'catelyn.jpg',
        question: "Koji je moto kuce Tully?",
        answers: [
            {answer: "Winter Is Coming!",correct: false},
            {answer: "Ours is the fury!",correct: false},
            {answer: "Growing Strong!",correct: false},
            {answer: "Family, Duty, Honor!",correct: true},
        ]
    },

    {
        imager: 'battle.webp',
        question: "Ko je rekao 'Umu su potrebne knjige, baš kao što je maču potreban brus, ako hoće da ostane oštar' ?",
        answers: [
            {answer: "Tywin Lanister",correct: false},
            {answer: "Samwell Tarly",correct: false},
            {answer: "Tyrion Lanister",correct: true},
            {answer: "Davos Seaworth",correct: false},
        ]
    },

    {
        imager: 'jonsnow.jpg',
        question: "Gde je rodjen Jon Snow ?",
        answers: [
            {answer: "The North",correct: false},
            {answer: "Dorne",correct: true},
            {answer: "Westerlands",correct: false},
            {answer: "Iron Islands",correct: false},
        ]
    },

    {
        imager: 'hodor.jpg',
        question: "Koje je Hodorovo pravo ime ?",
        answers: [
            {answer: "Lys",correct: false},
            {answer: "Syrio Forel",correct: false},
            {answer: "Wylis",correct: true},
            {answer: "Hodor",correct: false},
        ]
    },

    {
        imager: 'valar.jpg',
        question: "Sta znaci Valar Morghulis ?",
        answers: [
            {answer: "Svi ljudi moraju sluziti",correct: false},
            {answer: "Svi ljudi moraju ziveti",correct: false},
            {answer: "Svi ljudi moraju umreti",correct: true},
            {answer: "Covek bez lica",correct: false},
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
    imageQuiz.style.width = '600px';

    imageDiv.appendChild(imageQuiz);
}

function showImageResult(){
    let imageQuiz = document.createElement('img');
    imageQuiz.src = 'ironthrone2.jpg';
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