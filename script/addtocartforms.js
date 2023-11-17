function toggleBillingForm() {
    var billingForm = document.querySelector('.billing-form');
    var cardPaymentForm = document.querySelector('.card-payment-form');
    
    if (billingForm.style.display === 'none' || billingForm.style.display === '') {
        billingForm.style.display = 'block';
        cardPaymentForm.style.display = 'none';
    } else {
        billingForm.style.display = 'none';
    }
}

function toggleCardPaymentForm() {
    var cardPaymentForm = document.querySelector('.card-payment-form');
    var billingForm = document.querySelector('.billing-form');

    if (cardPaymentForm.style.display === 'none' || cardPaymentForm.style.display === '') {
        cardPaymentForm.style.display = 'block';
        billingForm.style.display = 'none';
    } else {
        cardPaymentForm.style.display = 'none';
    }
}

function formatCardNumber() {
// Get the input element
var input = document.getElementById('card-number');

// Remove non-numeric characters
var cardNumber = input.value.replace(/\D/g, '');

// Check if the card number exceeds 16 digits
if (cardNumber.length > 16) {
// If so, remove the last digit
cardNumber = cardNumber.slice(0, 16);
}

// Add spaces after every four digits
cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

// Update the input value
input.value = cardNumber;
}

// Get the input element
var cardNumberInput = document.getElementById('card-number');

// Attach the formatCardNumber function to the input's "input" event
cardNumberInput.addEventListener('input', formatCardNumber);

function validateCVV(input) {
    // Get the entered value
    let cvv = input.value;

    // Ensure the length is not more than 3 digits
    if (cvv.length > 3) {
        // If more than 3 digits, truncate the value
        cvv = cvv.slice(0, 3);

        // Update the input value
        input.value = cvv;
    }
}

function validateYear(input) {
    let year = input.value;

    if (year.length > 3) {
        year = year.slice(0, 4);

        input.value = year;
    }
}

function validateMonth(input) {
    let year = input.value;

    if (year.length > 2) {
        year = year.slice(0, 2);

        input.value = year;
    }
}