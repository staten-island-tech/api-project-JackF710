import "./style.css";

async function getCompetitions(data) {
  const response = await fetch(
    "https://api.football-data.org/v4/competitions/"
  );
  console.log(response.status);

  const data = await response.json();
  console.log(data.data);

  presentCompetitions(data);
}

function presentCompetitions(data) {
  const competitionsListContainer = document.querySelector("#competition-cont");
  competitionsListContainer.innerHTML = "";
  data.data.forEach((competition) => {
    const competitionHTML = `
    <div class= "competition-name">
    <h2>${competition.name}</h2>
    <img src="${competition.flag}" />
    <p> Competition Type:${competition.type}</p>
    <p>Competition Start:${competition.startDate}</p>
    <p>Competition End:${competition.endDate}</p>
    <p>Competition Matchday:${competition.currentMatchday}</p>
    <p>Competition Winner:${competition.winner}</p>
    </div>
    `;
    competitionsListContainer.insertAdjacentHTML("beforeend", competitionHTML);
  });
}

getCompetitions();
