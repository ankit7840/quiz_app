document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("loginContainer");
    const signupContainer = document.getElementById("signupContainer");

    // Function to toggle between login and signup forms
    function showLoginForm() {
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
    }

    function showSignupForm() {
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";
    }

    // Attach event listeners
    const loginForm = createLoginForm();
    const signupForm = createSignupForm();

    showLoginForm(); // Show login form by default

    // Append forms to containers
    loginContainer.appendChild(loginForm);
    signupContainer.appendChild(signupForm);
});

// Function to create the login form
function createLoginForm() {
    const form = document.createElement("form");
    form.id = "loginForm";
    form.innerHTML = `
        <h2>Login</h2>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <button type="button" onclick="login()">Login</button>
    `;
    return form;
}

// Function to create the signup form
function createSignupForm() {
    const form = document.createElement("form");
    form.id = "signupForm";
    form.innerHTML = `
        <h2>Sign Up</h2>
        <label for="newUsername">Username:</label>
        <input type="text" id="newUsername" name="newUsername" required>

        <label for="newPassword">Password:</label>
        <input type="password" id="newPassword" name="newPassword" required>

        <button type="button" onclick="signup()">Sign Up</button>
    `;
    return form;
}

// Function to simulate login (replace with actual login logic)
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate login logic (replace with actual API call)
    if (username === "demo" && password === "password") {
        alert("Login successful!");
        // Redirect to the profile page or perform other actions
        window.location.href = '/profile';
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Function to simulate signup (replace with actual signup logic)
function signup() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Simulate signup logic (replace with actual API call)
    alert("Signup functionality not implemented. Replace this with your signup logic.");
}
