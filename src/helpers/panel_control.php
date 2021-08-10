<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://www.gstatic.com/firebasejs/7.13.1/firebase.js"></script> 

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <title>grafica de tiempo</title>

    <style>
    .highcharts-figure, .highcharts-data-table table {
    min-width: 200px; 
    max-width: 400px;
    margin: 1em auto;
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

<div id= temperatura>

</figure>
<script>
/**CONFIGURACIÓN DE FIREBASE */
var firebaseConfig = {
        apiKey: "AIzaSyDYgYS6PyAmGGTxj3WFpsTYlLuK7_7W7iE",
        authDomain: "huertoint.firebaseapp.com",
        databaseURL: "https://huertoint-default-rtdb.firebaseio.com",
        projectId: "huertoint",
        storageBucket: "huertoint.appspot.com",
        messagingSenderId: "819049979924",
        appId: "1:819049979924:web:3fddbb8a09d659a8f20701"
        };

    firebase.initializeApp(firebaseConfig);
    var realtime    = firebase.database();


    realtime.ref("sensores/<?=$_GET['id']?>/data")                             
    .on('value', function(snap) { 

    /**GRÁFICA TEMPERATURAS */
        Highcharts.chart({
            chart: {
                type: 'line',
                renderTo: 'temperatura'
            },
            title: {
                text: 'Temperatura por dia',
                style: {
                    color: '#4AA96C'
                }
            },
            xAxis: {
                categories: ['02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                color: "#4AA96C",
                name: 'Temperatura del Ambiente',
                data: snap.val()
            }]
        });

    });



</script>
</body>
</html>


