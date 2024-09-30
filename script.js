let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const visibleSlides = 3; // Showing 3 slides at a time

// Function to show slides based on the current slideIndex
function showSlides() {
    const slider = document.querySelector('.image-slider');
    const slideWidth = slides[0].clientWidth + 20; // Slide width + margin

    // Move the slider based on the current slideIndex
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Function to go to the next slide
function nextSlide() {
    if (slideIndex < totalSlides - visibleSlides) {
        slideIndex++;
    } else {
        slideIndex = 0; // Loop back to the beginning
    }
    showSlides();
    resetAutoSlide(); // Reset the automatic slide when a button is clicked
}

// Function to go to the previous slide
function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = totalSlides - visibleSlides; // Loop to the last set
    }
    showSlides();
    resetAutoSlide(); // Reset the automatic slide when a button is clicked
}

// Automatically slide every 3 seconds
let autoSlideInterval = setInterval(nextSlide, 3000); // 3000 ms = 3 seconds

// Reset the auto slide interval when the user manually clicks next/prev
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Clear the existing interval
    autoSlideInterval = setInterval(nextSlide, 3000); // Restart the interval
}

// Event listeners for manual controls (buttons)
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

function colorchange(iconElement) {
    if (iconElement.style.color === 'red') {
        iconElement.style.color = 'gray'; // Change back to original color
    } else {
        iconElement.style.color = 'red'; // Change to red when clicked
    }
}
function cartcolor(iconElement){
    if(iconElement.style.color==='orange'){
        iconElement.style.color='gray';

    }
    else{
        iconElement.style.color='orange';
    }
}
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
