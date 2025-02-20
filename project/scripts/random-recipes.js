document.addEventListener("DOMContentLoaded", () => {
    const allRecipes = [
      { img: "images/recipe1.jpg", title: "Avocado Toast" },
      { img: "images/recipe2.jpg", title: "Protein Smoothie" },
      { img: "images/recipe3.jpg", title: "One-Pan Chicken" },
      { img: "images/recipe4.jpg", title: "Pasta with Garlic Sauce" },
      { img: "images/recipe5.jpg", title: "Beef Stir-Fry" },
      { img: "images/recipe6.jpg", title: "Grilled Salmon" },
      { img: "images/recipe7.jpg", title: "Rice with Vegetables" },
      { img: "images/recipe8.jpg", title: "Homemade Pizza" },
      { img: "images/recipe9.jpg", title: "Baked Lasagna" },
      { img: "images/recipe10.jpg", title: "Oatmeal Bowl" },
      { img: "images/recipe11.jpg", title: "Chicken Wrap" },
      { img: "images/recipe12.jpg", title: "Steak with Vegetables" }
    ];
  
    // Randomly pick 3 recipes
    const shuffledRecipes = allRecipes
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  
    const container = document.getElementById("random-recipes");
  
    shuffledRecipes.forEach(recipe => {
      const card = document.createElement("div");
      // Use the "home-card" class so it follows your home grid styling
      card.classList.add("home-card");
      // Inject image and title
      card.innerHTML = `
        <img src="${recipe.img}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
      `;
      container.appendChild(card);
    });
  });
  