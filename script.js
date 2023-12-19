// script.js

function sendRequest(endpoint) {
    const apiUrl = 'http://your-raspberry-pi-ip:5000/' + endpoint;

    fetch(apiUrl, { method: 'POST' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('status').innerText = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


// Function to send requests to control the water purifier
function sendRequest(endpoint) {
    // You'll need to replace the placeholder URL with the actual endpoint of your Raspberry Pi
    const apiUrl = 'http://your-raspberry-pi-ip/' + endpoint;

    fetch(apiUrl, { method: 'POST' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Update the status div with the response from the server
            document.getElementById('status').innerText = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Button click event handlers
function activateWaterDispenser() {
    sendRequest('activateWaterDispenser');
}

function turnOnOff() {
    sendRequest('turnOnOff');
}

function activateHotWater() {
    sendRequest('activateHotWater');
}

function activateNormalWater() {
    sendRequest('activateNormalWater');
}

function activateColdWater() {
    sendRequest('activateColdWater');
}
