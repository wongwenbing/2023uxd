// Slideshow
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0; // Set opacity to 0
            slides[i].style.display = "none"; // Hide the slide
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block"; // Show the next slide
        slides[slideIndex-1].style.opacity = 1; // Set opacity to 1
        setTimeout(showSlides, 3500); // Change slide every 3.5 seconds
    }
});

// Animation 
window.onload = function() {
    document.body.classList.add('fade-in');
}
