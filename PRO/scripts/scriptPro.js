var ctx = document.getElementById("myChart");
var myLineChart = Chart.Line(ctx, {
    data:{
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [
            {
                label: "Número de visitas",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#193441",
                borderColor: "#193441",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#193441",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#193441",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
                spanGaps: false,
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin:40
                }
            }]
        },

        labels: {
            fontColor: "white"
        },

    }
});

var opcion1= document.getElementById("opcion1");
var opcion2= document.getElementById("opcion2");

opcion1.addEventListener("click", visitas);
function visitas(){
  opcion1.style.fontWeight="bold";
  opcion2.style.fontWeight="normal";
  myLineChart.destroy();
  myLineChart = Chart.Line(ctx, {
      data:{
          labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"],
          datasets: [
              {
                  label: "Número de visitas",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "#193441",
                  borderColor: "#193441",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "#193441",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "#193441",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
                  spanGaps: false,
              }
          ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      suggestedMin:40
                  }
              }]
          },

          labels: {
              fontColor: "white"
          },

      }
  });
}


opcion2.addEventListener("click", seguidores);

function seguidores(){
    opcion1.style.fontWeight="normal";
    opcion2.style.fontWeight="bold";
    myLineChart.destroy();
    myLineChart = Chart.Line(ctx, {
        data:{
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"],
            datasets: [
                {
                    label: "Número de seguidores",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#193441",
                    borderColor: "#193441",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#193441",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#193441",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [8000, 9000, 9500, 9700, 9900, 10000, 10050, 10100, 10150, 10180, 10190, 10200],
                    spanGaps: false,
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin:5000
                    }
                }]
            },

            labels: {
                fontColor: "white"
            },

        }
    });
}

$(".solicitud").click(function(){
  location.href="presupuestos.html";
});

$(".usuario a").click(function(event){
  event.stopPropagation();
});

$(".imagen").click(function(event){
  event.stopPropagation();
});

$("#botonPRO").click(function(){
  location.href="pro.html";
});
