// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
let valid = false;

// COLLECT VALUES FROM THE USER
while (!valid) {
    investment = parseFloat(prompt('How much do you want to invest?'));
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    years = parseInt(prompt('How many years do you want to invest for?'));

    valid = !isNaN(investment) && !isNaN(rate) && rate >= 0 && rate <= 6 && !isNaN(years) && years >= 1 && years <= 30;
    if (!valid) {
        alert('At least one of your entries is invalid - please try again.');
    }
}




// PERFORM CALCULATIONS
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULTS
document.write(`Original investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Investment future value: $${futureValue.toFixed(2)}`);
