/*let slideIndex = 1;

function plusSlides(n){
    showSlides(slideIndex += n);
};

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i; 
    let photos = document.querySelectorAll('.photo-first > div');

    if(n > photos.length) {slideIndex = 1};1

    if(n < 1){slideIndex = photos.length}; 

    for(i = 0; i < photos.length; i++){
            photos[i].style.display = 'none';
            photos[i].style.opacity = '1';
    }                                    

    photos[slideIndex - 1].style.display = 'block'; 
};

showSlides();

setInterval(function() {
    plusSlides(+1);
},5000)


*/
//slideshow
let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.querySelectorAll('.photo-wrapper');

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
        slides[i].style.opacity = '1';
    }

    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = 'block';

    setTimeout(showSlides,4000)
}