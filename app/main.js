module.exports = {
  content: [
    "./index.html",
    "./main.js", // Include your JS file here
    "./app/**/*.html", // Adjust the path based on your project structure
    "./app/**/*.js", // Adjust the path for your JavaScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


async function getMeals() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  console.log(response.status);

  const data = await response.json();
  presentMeals(data.meals);
}

function presentMeals(data) {
  const mealsListContainer = document.querySelector("#meal-cont");
  mealsListContainer.innerHTML = "";
  data.forEach((meal) => {
    const mealHTML = `
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6 max-w-sm mx-auto hover:shadow-xl transition-shadow">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-40 object-cover rounded-lg mb-4" />
      <p class="text-gray-600 dark:text-gray-300 text-sm"><strong>Food Category:</strong> ${meal.strCategory}</p>
      <p class="text-gray-600 dark:text-gray-300 text-sm"><strong>Food Country:</strong> ${meal.strArea}</p>
      <p class="text-gray-600 dark:text-gray-300 text-sm"><strong>Instructions:</strong> ${meal.strInstructions}</p>
      <p class="text-gray-600 dark:text-gray-300 text-sm"><strong>Tags:</strong> ${meal.strTags || "None"}</p>
      <p class="text-gray-600 dark:text-gray-300 text-sm"><strong>Food Ingredient:</strong> ${meal.strIngredient1 || "N/A"}</p>
    </div>
    `;
    mealsListContainer.insertAdjacentHTML("beforeend", mealHTML);
  });
}

getMeals();
