import "./style.css";

async function getData() {
  try {
    const response = await fetch(
      "https://api-football-standings.azharimm.site/leagues"
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.data);
      data.data.forEach((league) => console.log(league.name));
    }
  } catch (error) {
    alert("I could not find that boi!");
  }
}

getData();
