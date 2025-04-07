window.onload = function () {
    setTimeout(function () {
        let image1 = document.getElementById('image1');
        let image2 = document.getElementById('image2');

        // Apply fade-out effect to image1
        image1.style.transition = "opacity 1.5s"; // 1.5 seconds fade-out
        image1.style.opacity = "0";

        // Wait for the fade-out effect before showing image2
        setTimeout(function () {
            image1.style.display = "none"; // Hide image1 completely
            image2.style.display = "block"; // Show image2
            image2.style.transition = "opacity 1.5s"; // 1.5 seconds fade-in
            image2.style.opacity = "1";
        }, 1500); // Matches the fade-out duration
    }, 6000); // Initial delay before animation starts
};


let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function showNextSlide() {
    index = (index + 1) % totalSlides;

    slider.style.transition = "transform 1.5s ease-in-out";
    slider.style.transform = `translateX(-${index * 100}vw)`;

    updateDots();
    setTimeout(showNextSlide, 8000);
}

// Initialize
updateDots();
setTimeout(showNextSlide, 5000);

// Click event for dot navigation
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        slider.style.transition = "transform 1.5s ease-in-out";
        slider.style.transform = `translateX(-${index * 100}vw)`;
        updateDots();
    });
});
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
