import "./style.css";

async function getData() {
  const response = await fetch(
    "https://api.football-data.org/v4/competitions/"
  );

  const data = await response.json();
  console.log(data.data);

  presentLeagues(data);
}

function presentLeagues(data) {}
