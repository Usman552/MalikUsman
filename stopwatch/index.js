     // Get the buttons and the display element
     const display = document.getElementById('display');
     const startBtn = document.getElementById('start');
     const stopBtn = document.getElementById('stop');
     const resetBtn = document.getElementById('reset');
     
     // Variables for the timer and time
     let timer;
     let time = 0; // This will store the time in seconds
     let running = false; // Flag to track if the timer is running
     
     // Function to format the time as HH:MM:SS
     function formatTime(seconds) {
         const hours = Math.floor(seconds / 3600);
         const minutes = Math.floor((seconds % 3600) / 60);
         const secondsRemaining = seconds % 60;
     
         return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining}`;
     }
     
     // Start the timer
     function startTimer() {
         running = true;
         timer = setInterval(() => {
             time++; // Increase the time by 1 second
             display.textContent = formatTime(time); // Update the display
         }, 1000);
     }
     
     // Stop the timer
     function stopTimer() {
         running = false;
         clearInterval(timer); // Stop the timer
     }
     
     // Reset the timer
     function resetTimer() {
         running = false;
         clearInterval(timer); // Stop any running timer
         time = 0; // Reset the time to 0
         display.textContent = formatTime(time); // Update the display
     }
     
     // Event listeners for the buttons
     startBtn.addEventListener('click', () => {
         if (!running) { // Start the timer if it's not already running
             startTimer();
         }
     });
     
     stopBtn.addEventListener('click', () => {
         if (running) { // Stop the timer if it's running
             stopTimer();
         }
     });
     
     resetBtn.addEventListener('click', () => {
         resetTimer(); // Reset the timer
     });
     
     