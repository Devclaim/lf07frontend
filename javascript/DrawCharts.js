const context = document.getElementById('chart').getContext('2d');

const labels = ['jan', 'feb', 'march', 'april'];
const data = {
    labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
    }
};

const chart = new Chart(context , config)