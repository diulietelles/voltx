// Gráfico Principal de Economia
const mainChartCtx = document.getElementById('mainChart').getContext('2d');
new Chart(mainChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Economia', 'Consumo'],
        datasets: [{
            data: [29, 71],
            backgroundColor: ['#29B6F6', '#E0E0E0'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
        }
    }
});

// Gráfico de Economia Mensal
const savingsChartCtx = document.getElementById('savingsChart').getContext('2d');
new Chart(savingsChartCtx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [{
            label: 'Economia (%)',
            data: [20, 25, 30, 35],
            backgroundColor: '#66BB6A',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: { beginAtZero: true, max: 100 }
        }
    }
});