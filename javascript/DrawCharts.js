const context = document.getElementById('chart').getContext('2d');

const data = {
    labels: [],
        datasets: [{
            label: 'Temperatures',
            data: [],
            fill: false,
            borderColor: "#e0ffe8",
            color: "#e0ffe8",
            tension: 0.1
        }]
    };

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
               ticks: {
                    color: "#e0ffe8",
               }
            },
            x: {
                ticks: {
                    color: "#e0ffe8",
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

const chart = new Chart(context , config)

export function addData(label, newData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    chart.update();
}