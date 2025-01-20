// Set the current year dynamically in the footer
const currentYearSpan = document.getElementById("currentYear");
const lastModifiedSpan = document.getElementById("lastModifiedDate");

if (currentYearSpan) {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Set the last modified date dynamically in the footer
if (lastModifiedSpan) {
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;
}
