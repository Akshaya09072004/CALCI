// Basic Calculator functionality
function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);  // Evaluate the expression
    } catch (e) {
        display.value = "Error";  // Display error in case of invalid expression
    }
}

// SI & CI Calculator functionality
function calculateInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const time = parseFloat(document.getElementById("time").value);
    const frequency = parseFloat(document.getElementById("frequency").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid values for Principal, Rate, and Time.");
        return;
    }

    // Calculate Simple Interest
    const simpleInterest = principal * rate * time;
    document.getElementById("simple-interest").textContent = simpleInterest.toFixed(2);

    // Calculate Compound Interest
    let compoundInterest = principal * Math.pow((1 + rate / frequency), (frequency * time)) - principal;
    document.getElementById("compound-interest").textContent = compoundInterest.toFixed(2);
}
