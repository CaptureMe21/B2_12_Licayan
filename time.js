// time.js

// Function to get current date and time in a human-readable format
function getCurrentDateTime() {
    const currentDateTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return currentDateTime.toLocaleString('en-US', options);
}

// Set the content of the paragraph element with ID "current-time" to the current date and time
document.getElementById("current-time").textContent = getCurrentDateTime();