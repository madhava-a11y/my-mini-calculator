// Function to display values in the input field
function append(value) {
    const display = document.getElementById("display");
    display.value += value;
  }
  
  // Clear the display
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Calculate the square of the number on display
  function square() {
    const display = document.getElementById("display");
    const number = parseFloat(display.value);
    if (!isNaN(number)) {
      display.value = Math.pow(number, 2);
    } else {
      display.value = "Error";
    }
  }
  
  // Perform calculation based on input in display
  function calculate() {
    const display = document.getElementById("display");
    try {
      // Evaluate expression and display result
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }