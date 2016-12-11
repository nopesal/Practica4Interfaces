var ctx = document.getElementById("myChart"); //Variable que contiene el gráfico
//Se introducen los valores al gráfico. Se configura por defecto para número de visitas
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
                data: [650, 590, 800, 810, 560, 550, 400, 650, 590, 800, 810, 560],
                spanGaps: false,
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin:400
                }
            }]
        },

        labels: {
            fontColor: "white"
        },

    }
});

//Se obtienen los elementos que contienen los botones visitas y seguidores
var opcion1= document.getElementById("opcion1");
var opcion2= document.getElementById("opcion2");

//Si se pulsa en visitas se actualiza el gráfico
opcion1.addEventListener("click", visitas);
function visitas(){
  opcion1.style.fontWeight="bold";  //Se cambia el estilo del texto visitas, resaltando la sección en la que se ha hecho click
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
                  data: [650, 590, 800, 810, 560, 550, 400, 650, 590, 800, 810, 560],
                  spanGaps: false,
              }
          ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      suggestedMin:400
                  }
              }]
          },

          labels: {
              fontColor: "white"
          },

      }
  });
}

// Si se pulsa en seguidores se actualiza el gráfico
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
                        suggestedMin:8000
                    }
                }]
            },

            labels: {
                fontColor: "white"
            },

        }
    });
}

//Si se hace click en el div que contiene una solictud de presupuesto te redirecciona a la sección presupuestos
$(".solicitud").click(function(){
  location.href="presupuestos.html";
});

/*
stopPropagation para que en los elementos que se puede hacer click dentro de la solictud de presupuestos se pueda
seguir haciendo
 */
$(".usuario a").click(function(event){
  event.stopPropagation();
});

$(".imagen").click(function(event){
  event.stopPropagation();
});

$("#botonPRO").click(function(){
  location.href="pro.html";
});
