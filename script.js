let slideIndex = 0;

function showSlides() {
    let slide = document.getElementsByClassName("mySlides");
    for (let index = 0; index < slide.length; index++) {
        slide[index].style.display = "none";
    }

    slideIndex++;
    if(slideIndex > slide.length) {
        slideIndex = 1
    }

    slide[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);
}

showSlides();