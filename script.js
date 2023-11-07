let slideIndex = 1;
let slideInterval;
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(slideInterval)
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(slideInterval)
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

    slideInterval = setTimeout(function() {
        plusSlides(1);
    }, 10000);
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

slideInterval = setTimeout(function() {
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

document.addEventListener("DOMContentLoaded", function() {
    const div1 = document.querySelector(".companyShortDescription");
    const div2 = document.querySelector(".companyLargeDescription");

    let currentDiv = div1;
    let nextDiv = div2;

    currentDiv.classList.add("visible");
    nextDiv.classList.remove("visible");   
    
    setInterval(function() {
        currentDiv.classList.remove("visible");
        nextDiv.classList.add("visible");      

        const tempDiv = currentDiv;
        currentDiv = nextDiv;
        nextDiv = tempDiv;
    }, 10000);
});

// Script which changes style for the navigation links when mouse in on, off, or clicked and mouse is out

let workHover = document.getElementById("workHover")
let conHover = document.getElementById("conHover")
let button = document.getElementById("button")
let contactPhone = document.getElementById("contactPhone")
let contactMail = document.getElementById("contactMail")

workHover.addEventListener("mouseover", function() {
    workHover.style.backgroundColor = "#FF6600";
    workHover.style.color = "#0F0F0F";
    workHover.style.borderRadius = "3px";
});

workHover.addEventListener("mouseout", function() {
    workHover.style.backgroundColor = "";
    workHover.style.color = "";
    workHover.style.borderRadius = "";
})

workHover.addEventListener("mouseup", function() {
    workHover.style.backgroundColor = "";
    workHover.style.color = "";
    workHover.style.borderRadius = "";
});

conHover.addEventListener("mouseover", function() {
    conHover.style.backgroundColor = "#FF6600";
    conHover.style.color = "#0F0F0F";
    conHover.style.borderRadius = "3px";
});

conHover.addEventListener("mouseout", function() {
    conHover.style.backgroundColor = "";
    conHover.style.color = "";
    conHover.style.borderRadius = "";
})

conHover.addEventListener("mouseup", function() {
    conHover.style.backgroundColor = "";
    conHover.style.color = "";
    conHover.style.borderRadius = "";
});

button.addEventListener("mouseover", function() {
    button.style.opacity = "70%";
});

button.addEventListener("mouseout", function() {
    button.style.opacity = "";
});

button.addEventListener("mouseup", function() {
    button.style.opacity = "";
});

contactPhone.addEventListener("mouseover", function() {
    contactPhone.style.opacity = "70%";
});

contactPhone.addEventListener("mouseout", function() {
    contactPhone.style.opacity = "";
});

contactPhone.addEventListener("mouseup", function() {
    contactPhone.style.opacity = "";
});

contactMail.addEventListener("mouseover", function() {
    contactMail.style.opacity = "70%";
});

contactMail.addEventListener("mouseout", function() {
    contactMail.style.opacity = "";
});

contactMail.addEventListener("mouseup", function() {
    contactMail.style.opacity = "";
});

// Script which scrolls to a specific div, and stops when div in totally seen

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("button");
    const targetDiv = document.getElementById("contactSection");
    let scrollHandler; 

    scrollButton.addEventListener("click", function() {
        const targetPosition = targetDiv.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        scrollHandler = function() {
            const targetBottom = targetDiv.offsetTop + targetDiv.offsetHeight;

            if (window.scrollY + window.innerHeight >= targetBottom) {
                window.removeEventListener("scroll", scrollHandler); 
            }
        };

        window.addEventListener("scroll", scrollHandler);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("navButton");
    const targetDiv = document.getElementById("contactSection");
    let scrollHandler; 

    scrollButton.addEventListener("click", function() {
        const targetPosition = targetDiv.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        scrollHandler = function() {
            const targetBottom = targetDiv.offsetTop + targetDiv.offsetHeight;

            if (window.scrollY + window.innerHeight >= targetBottom) {
                window.removeEventListener("scroll", scrollHandler); 
            }
        };

        window.addEventListener("scroll", scrollHandler);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("conHover");
    const targetDiv = document.getElementById("contactSection");
    let scrollHandler; 

    scrollButton.addEventListener("click", function() {
        const targetPosition = targetDiv.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        scrollHandler = function() {
            const targetBottom = targetDiv.offsetTop + targetDiv.offsetHeight;

            if (window.scrollY + window.innerHeight >= targetBottom) {
                window.removeEventListener("scroll", scrollHandler); 
            }
        };

        window.addEventListener("scroll", scrollHandler);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("workHover");
    const targetDiv = document.getElementById("jobSection");
    let scrollHandler; 

    scrollButton.addEventListener("click", function() {
        const targetPosition = targetDiv.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        scrollHandler = function() {
            const targetBottom = targetDiv.offsetTop + targetDiv.offsetHeight;

            if (window.scrollY + window.innerHeight >= targetBottom) {
                window.removeEventListener("scroll", scrollHandler); 
            }
        };

        window.addEventListener("scroll", scrollHandler);
    });
});