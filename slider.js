/* first slider instance*/

let container = document.querySelector('#popular');
let firstCardWidth = document.querySelector('#popular .quiz').offsetWidth;
let buttons = document.querySelectorAll('#popular span');


 buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        /*container.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;*/
        if (btn.className === "left"){
            container.scrollLeft += -firstCardWidth;
        }else {
            container.scrollLeft += firstCardWidth;
        }
    })
        
});

/* second slider instance*/

let containerTwo = document.querySelector('#tvshow');
let firstCardWidthTwo = document.querySelector('#tvshow .quiz').offsetWidth;
let buttonsTwo = document.querySelectorAll('#tvshow span');


 buttonsTwo.forEach(btn => {
    btn.addEventListener('click', e => {
        /*container.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;*/
        if (btn.className === "left"){
            containerTwo.scrollLeft += -firstCardWidthTwo;
        }else {
            containerTwo.scrollLeft += firstCardWidthTwo;
        }
    })
        
});

/* third slider instance*/

let containerThree = document.querySelector('#movies');
let firstCardWidthThree = document.querySelector('#movies .quiz').offsetWidth;
let buttonsThree = document.querySelectorAll('#movies span');


 buttonsThree.forEach(btn => {
    btn.addEventListener('click', e => {
        /*container.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;*/
        if (btn.className === "left"){
            containerThree.scrollLeft += -firstCardWidthThree;
        }else {
            containerThree.scrollLeft += firstCardWidthThree;
        }
    })
        
});

/* fourth slider instance*/

let containerFourth = document.querySelector('#games');
let firstCardWidthFourth = document.querySelector('#games .quiz').offsetWidth;
let buttonsFourth = document.querySelectorAll('#games span');


 buttonsFourth.forEach(btn => {
    btn.addEventListener('click', e => {
        /*container.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;*/
        if (btn.className === "left"){
            containerFourth.scrollLeft += -firstCardWidthFourth;
        }else {
            containerFourth.scrollLeft += firstCardWidthFourth;
        }
    })
        
});

/* fifth slider instance*/

let containerFifth = document.querySelector('#sport');
let firstCardWidthFifth = document.querySelector('#sport .quiz').offsetWidth;
let buttonsFifth = document.querySelectorAll('#sport span');


 buttonsFifth.forEach(btn => {
    btn.addEventListener('click', e => {
        /*container.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;*/
        if (btn.className === "left"){
            containerFifth.scrollLeft += -firstCardWidthFifth;
        }else {
            containerFifth.scrollLeft += firstCardWidthFifth;
        }
    })
        
});