function generateSeries() {
    var x = parseInt(document.getElementById("inputNumber").value);
    var series = [];
    
    for (var i = 1; i <= x; i += 2) {
      series.push(i);
    }
    
    document.getElementById("output").innerHTML = "Output: " + series.join(", ");
  }
  