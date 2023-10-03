import { directionalLight } from "./MainScene.js";
import { addData } from "./DrawCharts.js";

console.log("Initiate Update Measurements");

let tempLow = false;
let tempHigh = false;
let humiditylow = false;
let humidityHigh = false;
let waterLevelHigh = false;
let luminosityLow = false;
let luminosityHigh = false;

function UpdateMeasurements() {
    fetch('Execute_WriteMeasurements.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    fetch('Execute_GetTemperature.php')
        .then(response => response.json())
        .then(data => {
            updateTemperatureData(data);
        })
        .catch(error => console.error("Error fetching data:", error));

    fetch('Execute_GetHumidity.php')
        .then(response => response.json())
        .then(data => {
            updateHumidityData(data);
        })
        .catch(error => console.error("Error fetching data:", error));

    fetch('Execute_GetWaterLevel.php')
        .then(response => response.json())
        .then(data => {
            updateWaterLevelData(data);
        })
        .catch(error => console.error("Error fetching data:", error));

    fetch('Execute_GetLuminosity.php')
        .then(response => response.json())
        .then(data => {
            updateLuminosityData(data);
        })
        .catch(error => console.error("Error fetching data:", error));
}


function updateTemperatureData(data) {
    if(data) {
        const temperatureValue = document.querySelector("#temperatureValue");
        const latestValue = data.value;

        temperatureValue.textContent = latestValue;

        if(latestValue >= 30) {
            temperatureValue.parentElement.style.color = "#ff7c5e";
            tempHigh = true;
            tempLow = false;
        } else if(latestValue <= 20) {
            temperatureValue.parentElement.style.color = "#ff7c5e";
            tempHigh = false;
            tempLow = true;
        } else {
            temperatureValue.parentElement.style.color = "#e0ffe8";
            tempHigh = false;
            tempLow = false;
        }

        updateDirectionalLight();
        addData(data.datetime, data.value);
    }
}

function updateHumidityData(data) {
    if(data) {
        const humidityValue = document.querySelector("#humidityValue");
        const latestValue = data[data.length -1].value;

        humidityValue.textContent = latestValue;

        if(latestValue >= 60) {
            humidityValue.parentElement.style.color = "#ebcd7a";
            humidityHigh = true;
            humiditylow = false;
        } else if(latestValue <= 30) {
            humidityValue.parentElement.style.color = "#ebcd7a";
            humiditylow = true;
            humidityHigh = false;
        } else {
            humidityValue.parentElement.style.color = "#e0ffe8";
            humidityHigh = false;
            humiditylow = false;
        }

        updateDirectionalLight();
    }
}

function updateWaterLevelData(data) {
    if(data) {
        const waterLevelValue = document.querySelector("#waterLevelValue");
        const latestValue = data[data.length -1].value;

        waterLevelValue.textContent = latestValue;

        if(latestValue >= 300) {
            waterLevelValue.parentElement.style.color = "#ff7c5e";
            waterLevelHigh = true;
        } else {
            waterLevelValue.parentElement.style.color = "#e0ffe8";
            waterLevelHigh = false;
        }

        updateDirectionalLight();
    }
}

function updateLuminosityData(data) {
    if(data) {
        const luminosity = document.querySelector("#luminosityValue");
        const latestValue = data[data.length -1].value;

        luminosity.textContent = latestValue;

        if(latestValue > 400) {
            luminosity.parentElement.style.color = "#ebcd7a";
            luminosityHigh = true;
            luminosityLow = false;
        } else if (latestValue < 50) {
            luminosity.parentElement.style.color = "#ff7c5e";
            luminosityHigh = false;
            luminosityLow = true;
        } else {
            luminosity.parentElement.style.color = "#e0ffe8";
            luminosityHigh = false;
            luminosityLow = false;
        }

        updateDirectionalLight();
    }
}

function updateDirectionalLight() {
    if(tempHigh || tempLow || waterLevelHigh || luminosityLow) {
        directionalLight.color.setHex("0xff7c5e");
    } else if (humiditylow || humidityHigh || luminosityHigh) {
        directionalLight.color.setHex("0xFED141");
    } else {
        directionalLight.color.setHex("0xe0ffe8");
    }
}

UpdateMeasurements();
setInterval(UpdateMeasurements, 4000);
