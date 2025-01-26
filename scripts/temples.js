// Get elements
const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

// Toggle the navigation menu only for small screens
hamburgerButton.addEventListener("click", () => {
    if (window.innerWidth < 768) {
        navMenu.classList.toggle("show");
    }
});

// Set the current year dynamically
const currentYearSpan = document.getElementById("currentYear");
if (currentYearSpan) {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Set the last modified date dynamically
const lastModifiedSpan = document.getElementById("lastModifiedDate");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}
