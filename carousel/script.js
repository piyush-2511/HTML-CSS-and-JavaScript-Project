// const buttons = document.querySelectorAll("[data-carousel-btn]")

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselBtn === "next" ? 1 : -1
//         const slides = button
//             .closest("[data-carousel]")
//             .querySelector("[data-slides]")

//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         if (newIndex < 0) newIndex = slides.children.length - 1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active
//     })
// })




const buttons = document.querySelectorAll("[data-carousel-btn]");
const slides = document.querySelector("[data-slides]");
const slideInterval = 5000; // 5 seconds

// Function to handle the sliding transition
function slideChange(offset) {
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}

// Event listeners for carousel buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
        slideChange(offset);
    });
});

// Automatically slide every 5 seconds
let autoSlideInterval = setInterval(() => {
    slideChange(1); // Change slide to the next one
}, slideInterval);

// Optionally, clear the interval if the user interacts with the carousel
buttons.forEach(button => {
    button.addEventListener("click", () => {
        clearInterval(autoSlideInterval); // Stop automatic sliding when user interacts
    });
});
