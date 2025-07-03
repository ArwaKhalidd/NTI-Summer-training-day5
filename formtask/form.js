
function handleSubmit() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message');


    message.textContent = '';
    message.className = '';

    if (!name || !age || !email) {
        message.textContent = 'All fields are required!';
        message.className = 'error';
        return;
    }

    if (isNaN(age) || age <= 0) {
        message.textContent = 'Please enter a valid age.';
        message.className = 'error';
        return;
    }

    if (!validateEmail(email)) {
        message.textContent = 'Please enter a valid email address.';
        message.className = 'error';
        return;
    }

    message.textContent = `User Added: ${name}, ${age}, ${email}`;
    message.className = 'success';
}

function validateEmail(email) {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function clearMessage() {
    document.getElementById('message').textContent = '';
    document.getElementById('message').className = '';
}
