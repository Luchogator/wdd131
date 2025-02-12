/*
  This script populates the "Product Name" <select> element
  from a product array. Feel free to adjust as needed.
*/
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
  
    // Provided product array (including 'averagerating' if needed)
    const products = [
      { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
      { id: "fc-2050", name: "power laces", averagerating: 4.7 },
      { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
      { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
      { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];
  
    // Populate the <select> using the array
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id; // 'value' is the product id as required
      option.textContent = product.name; // Display the product's name
      productSelect.appendChild(option);
    });
  });
  