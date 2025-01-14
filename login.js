document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "password") {
        alert("Login Successful!");
        // Redirect or perform further actions
    } else {
        alert("Invalid username or password.");
    }
});
