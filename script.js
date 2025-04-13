function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultBox = document.getElementById("result-box");

    if (!weight || !height || weight <= 0 || height <= 0) {
      resultBox.textContent = "Please enter valid weight and height.";
      resultBox.style.display = "block";
      return;
    }

    if (weight > 300 || height > 250) {
      resultBox.textContent = "Please enter a realistic weight (1-300 kg) and height (30-250 cm).";
      resultBox.style.display = "block";
      return;
    }

    const heightMeters = height / 100;
    const bmi = weight / (heightMeters ** 2);
    const rounded = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    resultBox.innerHTML = `Your BMI is <strong>${rounded}</strong> <br> Category: <em>${category}</em>`;
    resultBox.style.display = "block";
  }