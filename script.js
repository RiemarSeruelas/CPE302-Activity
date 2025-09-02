const username = "RiemarSeruelas"; 
const projectsGrid = document.getElementById("projects-grid");

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      if (repo.fork) return;

      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h4>${repo.name}</h4>
        <p>${repo.description ? repo.description : "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;

      projectsGrid.appendChild(card);
    });
  })
  .catch(error => console.error("Error fetching repos:", error));
