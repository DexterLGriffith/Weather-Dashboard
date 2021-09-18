var request = new XMLHttpRequest(); 
request.open("GET",link,true);
request.onload = function(){
    var current = JSON.parse(this.response);
    console.log(current);
    document.getElementById('Location').innerHTML = current.name;
    document.getElementById('Temp').innerHTML = "Temp: " + (Math.round(current.main.temp - 273.15) *(9/5) +32) + "°F";
    document.getElementById('Wind').innerHTML = "Wind: " + current.wind.speed + " mph";
    document.getElementById('Humidity').innerHTML = "Humidity: " + current.main.humidity  + "%";

}
if(request.status==200){
    console.log("error");
}
request.send();

var today = moment();
$("#Date").text(today.format("MM/DD/YY"));