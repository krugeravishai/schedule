// Update Clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

  
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
  setTimeout(() => showMessage("Hello World!"), 3000);
  setTimeout(() => showMessage("Meeting in 10 minutes!"), 6000);
  
