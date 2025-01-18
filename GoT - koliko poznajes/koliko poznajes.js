const questions = [
    {
        imager: "img/quest.png",
        question: "Koja je prva stvar koju Arya Stark nauči od Jaqena Hghara?",
        answers: [
            {answer: "Da promeni lice", correct: false},
            {answer: "Da prepozna laž", correct: false},
            {answer: "Da kaže „Čovek nema ime“", correct: true},
            {answer: "Da postane nečujna", correct: false},
        ]
    },

    {   
        imager: "img/quest.png",
        question: "Koji je pravi naziv vojske koju predvode White Walkers?",
        answers: [
            {answer: "Army of the North", correct: false},
            {answer: "Nights Legion", correct: false},
            {answer: "Wights", correct: false},
            {answer: "Army of the Dead", correct: true},
        ]
    },

    {   
        imager: "img/quest.png",
        question: "Koja boja plamena simbolizuje Boga Svetlosti?",
        answers: [
            {answer: "Narandžasta",correct: false},
            {answer: "Bela",correct: false},
            {answer: "Crvena",correct: true},
            {answer: "Plava",correct: false},
        ]
    },
    
    {
        imager: 'jamie.jpg',
        question: "Kako se zove brod kojim Tyrion putuje za Essos?",
        answers: [
            {answer: "Sea Wind",correct: false},
            {answer: "The Narrow Hope",correct: false},
            {answer: "The Golden Scepter",correct: false},
            {answer: "Selaesori Qhoran",correct: true},
        ]
    },

    {
        imager: 'bg.webp',
        question: "Koji predmet simbolično predstavlja porodicu Tarly?",
        answers: [
            {answer: "Luk i strela",correct: false},
            {answer: "Mač Heartsbane",correct: true},
            {answer: "Srebrni rog",correct: false},
            {answer: "Knjiga znanja",correct: false},
        ]
    },

    {
        imager: 'stark2.jpg',
        question: "Koja je prva reč na Dothraki jeziku koju Daenerys nauči?",
        answers: [
            {answer: "Khal",correct: false},
            {answer: "Athjahakar",correct: true},
            {answer: "Sun and Stars",correct: false},
            {answer: "Hrazef",correct: false},
        ]
    },

    {
        imager: 'stark1.jpg',
        question: "Koje je piće popularno među Dornijcima?",
        answers: [
            {answer: "Ale",correct: false},
            {answer: "Medovina",correct: false},
            {answer: "Vino sa peskovitih vinograda",correct: true},
            {answer: "Sok od narandže",correct: false},
        ]
    },

    {
        imager: 'catelyn.jpg',
        question: "Kako se zove dvorana u kojoj su čuvane lobanje zmajeva u Kings Landing?",
        answers: [
            {answer: "Hall of Dragons",correct: false},
            {answer: "The Great Vault",correct: false},
            {answer: "Dragonpit",correct: false},
            {answer: "The Red Keeps Vaults",correct: true},
        ]
    },

    {
        imager: 'battle.webp',
        question: "Koja porodica koristi reči „Ponos porodice je uvek na prvom mestu“?",
        answers: [
            {answer: "Reyne",correct: false},
            {answer: "Hightower",correct: false},
            {answer: "Tarly",correct: true},
            {answer: "Fossoway",correct: false},
        ]
    },

    {
        imager: 'jonsnow.jpg',
        question: "Kako se zove ples koji Arya uči u Braavosu?",
        answers: [
            {answer: "Ples tame",correct: false},
            {answer: "Vodeni ples",correct: true},
            {answer: "Ples sa zmajevima",correct: false},
            {answer: "Noćni ples",correct: false},
        ]
    },

    {
        imager: 'hodor.jpg',
        question: "Koji je razlog zbog kojeg je Davos Seaworth odsečen deo prstiju?",
        answers: [
            {answer: "Bio je pirat",correct: false},
            {answer: "Ubio je vojnika iz lojalne kuće",correct: false},
            {answer: "Švercovao je hranu",correct: true},
            {answer: "Odbio je da plati porez kralju",correct: false},
        ]
    },

    {
        imager: 'valar.jpg',
        question: "Koja su bila poslednja reči kralja Roberta Baratheona?",
        answers: [
            {answer: "„Ned, zaštiti moju porodicu.“",correct: false},
            {answer: "„Izvadi divlje svinje iz kuhinje.“",correct: false},
            {answer: "„Trebao sam ih slušati.“",correct: true},
            {answer: "„Briani, spasi tron.“",correct: false},
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
    imageQuiz.src = 'ironthrone2.jpg';
    imageQuiz.loading = 'lazy';
    imageQuiz.style.width = '100%';

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