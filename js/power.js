function calculatePower() {
    var flowRate = parseFloat(document.getElementById('flowRate').value);
    var head = parseFloat(document.getElementById('head').value);
    var efficiency = parseFloat(document.getElementById('efficiency').value);

    // Validate inputs
    if (isNaN(flowRate) || isNaN(head) || isNaN(efficiency) || flowRate <= 0 || head <= 0 || efficiency <= 0 || efficiency > 100) {
        document.getElementById('result').innerHTML = 'Please enter valid input values.';
        return;
    }

    // Calculate power
    var power = (flowRate * head * 9.81 * efficiency) / 1000; // 9.81 is the acceleration due to gravity (m/s^2)

    // Display result
    document.getElementById('result').innerHTML = 'Estimated Power Output: ' + power.toFixed(2) + ' kW';
}
