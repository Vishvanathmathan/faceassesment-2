document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    // Dummy credentials for authentication
    const validUsername = "user";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        errorDiv.textContent = "";
        window.location.href = 'portal.html';
    } else {
        errorDiv.textContent = "Invalid username or password.";
    }
});