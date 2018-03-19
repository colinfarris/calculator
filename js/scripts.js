
//BMI Calculator
  var bmi = function(massUnits, heightUnits) {
    return (massUnits / height ** 2) * 703;

  };


  var massUnits= parseFloat(prompt("Enter a number"));
  var heightUnits= parseFloat(prompt("Enter a number"));
  var result = bmi(massUnits, heightUnits);
  alert(result);


//Fahrenheit to Celsius Calculator



var celsiusToFahrenheit = function(celsius) {
  return (celsius + 32 * (9/5));

  };


var inputCelsius=parseInt(prompt("Enter a number"));
var farhrenheit=alert(celsiusToFahrenheit(inputCelsius));
