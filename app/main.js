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
      <div id="meal-card" class="border-4 border-solid border-secondary p-4">
        <h2 class="text-2xl text-secondary font-semibold flex items-center justify-center box-border mb-4 mt-2">${meal.strMeal}</h2>
        <img class="border-solid border-4 border-tertiary mb-2" src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
        <p class="text-text mb-2"><span class="font-bold">Category:</span> ${meal.strCategory}</p>
        <p class="text-text mb-2"><span class="font-bold">Country of Origin:</span> ${meal.strArea}</p>
        <p class="text-text mb-2"><span class="font-bold">Instructions:</span> ${meal.strInstructions}</p>
        <p class="text-text mb-2 break-words"><span class="font-bold">Recipe Link:</span> ${meal.strSource}</p>
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
