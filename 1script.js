//Current date and time
function updateDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("current-date").textContent =
    `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Update immediately and every second :DD
updateDateTime();
setInterval(updateDateTime, 1000);

// - PROJECT CARDS --
const cardsList = document.querySelector(".cards");
const cards = [];

// Add projects here
cards.push({
  title: "Mario Club Party",
  url: "https://amandareeder.github.io/Marioclub/"
});

cards.push({
  title: "JavaScript Quiz App",
  url: "https://amandareeder.github.io/JSQuizApp/"
});

cards.push({
  title: "Weather Project",
  url: "https://amandareeder.github.io/FinalWeatherUpdate/"
});

// Render cards (entire card is clickable)
cards.map((card) => {
  cardsList.innerHTML += `
    <a href="${card.url}" target="_blank" class="card-link">
      <div class="card">
        <h2>${card.title}</h2>
        <p>Click to view project</p>
      </div>
    </a>
  `;
});
