const questions = [
    {question: "Grey Worm"},
    {question: "Yoren"},
    {question: "Ilyn Payne"},
    {question: "Jojeen Reed"},
    {question: "Lyana Mormont"},
    {question: "Maester Aemon"},
    {question: "Olenna Tyrell"},
    {question: "Jaqen Hagar"},
    {question: "Margaery Tyrell"},
    {question: "Ellaria Sand"},
    {question: "Mance Rayder"},
    {question: "Dario Naharis"},
    {question: "Brienne"},
    {question: "Meera Reed"},
    {question: "Gilly"},
    {question: "Littlefinger"},
    {question: "Osha"},
    {question: "Sandor Clegane"},
    {question: "Catelyn Stark"},
    {question: "The Mountain"},
    {question: "Roose Bolton"},
    {question: "Hot Pie"},
    {question: "Beric Dondarrion"},
    {question: "Varys"},
    {question: "Yara Greyjoy"},
    {question: "Ramsey Bolton"},
    {question: "Tommen Baratheon"},
    {question: "Ygritte"},
    {question: "Tormund"},
    {question: "Shae"},
]

let main = document.querySelector('#character-image');
let answers = document.querySelectorAll('#character-image div');
let answerReveal = document.querySelectorAll('#character-image span');
let questionElement = document.querySelector('#question');
let nextButton = document.querySelector('#next');


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Dalje';
    showQuestion();
}

function showQuestion(){
    
    let currentQuestion = questions[currentQuestionIndex].question;
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". Klikni na " + currentQuestion;

    selectAnswer();
}

function selectAnswer(e) {
    resetState();

    answers.forEach(answer => {
        answer.addEventListener('click', e => {
            if(questions[currentQuestionIndex].question == answer.id){
                    answer.lastChild.classList.add('active-correct');
                }else{
                    answer.lastChild.classList.add('active-incorrect');
                };
                disable()
                correctAnsw()               
                nextButton.style.display = "block";
                scrollTo(1500,1500)
        });    
    })
}

function disable(){
    answers.forEach(answer=> {
        answer.style.pointerEvents = 'none';
    })
}

function correctAnsw(){
    answers.forEach(answer => {
        if(answer.id == questions[currentQuestionIndex].question){
            answer.lastChild.classList.add('active-correct');
        }
    })
}

let currentQuestion = questions[currentQuestionIndex].question;

function resetState(){
    answerReveal.forEach(answ=>{
        while(answ.classList.contains('active-correct')){
            answ.classList.remove('active-correct')
        }
        while(answ.classList.contains('active-incorrect')){
            answ.classList.remove('active-incorrect')
            score++;
        }
        answers.forEach(answer=> {
            answer.style.pointerEvents = 'auto';
        })
        nextButton.style.display = "none";
    })  
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

    window.scrollTo(1000,1000);
});

startQuiz();
resetState()

function showScore() {
    resetState();
    if(score < 4){
        window.scrollTo(0, 1092);
        questionElement.innerHTML = `Vi ste naseljenik Westerosa! Osvojili ste ${questions.length - score} poena od mogucih ${questions.length}!`;
        
    }else if(score < 11 ){
        window.scrollTo(0, 1092);
        questionElement.innerHTML = `Cestitamo! Malo Veće zna odgovore kao Vi! Osvojili ste ${questions.length - score} poena od mogucih ${questions.length}!`;
        
    }else{
        window.scrollTo(0, 1092);
        questionElement.innerHTML = `Cestitamo! Imate znanje kao desna Ruka Kralja / Kraljice! Osvojili ste ${questions.length - score} poena od mogucih ${questions.length}!`;  
    }
    nextButton.innerHTML = "Igraj Opet Kviz";
    nextButton.style.display = "block";
}

//play quiz button

const playQuiz = document.querySelector('#play-quiz');
const quizStart = document.querySelector('.quiz-starts');

playQuiz.addEventListener('click', e => {
    window.scrollTo(0, 980);
});

