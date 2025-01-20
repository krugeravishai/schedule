// Update Clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  const events = [
    { time: "09:00 AM", event: "Team Meeting" },
    { time: "12:00 PM", event: "Lunch Break" },
    { time: "03:00 PM", event: "Project Review" }
  ];
  
  function displaySchedule() {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";
    events.forEach(e => {
      const li = document.createElement("li");
      li.textContent = `${e.time} - ${e.event}`;
      eventList.appendChild(li);
    });
  }
  displaySchedule();

  function showMessage(text) {
    const messages = document.getElementById("messages");
    const message = document.createElement("div");
    message.className = "message";
    message.textContent = text;
    messages.appendChild(message);
  
    setTimeout(() => {
      message.style.opacity = 0;
      setTimeout(() => messages.removeChild(message), 1000);
    }, 3000); // Message stays for 3 seconds
  }
  
  // Example message
  setTimeout(() => showMessage("Welcome to the schedule!"), 2000);
  setTimeout(() => showMessage("Meeting in 10 minutes!"), 6000);
  