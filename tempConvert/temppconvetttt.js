const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

// Add event listeners to input elements
textBox.addEventListener("input", convert);
toFahrenheit.addEventListener("change", convert);
toCelsius.addEventListener("change", convert);

// Call convert() function initially
convert();

function convert() {
    let temp; // Declare temp variable within function scope

    // Check if input value is a valid number
    if (isNaN(Number(textBox.value))) {
        result.textContent = "Invalid input. Please enter a number.";
        return;
    }

    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Please select a unit";
    }
}

// Select a default unit (e.g., Celsius)
toCelsius.checked = true;