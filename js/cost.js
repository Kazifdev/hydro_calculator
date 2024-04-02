function calculateCostBenefit() {
    var initialCost = parseFloat(document.getElementById('initialCost').value);
    var operationalCost = parseFloat(document.getElementById('operationalCost').value);
    var powerOutput = parseFloat(document.getElementById('powerOutput').value);
    var electricityPrice = parseFloat(document.getElementById('electricityPrice').value);

    // Validate inputs
    if (isNaN(initialCost) || isNaN(operationalCost) || isNaN(powerOutput) || isNaN(electricityPrice) ||
        initialCost <= 0 || operationalCost < 0 || powerOutput <= 0 || electricityPrice <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid input values.';
        return;
    }

    // Calculate annual revenue
    var annualRevenue = powerOutput * electricityPrice;

    // Calculate annual profit
    var annualProfit = annualRevenue - operationalCost;

    // Calculate payback period
    var paybackPeriod = initialCost / annualProfit;

    // Display result
    document.getElementById('result').innerHTML = 'Annual Profit: $' + annualProfit.toFixed(2) + '<br>' +
                                                    'Payback Period: ' + paybackPeriod.toFixed(2) + ' years';
}
