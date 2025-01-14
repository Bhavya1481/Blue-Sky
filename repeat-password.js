const form = document.getElementById('repeatPasswordForm');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Check if passwords match
    if (password.value === repeatPassword.value) {
        message.style.color = 'green';
        message.textContent = 'Passwords match. Account created successfully!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Passwords do not match. Please try again.';
    }
});
