async function getMeals() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  console.log(response.status);

  const data = await response.json();

  presentMeals(data);
}

function presentMeals(data) {
  const mealsListContainer = document.querySelector("#meal-cont");
  mealsListContainer.innerHTML = "";
  data.data.forEach((meal) => {
    const mealHTML = `
    <div class= "meal-cont">
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" />
    <p> Food Category:${meal.strCategory}</p>
    <p> Food Country:${meal.strArea}</p>
    <p> Instructions:${meal.strInstructions}</p>
    <p> Tags:${meal.strTags}</p>
    <p> Food Ingredient :${meal.strIngredient1}</p>
    </div>
    `;
    mealsListContainer.insertAdjacentHTML("beforeend", mealHTML);
  });
}

getMeals();
