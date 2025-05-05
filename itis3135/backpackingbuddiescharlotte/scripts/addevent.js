const defaultEvents = [
    {
      title: "Hanging Rock Hike",
      date: "May 17, 2025",
      location: "Hanging Rock State Park North Trailhead",
      description: "Kick off the season with a breathtaking early morning hike to catch the sunrise over the Blue Ridge. This moderate 4-mile trail is perfect for all skill levels. Bring your headlamp, warm layers, and a camera!"
    },
    {
      title: "Beginner's Day Hike and Gear Workshop",
      date: "June 7, 2025",
      location: "Uwharrie National Forest Southern Terminus",
      description: "New to hiking? Come along for a relaxed day hike (about 3 miles) followed by a hands-on workshop on essential gear, packing tips, and trail safety. Great for first-timers and anyone looking to brush up on basics."
    },
    {
      title: "4-Day Shenandoah Wilderness Trek",
      date: "August 8–11, 2025",
      location: "Shenandoah National Park",
      description: "Explore the heart of Shenandoah on a four-day, three-night backpacking adventure along a stunning stretch of the Appalachian Trail. We'll cover about 30 miles total, with campsites near scenic overlooks, waterfalls, and peaceful woodlands. This trip is best suited for hikers with some multi-day backpacking experience. Get ready for unforgettable views, starry nights, and great company!"
    }
  ];

  function loadEvents() {
    let events;

    try {
      events = JSON.parse(localStorage.getItem("events"));
      if (!Array.isArray(events)) throw new Error(); 
    } catch {
      events = null;
    }

    if (!events) {
      localStorage.setItem("events", JSON.stringify(defaultEvents));
      events = defaultEvents;
    }

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