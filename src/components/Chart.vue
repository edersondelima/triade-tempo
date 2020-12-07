<template>
  <div class="small">
    <p>Parabéns, vamos analisar suas respostas</p>
    <canvas id="chart-triade" ></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  let colors = {
    blue: "rgb(54, 162, 235)",
    green: "rgb(75, 192, 192)",
    grey: "rgb(201, 203, 207)",
    orange: "rgb(255, 159, 64)",
    purple: "rgb(153, 102, 255)",
    red: "rgb(255, 99, 132)",
    yellow: "rgb(255, 205, 86)"
  }

  export default {
    props: ['total', 'group_a', 'group_b', 'group_c'],
    mounted () {
      let ctx = document.getElementById('chart-triade').getContext('2d');

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [this.group_a, this.group_b, this.group_c],
            backgroundColor: [colors.blue, colors.orange, colors.purple],
            label: 'Dataset 1'
          }],
          labels: [
            'Esfera da circunstância',
            'Esfera da importância',
            'Esfera da urgência'
          ]
        },
        options: {
          responsive: true,
          legend: { position: 'bottom' },
          title: {
            display: true,
            text: `Total Geral da tríade do tempo: ${this.total}`
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      });
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
