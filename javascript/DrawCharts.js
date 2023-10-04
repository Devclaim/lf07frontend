const tempContext = document.querySelector('[data-chart="tempChartMain"]').getContext('2d');
const tempContextYAxis = document.querySelector('[data-chart="tempChartYAxis"]').getContext('2d');

const humidContext = document.querySelector('[data-chart="humidChartMain"]').getContext('2d');
const humidContextYAxis = document.querySelector('[data-chart="humidChartYAxis"]').getContext('2d');

const waterContext = document.querySelector('[data-chart="waterChartMain"]').getContext('2d');
const waterContextYAxis = document.querySelector('[data-chart="waterChartYAxis"]').getContext('2d');

const lumContext = document.querySelector('[data-chart="lumChartMain"]').getContext('2d');
const lumContextYAxis = document.querySelector('[data-chart="lumChartYAxis"]').getContext('2d');

const dataChartSmall = {
    labels: [],
    datasets: [
        {
            label: 'Temperatures',
            data: [],
            fill: false,
            borderColor: "#e0ffe8",
            color: "#e0ffe8",
            tension: 0.1
        },
    ]
};

const configChartSmall = {
    type: 'line',
    data: dataChartSmall,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 14
            }
        },
        scales: {
            y: {
                ticks: {
                    color: "#e0ffe8",
                    stepSize: 1
                },
                afterFit: (ctx) => {
                    ctx.width = 30;
                }
            },
            x: {
                ticks: {
                    display: false,
                },                
                grid: {
                    drawTicks: false,
                },
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

const dataChartLarge = {
    labels: [],
        datasets: [
            {
                label: 'Temperatures',
                data: [],
                fill: false,
                borderColor: "#e0ffe8",
                color: "#e0ffe8",
                tension: 0.1,
                pointRadius: 7,
                pointHoverRadius: 9,
            }
        ]
    };

const configChartLarge = {
    type: 'line',
    data: dataChartLarge,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 5
            }
        },
        scales: {
            y: {
                ticks: {
                    display: false,
                    stepSize: 1
                },
                grid: {
                    drawTicks: false,
                }
            },
            x: {
                ticks: {
                    display: false,
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

const dataChartSmallHumid = {
    labels: [],
    datasets: [
        {
            label: 'Humidity',
            data: [],
            fill: false,
            borderColor: "#e0ffe8",
            color: "#e0ffe8",
            tension: 0.1
        },
    ]
};

const configChartSmallHumid = {
    type: 'line',
    data: dataChartSmallHumid,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 14
            }
        },
        scales: {
            y: {
                ticks: {
                    color: "#e0ffe8",
                    stepSize: 1
                },
                afterFit: (ctx) => {
                    ctx.width = 30;
                }
            },
            x: {
                ticks: {
                    display: false,
                },                
                grid: {
                    drawTicks: false,
                },
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

const dataChartLargeHumid = {
    labels: [],
        datasets: [
            {
                label: 'Humid',
                data: [],
                fill: false,
                borderColor: "#e0ffe8",
                color: "#e0ffe8",
                tension: 0.1,
                pointRadius: 7,
                pointHoverRadius: 9,
            }
        ]
    };

const configChartLargeHumid = {
    type: 'line',
    data: dataChartLargeHumid,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 5
            }
        },
        scales: {
            y: {
                ticks: {
                    display: false,
                    stepSize: 1
                },
                grid: {
                    drawTicks: false,
                }
            },
            x: {
                ticks: {
                    display: false,
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

const dataChartSmallWater = {
    labels: [],
    datasets: [
        {
            label: 'Temperatures',
            data: [],
            fill: false,
            borderColor: "#e0ffe8",
            color: "#e0ffe8",
            tension: 0.1
        },
    ]
};

const configChartSmallWater = {
    type: 'line',
    data: dataChartSmallWater,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 14
            }
        },
        scales: {
            y: {
                ticks: {
                    color: "#e0ffe8",
                    stepSize: 1
                },
                afterFit: (ctx) => {
                    ctx.width = 30;
                }
            },
            x: {
                ticks: {
                    display: false,
                },                
                grid: {
                    drawTicks: false,
                },
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

const dataChartLargeWater = {
    labels: [],
        datasets: [
            {
                label: 'Temperatures',
                data: [],
                fill: false,
                borderColor: "#e0ffe8",
                color: "#e0ffe8",
                tension: 0.1,
                pointRadius: 7,
                pointHoverRadius: 9,
            }
        ]
    };

const configChartLargeWater = {
    type: 'line',
    data: dataChartLargeWater,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 5
            }
        },
        scales: {
            y: {
                ticks: {
                    display: false,
                    stepSize: 1
                },
                grid: {
                    drawTicks: false,
                }
            },
            x: {
                ticks: {
                    display: false,
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

const dataChartSmallLum = {
    labels: [],
    datasets: [
        {
            label: 'Temperatures',
            data: [],
            fill: false,
            borderColor: "#e0ffe8",
            color: "#e0ffe8",
            tension: 0.1
        },
    ]
};

const configChartSmallLum = {
    type: 'line',
    data: dataChartSmallLum,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 14
            }
        },
        scales: {
            y: {
                ticks: {
                    color: "#e0ffe8",
                    stepSize: 1
                },
                afterFit: (ctx) => {
                    ctx.width = 30;
                }
            },
            x: {
                ticks: {
                    display: false,
                },                
                grid: {
                    drawTicks: false,
                },
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

const dataChartLargeLum = {
    labels: [],
        datasets: [
            {
                label: 'Temperatures',
                data: [],
                fill: false,
                borderColor: "#e0ffe8",
                color: "#e0ffe8",
                tension: 0.1,
                pointRadius: 7,
                pointHoverRadius: 9,
            }
        ]
    };

const configChartLargeLum = {
    type: 'line',
    data: dataChartLargeLum,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 5
            }
        },
        scales: {
            y: {
                ticks: {
                    display: false,
                    stepSize: 1
                },
                grid: {
                    drawTicks: false,
                }
            },
            x: {
                ticks: {
                    display: false,
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

export const tempChart = new Chart(tempContext , configChartLarge);
export const tempChartYAxis = new Chart(tempContextYAxis, configChartSmall);
export const tempContainer = document.querySelector('[data-chart="tempContainer"]');

export const humidChart = new Chart(humidContext , configChartLargeHumid);
export const humidChartYAxis = new Chart(humidContextYAxis, configChartSmallHumid);
export const humidContainer = document.querySelector('[data-chart="humidContainer"]');

export const waterChart = new Chart(waterContext , configChartLargeWater);
export const waterChartYAxis = new Chart(waterContextYAxis, configChartSmallWater);
export const waterContainer = document.querySelector('[data-chart="waterContainer"]');

export const lumChart = new Chart(lumContext , configChartLargeLum);
export const lumChartYAxis = new Chart(lumContextYAxis, configChartSmallLum);
export const lumContainer = document.querySelector('[data-chart="lumContainer"]');

export function addData(label, newData, chart, chartYAxis , chartScrollContainer) {
    //limit data array to maximum 20 entries
    if(chart.data.labels.length > 20) {
        chart.data.labels.shift();
    }
    chart.data.labels.push(label);

    chart.data.datasets.forEach((dataset) => {
        if(dataset.data.length > 20) {
            dataset.data.shift();
        }

        dataset.data.push(newData);
        // add same data to small y axis chart
        chartYAxis.data.datasets.forEach((yDataset) => {
            yDataset.data = dataset.data;
        });
    });

    const containerBody = chartScrollContainer.querySelector('.chartContainerBody');
    const totalLabels = chart.data.labels.length;

    if(totalLabels > 5) {
        const newWidth = 600 + ((totalLabels - 5) * 50);
        containerBody.style.width = `${newWidth}px`;
    }

    chartYAxis.update();
    chart.update();

    chartScrollContainer.scroll({
        left: (chartScrollContainer.scrollWidth - chartScrollContainer.clientWidth),
        behavior: "smooth"
    });
}