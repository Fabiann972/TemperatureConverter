function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperature').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    let convertedTemperature;
    let resultUnit;

    if (unitFrom === 'celsius' && unitTo === 'fahrenheit') {
        convertedTemperature = (inputTemperature * 9/5) + 32;
        resultUnit = 'Fahrenheit';
    } else if (unitFrom === 'celsius' && unitTo === 'kelvin') {
        convertedTemperature = inputTemperature + 273.15;
        resultUnit = 'Kelvin';
    } else if (unitFrom === 'fahrenheit' && unitTo === 'celsius') {
        convertedTemperature = (inputTemperature - 32) * 5/9;
        resultUnit = 'Celsius';
    } else if (unitFrom === 'fahrenheit' && unitTo === 'kelvin') {
        convertedTemperature = ((inputTemperature - 32) * 5/9) + 273.15;
        resultUnit = 'Kelvin';
    } else if (unitFrom === 'kelvin' && unitTo === 'celsius') {
        convertedTemperature = inputTemperature - 273.15;
        resultUnit = 'Celsius';
    } else if (unitFrom === 'kelvin' && unitTo === 'fahrenheit') {
        convertedTemperature = ((inputTemperature - 273.15) * 9/5) + 32;
        resultUnit = 'Fahrenheit';
    } else {
        // If units are the same, no conversion needed
        convertedTemperature = inputTemperature;
        resultUnit = unitFrom.charAt(0).toUpperCase() + unitFrom.slice(1);
    }

    if (!isNaN(convertedTemperature)) {
        document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid temperature.';
    }
}