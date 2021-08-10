<!DOCTYPE html>
<html lang="en">
<head>
<!--Cuando quieras hacer una grafica
 tienes que crearlo en php y hacerlo
  en un servidor y manda de los parametros
   por medio de un _Get port medio de la url
    a si como lo tienes en el dasboard
-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://www.gstatic.com/firebasejs/7.13.1/firebase.js"></script> 
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/modules/solid-gauge.js"></script>
    <style>


    #container {
        max-width: 300px;
        margin: 0 auto;
    }
    
    .highcharts-figure, .highcharts-data-table table {
        min-width: 154px;    
        max-width: 243px;
        margin: auto;
    }
    
    .highcharts-data-table table {
        font-family: Verdana, sans-serif;
        border-collapse: collapse;
        border: 1px solid #EBEBEB;
        margin: 10px auto;
        text-align: center;
        width: 100%;
        max-width: 500px;
    }
    .highcharts-data-table caption {
        padding: 1em 0;
        font-size: 1.2em;
        color: #555;
    }
    .highcharts-data-table th {
        font-weight: 600;
        padding: 0.5em;
    }
    .highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
        padding: 0.5em;
    }
    .highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
        background: #f8f8f8;
    }
    .highcharts-data-table tr:hover {
        background: #f1f7ff;
    }
</style>
</head>
<body>
    <figure class="highcharts-figure">

        <div id="porcentajes"></div>


    </figure>
    <script>
        const firebaseConfig = {
            databaseURL: "https://huertoint-default-rtdb.firebaseio.com",
            apiKey: "AIzaSyDYgYS6PyAmGGTxj3WFpsTYlLuK7_7W7iE",
            authDomain: "huertoint.firebaseapp.com",
            projectId: "huertoint",
            storageBucket: "huertoint.appspot.com",
            messagingSenderId: "819049979924",
            appId: "1:819049979924:web:3fddbb8a09d659a8f20701"
        };

    firebase.initializeApp(firebaseConfig);

    var realtime = firebase.database();
    


    realtime.ref("sensores/<?=$_GET['id']?>")                             
    .on('value', function(snap) { 

        var suelo   = snap.val().suelo;
        var agua    = snap.val().agua;
        var luz     = snap.val().luz;
        var humedad = snap.val().humedad;


        Highcharts.chart({

            chart: {
                type: 'solidgauge',
                height: '120%',
                renderTo: 'porcentajes'
            },

            title: {
                text: 'Grafico General',
                style: {
                    color: '#4AA96C'
                }
            },

            tooltip: {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                    fontSize: '12px'
                },
                valueSuffix: '%',
                pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
                positioner: function (labelWidth) {
                    return {
                        x: (this.chart.chartWidth - labelWidth) / 2,
                        y: (this.chart.plotHeight / 2) + 15
                    };
                }
            },

            pane: {
                startAngle: 0,
                endAngle: 360,
                        background: [{ // Track for Move
                            outerRadius: '117%',
                            innerRadius: '97%',
                            backgroundColor: Highcharts.color("#FF005C")
                            .setOpacity(0.3)
                            .get(),
                            borderWidth: 0
                        }, { // Track for Move
                            outerRadius: '96%',
                            innerRadius: '76%',
                            backgroundColor: Highcharts.color("#7C83FD")
                            .setOpacity(0.3)
                            .get(),
                            borderWidth: 0
                        }, { // Track for Exercise
                            outerRadius: '75%',
                            innerRadius: '55%',
                            backgroundColor: Highcharts.color("#FFAA4C")
                            .setOpacity(0.3)
                            .get(),
                            borderWidth: 0
                        }, { // Track for Stand
                            outerRadius: '54%',
                            innerRadius: '34%',
                            backgroundColor: Highcharts.color("#96BAFF")
                            .setOpacity(0.3)
                            .get(),
                            borderWidth: 0
                        }]
                    },

                    yAxis: {
                        min: 0,
                        max: 100,
                        lineWidth: 0,
                        tickPositions: []
                    },

                    plotOptions: {
                        solidgauge: {
                            dataLabels: {
                                enabled: false
                            },
                            linecap: 'round',
                            stickyTracking: false,
                            rounded: true
                        }
                    },

                    series: [{
                        name: 'Humedad Suelo',
                        data: [{
                            color: "#FF005C",
                            radius: '117%',
                            innerRadius: '97%',
                            y: suelo 
                        }]
                    }, {
                        name: 'Agua',
                        data: [{
                            color: "#7C83FD",
                            radius: '96%',
                            innerRadius: '76%',
                            y : agua   
                        }]
                    }, {
                        name: 'Luz',
                        data: [{
                            color: "#FFAA4C",
                            radius: '75%',
                            innerRadius: '55%',
                            y: luz 
                        }]
                    }, {
                        name: 'Humedad',
                        data: [{
                            color: "#96BAFF",
                            radius: '54%',
                            innerRadius: '34%',
                            y: humedad
                        }]
                    }]
                });
});
</script>
</body>
</html>
