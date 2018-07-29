$.ajax({
    type: "GET", // method
    url: "data/moker.json",
    dataType: "json",
    success: function(dataFromJSON){
        console.log(dataFromJSON);
    },
    error: function(error) {
        console.log(error);
        console.log("Something went wrong");
    }
});

 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var jsonData = $.ajax({
        url: "data/mocker.json",
        dataType: "json",
        async: false
        }).responseText;

        var data = new google.visualization.DataTable(jsonData);
        var chart = new google.visualization.PieChart(document.getElementById('chartDiv'));
        chart.draw(data, {width: 400, height: 240});


  }
