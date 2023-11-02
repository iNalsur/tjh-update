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

const bookTimeSection = document.getElementById("bookTimeSection");

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const bookTimeSectionRect = bookTimeSection.getBoundingClientRect();
    const bookTimeSectionTop = bookTimeSectionRect.top;
    const bookTimeSectionBottom = bookTimeSectionRect.bottom;

    if (bookTimeSectionBottom > 0 && bookTimeSectionTop < windowHeight) {
        bookTimeSection.style.opacity = 1;
        bookTimeSection.style.transition = 'opacity 3s';
    } else {
        bookTimeSection.style.opacity = 0;
        bookTimeSection.style.transition = 'opacity 1s';
    }
});


const contactSection = document.getElementById("contactSection");

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const contactSectionRect = contactSection.getBoundingClientRect();
    const contactSectionTop = contactSectionRect.top;
    const contactSectionBottom = contactSectionRect.bottom;

    if (contactSectionBottom > 0 && contactSectionTop < windowHeight) {
        contactSection.style.opacity = 1;
        contactSection.style.transition = 'opacity 3s';
    } else {
        contactSection.style.opacity = 0;
        contactSection.style.transition = 'opacity 1s';
    }
});