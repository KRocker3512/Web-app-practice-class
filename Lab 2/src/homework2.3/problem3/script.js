document.addEventListener('DOMContentLoaded', function () {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
  
    function updateCountdown() {
      const currentTime = new Date();
      const currentYear = currentTime.getFullYear();
      const newYear = new Date(currentYear + 1, 0, 1); 
  
      const timeDifference = newYear - currentTime;
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      daysElement.textContent = days;
      hoursElement.textContent = hours;
      minutesElement.textContent = minutes;
      secondsElement.textContent = seconds;
    }
  
    setInterval(updateCountdown, 1000);
  
    updateCountdown();
  });
  