document.getElementById('tipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the normal way

    // Step 1: Get the bill subtotal value
    const bill = parseFloat(document.getElementById('bill').value);

    // Step 2: Get the selected tip percentage
    let tipPercentage;
    const tipRadios = document.getElementsByName('tip');
    for (let i = 0; i < tipRadios.length; i++) {
        if (tipRadios[i].checked) {
            tipPercentage = parseInt(tipRadios[i].value);
            break;
        }
    }

    // Step 3: Validate inputs
    if (isNaN(bill) || bill <= 0) {
        alert('Please enter a valid bill amount.');
        return;
    }
    if (!tipPercentage) {
        alert('Please select a tip percentage.');
        return;
    }

    // Step 4: Calculate the tip and total
    const tipAmount = (bill * tipPercentage) / 100;
    const totalAmount = bill + tipAmount;

    // Step 5: Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Bill subtotal: $${bill.toFixed(2)}</p>
        <p>Tip (${tipPercentage}%): $${tipAmount.toFixed(2)}</p>
        <p>Total: $${totalAmount.toFixed(2)}</p>
    `;
});
