

  function loadEvents() {
    

    const container = document.getElementById("eventsContainer");
    container.innerHTML = ""; // clear any old content

    events.forEach(e => {
      const div = document.createElement("div");
      div.className = "event";
      div.innerHTML = `
        <h2>${e.title}</h2>
        <p class="date"><strong>Date:</strong> ${e.date}</p>
        <p class="location"><strong>Location:</strong> ${e.location}</p>
        <p class="description">${e.description}</p>
      `;
      container.appendChild(div);
    });
  }

  document.addEventListener("DOMContentLoaded", loadEvents);