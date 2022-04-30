// var kelvin = document.getElementById('kelvin').textContent; 
var kelvin = 573;
var celsius = kelvin - 273;
var fahrenheit = ((celsius*(9/5)))+32;
console.log(`Temperatura en Celsius: ${celsius}°C`);
console.log("Temperatura en Fahrenheit: "+Math.round(fahrenheit)+"°F");
