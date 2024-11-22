import "./style.css";

async function getCompetitions() {
  const response = await fetch(
    "https://api.football-data.org/v4/competitions/"
  );
  console.log(response.status);

  const data = await response.json();
  console.log(data.data);

  presentCompetitions(data);
}

function presentCompetitions(data) {
  const competitionsListContainer = document.querySelector("#league-cont");
  competitionsListContainer.innerHTML = "";
  data.data.forEach((competition) => {
    const competitionHTML = `
    <div class= "league-name">
    <h2>${competition.name}</h2>
    <img>${competition.flag}<img>
    <p>${competition.type}</p>
    <p>${competition.startDate}</p>
    <p>${competition.endDate}</p>
    <p>${competition.currentMatchday}</p>
    <p>${competition.winner}</p>
    </div>
    `;
    competitionsListContainer.insertAdjacentHTML("beforeend", competitionHTML);
  });
}

getCompetitions();
