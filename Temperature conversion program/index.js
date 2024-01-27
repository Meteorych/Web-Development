const tempInput = document.getElementById("submitTemp");
const fahrenheit = document.getElementById("toFahrenheit");
const celsius = document.getElementById("toCelsius");
const button =  document.getElementById("submitButton");
const result = document.getElementById("result");

function convert(){
    let temp = tempInput.value;
    if (fahrenheit.checked)
    {
        result.textContent = ((temp * 9/5) + 32).toFixed(2);
    }
    else if (celsius.checked)
    {
        result.textContent = ((temp - 32) * 5/9).toFixed(2);
    }
    else
    {
        result.textContent = "Select a unit";
    }
}
