let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    const currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = "block";
    
    fadeIn(currentSlide);

    dots[slideIndex - 1].className += " active";
}

function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = 0;
    const animationInterval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(animationInterval);
        }
    }, 50);
}

setInterval(function() {
    plusSlides(1);
}, 10000); 