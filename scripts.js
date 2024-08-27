let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 6000); // Change image every 3 seconds
}

document.querySelector('.prev').addEventListener('click', function() {
    slideIndex -= 2;
    showSlides();
});

document.querySelector('.next').addEventListener('click', function() {
    showSlides();
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        slideIndex = i;
        showSlides();
    });
}
