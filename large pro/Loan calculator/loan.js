function calculateLoan() {
    // Get input values
    let loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
    let interestRateValue = parseFloat(document.getElementById("interest-rate").value);
    let monthsToPayValue = parseFloat(document.getElementById("months-to-pay").value);

    // Input validation
    if (isNaN(loanAmountValue) || isNaN(interestRateValue) || isNaN(monthsToPayValue)) {
        document.getElementById("payment").innerHTML = "Please enter valid numeric values.";
        return;
    }

    // Calculate monthly interest
    let interest = (loanAmountValue * (interestRateValue / 12) * 0.01) / monthsToPayValue;

    // Calculate monthly payment
    let monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    // Display result with currency symbol
    document.getElementById("payment").innerHTML = `Monthly Payment: Rs ${monthlyPayment}`;
}

