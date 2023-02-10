function calculateCountdown(endDateString) {
  // la data di fine
  let endDate = new Date(endDateString);

  // La data d'inizio
  let startDate = new Date();

  let timeDifference = (endDate - startDate) / 1000;

  let days = Math.floor(timeDifference / 86400);
  timeDifference -= days * 86400;

  let hours = Math.floor(timeDifference / 3600) % 24;
  timeDifference -= hours * 3600;

  let minutes = Math.floor(timeDifference / 60) % 60;
  timeDifference -= minutes * 60;

  let seconds = Math.floor(timeDifference % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

const pad = (unit) => {
  return String(unit).padStart(2, "0");
};

function updateCountdownTimer() {
  let timeLeft = calculateCountdown("2023-02-08T00:00");

  let elements = {
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    minutes: document.querySelector("#minutes"),
    seconds: document.querySelector("#seconds"),
  };

  elements.days.innerText = pad(timeLeft.days).padEnd(3,"D");
  elements.hours.innerText = pad(timeLeft.hours);
  elements.minutes.innerText = pad(timeLeft.minutes);
  elements.seconds.innerText = pad(timeLeft.seconds);
}

document.addEventListener("DOMContentLoaded", function (event) {
  updateCountdownTimer();
  setInterval(() => {
    updateCountdownTimer();
  }, 1000);
});