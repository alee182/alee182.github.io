const PASSWORD = "CharlotteRocks"; // Change this as needed

    function checkPassword() {
      const entered = document.getElementById("password").value;
      if (entered === PASSWORD) {
        document.getElementById("formContainer").style.display = "block";
        renderEvents();
      } else {
        alert("Incorrect password");
      }
    }

    function submitEvent() {
      const event = {
        title: document.getElementById("title").value.trim(),
        date: document.getElementById("date").value.trim(),
        location: document.getElementById("location").value.trim(),
        description: document.getElementById("description").value.trim()
      };

      if (!event.title || !event.date || !event.location || !event.description) {
        alert("All fields are required.");
        return;
      }

      let events = JSON.parse(localStorage.getItem("events") || "[]");
      events.push(event);
      localStorage.setItem("events", JSON.stringify(events));

      clearForm();
      renderEvents();
    }

    function deleteEvent(index) {
      let events = JSON.parse(localStorage.getItem("events") || "[]");
      events.splice(index, 1);
      localStorage.setItem("events", JSON.stringify(events));
      renderEvents();
    }

    function renderEvents() {
      const events = JSON.parse(localStorage.getItem("events") || "[]");
      const container = document.getElementById("eventList");
      container.innerHTML = "";

      if (events.length === 0) {
        container.innerHTML = "<p>No events available.</p>";
        return;
      }

      events.forEach((e, i) => {
        const div = document.createElement("div");
        div.className = "event";
        div.innerHTML = `
          <h3>${e.title}</h3>
          <p><strong>Date:</strong> ${e.date}</p>
          <p><strong>Location:</strong> ${e.location}</p>
          <p><strong>Description:</strong> ${e.description}</p>
          <button class="delete-btn" onclick="deleteEvent(${i})">Delete</button>
        `;
        container.appendChild(div);
      });
    }

    function clearForm() {
      document.getElementById("title").value = "";
      document.getElementById("date").value = "";
      document.getElementById("location").value = "";
      document.getElementById("description").value = "";
    }