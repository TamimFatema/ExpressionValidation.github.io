function validateExpression(option) {
    const expression = prompt(`Enter the ${option}:`);
    let isValid = false;

    switch (option) {
        case 'email':
            isValid = validateEmail(expression);
            break;
        case 'phone':
            isValid = validatePhoneNumber(expression);
            break;
        case 'postcode':
            isValid = validatePostCode(expression);
            break;
        // Add more cases for additional options here if needed
        default:
            alert('Invalid option. Please choose a valid option.');
            return;
    }

    if (isValid) {
        displayResult(`Valid ${option}.`);
    } else {
        displayResult(`Invalid ${option}.`);
    }
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${message}</p>`;
}

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const pattern = /^\+?[1-9]\d{1,14}$/;
    return pattern.test(phoneNumber);
}

function validatePostCode(postCode) {
    const pattern = /^\d{4}$/;
    return pattern.test(postCode);
}