document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const convertButton = document.getElementById('convert');
    const resultDiv = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        if (celsiusInput.value !== '') {
            const celsius = parseFloat(celsiusInput.value);
            const fahrenheit = (celsius * 9 / 5) + 32;

            resultDiv.innerHTML = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultDiv.innerHTML = 'Please enter a valid temperature in Celsius.';
        }
    });
});
