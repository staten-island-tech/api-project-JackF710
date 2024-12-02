import "./style.css";

async function getMeals() {
  const response = await fetch
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

    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const mealsData = await Promise.all(responses.map((response) => response.json()));
  
    const allMeals = mealsData.flatMap((data) => data.meals || []);
  
    presentMeals(allMeals);
  const data = await response.json();
  presentMeals(data.meals);
}

function presentMeals(data) {
  const mealsListContainer = document.querySelector("#meal-cont");
  mealsListContainer.innerHTML = "";

  data.forEach((meal) => {
    const mealHTML = `
    <div class=>
      <h2 class=>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
      <p class=>Food Category: ${meal.strCategory}</p>
      <p class=>Food Country: ${meal.strArea}</p>
      <p class=>Instructions: ${meal.strInstructions}</p>
      <p class=>Tags: ${meal.strTags}</p>
      <p class=Food Ingredient: ${meal.strIngredient1}</p>
    </div>
    `;
    mealsListContainer.insertAdjacentHTML("beforeend", mealHTML);
  });
}

getMeals();
