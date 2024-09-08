function calculateBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");
  var additionalResult1 = document.getElementById("additional-result-1");
  var additionalResult2 = document.getElementById("additional-result-2");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.innerHTML = "Please enter valid height and weight.";
    additionalResult1.innerHTML = "";
    additionalResult2.innerHTML = "";
    return;
  }

  // Calculate BMI using the formula: BMI = weight / height^2
  var bmi = weight / (height * height);
  var category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Format results for each box
  resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2); // Rounded to 2 decimal places
  additionalResult1.innerHTML = "Your BMI level is: " + category;
  additionalResult2.innerHTML = "Height: " + height.toFixed(2) + " m | Weight: " + weight.toFixed(1) + " kg"; 

}




