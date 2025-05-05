const events = [
  { name: "Appalachian Trail Section Hike", date: "2025-06-15T08:00:00" },
  { name: "Uwharrie National Forest Weekend", date: "2025-07-20T09:00:00" },
  { name: "Fall Colors at Grayson Highlands", date: "2025-10-12T07:00:00" }
];

let currentEventIndex = 0;

function updateCountdown() {
  const event = events[currentEventIndex];
  const eventDate = new Date(event.date);
  const now = new Date();
  const diff = eventDate - now;

  if (diff < 0) {
    // Skip past events
    currentEventIndex = (currentEventIndex + 1) % events.length;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
    <strong>${event.name}</strong><br>
    Starts in: ${days}d ${hours}h ${minutes}m ${seconds}s
  `;
}

// Rotate events every 5 seconds
setInterval(() => {
  currentEventIndex = (currentEventIndex + 1) % events.length;
  updateCountdown();
}, 5000);

updateCountdown(); // Initial call
setInterval(updateCountdown, 1000); // Update every second