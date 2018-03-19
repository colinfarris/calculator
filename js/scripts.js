

  var bmi = function(massUnits, heightUnits) {
    return massUnits / height ** 2 * 703;

  };


  var massUnits= parseFloat(prompt("Enter a number"));
  var heightUnits= parseFloat(prompt("Enter a number"));
  var result = bmi(massUnits, heightUnits);
  alert(result);



  //Convert all units to metric
