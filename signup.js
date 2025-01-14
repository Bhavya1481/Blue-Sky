document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (name && email && username && password) {
        alert("Sign Up Successful! Redirecting to Login Page...");
        window.location.href = "login.html";
    } else {
        alert("Please fill in all fields.");
    }
});
