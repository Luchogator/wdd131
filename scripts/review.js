/*
  This script increments and displays a 'reviewCount' from localStorage
  each time 'review.html' is loaded (i.e., each form submission).
*/
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve existing count or set to 0 if not found
    let count = localStorage.getItem("reviewCount");
    if (!count) {
      count = 0;
    } else {
      count = parseInt(count, 10);
    }
  
    // Increment by 1
    count += 1;
  
    // Update localStorage
    localStorage.setItem("reviewCount", count);
  
    // Update the page
    const reviewCountElement = document.getElementById("reviewCount");
    reviewCountElement.textContent = count;
  });
  