// This file contains JavaScript functionality for interactive elements such as the countdown timer and other dynamic features on the wedding website.

document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const weddingDate = new Date('2024-06-15T15:00:00'); // Set your wedding date and time here
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const timeDifference = weddingDate - now;

        if (timeDifference <= 0) {
            countdownElement.innerHTML = "It's Wedding Day!";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});