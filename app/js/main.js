import "tailwindcss";

async function getFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  console.log(response.status);

  const data = await response.json();
  console.log(data.data);

  presentFoods(data);
}

function presentFoods(data) {
  const foodsListContainer = document.querySelector("#food-cont");
  foodsListContainer.innerHTML = "";
  data.data.forEach((food) => {
    const foodHTML = `
    <div class= "food-cont">
    <h2>${food.strMeal}</h2>
    <img src="${food.strMealThumb}" />
    <p> Food Category:${food.strCategory}</p>
    <p> Food Country:${food.strArea}</p>
    <p> Instructions:${food.strInstructions}</p>
    <p> Tags:${food.strTags}</p>
    <p> Food Ingredient :${food.strIngredient1}</p>
    </div>
    `;
    foodsListContainer.insertAdjacentHTML("beforeend", foodHTML);
  });
}

getFoods();
