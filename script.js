// script.js

// Função para desconectar o dispositivo
function disconnectDevice(deviceId) {
    alert(`O dispositivo ${deviceId} foi desconectado.`);
    document.getElementById(deviceId).style.opacity = '0.5';
  }
  
  // Configuração do gráfico para mostrar horários de pico
  const ctx = document.getElementById('energyChart').getContext('2d');
  const energyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '00h', '02h', '04h', '06h', '08h', '10h', '12h', '14h', '16h', '18h', 
        '20h', '22h', '24h'
      ],
      datasets: [{
        label: 'Consumo de Energia (W)',
        data: [30, 20, 25, 35, 40, 60, 50, 70, 65, 120, 150, 140, 80],  // Exemplo de consumo
        backgroundColor: function(context) {
          // Destaque para os horários de pico (18h-22h)
          const index = context.dataIndex;
          const time = context.chart.data.labels[index];
          return (time === '18h' || time === '20h' || time === '22h') ? 
            'rgba(255, 99, 132, 0.3)' : 'rgba(0, 209, 178, 0.2)';
        },
        borderColor: '#00d1b2',
        borderWidth: 2,
        pointBackgroundColor: function(context) {
          // Ponto destacado nos horários de pico
          const index = context.dataIndex;
          const time = context.chart.data.labels[index];
          return (time === '18h' || time === '20h' || time === '22h') ? '#ff6b6b' : '#00d1b2';
        },
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { 
          display: true, 
          grid: { color: 'rgba(255, 255, 255, 0.1)' } 
        },
        y: { 
          display: true, 
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          title: {
            display: true,
            text: 'Watts (W)',
            color: '#ffffff'
          }
        }
      }
    }
  });
  