const events = JSON.parse(localStorage.getItem("events") || "[]");
const container = document.getElementById("eventsContainer");

    events.forEach(e => {
      const div = document.createElement("div");
      div.className = "event";
      div.innerHTML = `
        <h2>${e.title}</h2>
        <p class="date">Date: ${e.date}</p>
        <p class="location">Location: ${e.location}</p>
        <p class="description">${e.description}</p>
      `;
      container.appendChild(div);
    });
