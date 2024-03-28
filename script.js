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

function displayItem(button) {

    const items = button.parentNode.querySelector("img");
    const src = items.getAttribute("src");

    const newWindows = window.open(src);

    newWindows.document.write(`
    <html>
    <style>
     * {
        padding: 0;
        margin: 0;
        }
    </style>
    <head>
        <title>Image</title>
    </head>
    <body style="margin: 0; padding: 0; box-sizing: border-box; text-align: center; height: 100vh">
    <div id="image-container" style="height: 100%; display: flex; justify-content: center; align-items: center;">
        <img id="displayedImage" src="${src}" alt="Image" style="max-width: 100%; max-height: 100%;">
    </div>
</body>
    </html>
    `)

}