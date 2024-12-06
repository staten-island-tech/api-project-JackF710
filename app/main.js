import "./style.css";

let allMeals = [];

async function getMeals() {
  const urls = [
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=b",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=c",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=d",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=e",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=f",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=g",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=h",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=i",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=j",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=k",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=l",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=m",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=n",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=o",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=p",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=q",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=r",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=s",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=t",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=u",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=v",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=w",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=x",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=y",
    "https://www.themealdb.com/api/json/v1/1/search.php?f=z",
  ];

  for (let url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.meals) {
        allMeals = [...allMeals, ...data.meals];
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  }

  presentMeals(allMeals);

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilterClick);
  });
}

function presentMeals(meals) {
  const mealsListContainer = document.querySelector("#meal-cont");
  mealsListContainer.innerHTML = "";

  meals.forEach((meal) => {
    const mealHTML = `
      <div class="meal-card">
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
        <p>Meal Category: ${meal.strCategory}</p>
        <p>Meal Country: ${meal.strArea}</p>
        <p>Instructions: ${meal.strInstructions}</p>
        <p>Tags: ${meal.strTags}</p>
        <p>Ingredients: ${meal.strIngredient1}</p>
      </div>
    `;
    mealsListContainer.insertAdjacentHTML("beforeend", mealHTML);
  });
}
function handleFilterClick(event) {
  const selectedCategory = event.target.getAttribute("data-category");

  if (selectedCategory === "") {
    presentMeals(allMeals);
  } else {
    const filteredMeals = allMeals.filter(
      (meal) => meal.strCategory === selectedCategory
    );
    presentMeals(filteredMeals);
  }
}

getMeals();
