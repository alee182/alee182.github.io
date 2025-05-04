const PASSWORD = "CharlotteRocks!"; 

    function checkPassword() {
      const entered = document.getElementById("password").value;
      if (entered === PASSWORD) {
        document.getElementById("formContainer").style.display = "block";
      } else {
        alert("Incorrect password");
      }
    }

    function submitEvent() {
      const event = {
        title: document.getElementById("title").value,
        date: document.getElementById("date").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value
      };

      let events = JSON.parse(localStorage.getItem("events") || "[]");
      events.push(event);
      localStorage.setItem("events", JSON.stringify(events));

      alert("Event submitted!");
      document.getElementById("title").value = "";
      document.getElementById("date").value = "";
      document.getElementById("location").value = "";
      document.getElementById("description").value = "";
    }