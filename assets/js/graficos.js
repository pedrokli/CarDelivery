// Gráfico de receitas e despesas
var ctxL = document.getElementById("grafico-1").getContext('2d');
var graficoUm = new Chart(ctxL, {
type: 'line',
data: {
    // meses do ano
    labels: ["Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro"],
    datasets: [
    {
        label: "Receitas",
        data: [65, 72, 75, 68, 56, 70, 65],
        // cor do fundo
        backgroundColor: ['rgba(260,99,132,.2)'],
        // Cor da linha
        borderColor: ['rgba(260,99,132,1)'],
        // espessura das linhas
        borderWidth: 3
    },
    {
        label: "Despesas",
        data: [40, 42, 37, 28, 34, 34, 27],
        backgroundColor: ['rgba(75, 192, 192, .2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 3
    }
    ]
},
options: {
    responsive: true
}
});

// Gráfico de Receita
var ctxB = document.getElementById("grafico-2").getContext('2d');
var graficoDois = new Chart(ctxB, {
  type: 'bar',
  data: {
    labels: ["Março", "Abril", "Maio", "Junho", "Julho", "Agosto"],
    datasets: [{
      label: 'Número de deliverys',
      data: [5, 4, 2, 7, 1, 3],
      backgroundColor: [
        'rgba(157, 102, 255, 0.2)',
        'rgba(157, 102, 255, 0.2)',
        'rgba(157, 102, 255, 0.2)',
        'rgba(157, 102, 255, 0.2)',
        'rgba(157, 102, 255, 0.2)',
        'rgba(157, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});



