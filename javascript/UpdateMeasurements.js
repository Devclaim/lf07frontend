console.log("Initiate Update Measurements");

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
}

setInterval(UpdateMeasurements, 4000);
