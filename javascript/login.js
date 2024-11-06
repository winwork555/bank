// Function to handle language selection
function selectLanguage(lang) {
    document.getElementById("language-selection").style.display = "none";
    document.getElementById("login-form").style.display = "block";

    const greetings = {
        'vi': 'Chào mừng! Vui lòng đăng nhập.',
        'en': 'Welcome! Please log in.',
        'km': 'សូមស្វាគមន៍! សូមចូលទៅគណនីរបស់អ្នក។'
    };

    // Store the selected language in sessionStorage
    sessionStorage.setItem("selectedLanguage", lang);

    // Update greeting message based on selected language
    document.getElementById("greeting").innerText = greetings[lang] || greetings['en'];
}

// Function to validate login and redirect based on selected language
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUsername = "VB9111953";
    const correctPassword = "31101922";

    if (username === correctUsername && password === correctPassword) {
        // Store the login status in sessionStorage
        sessionStorage.setItem("loggedIn", "true");

        // Get the selected language from sessionStorage
        const selectedLanguage = sessionStorage.getItem("selectedLanguage");

        // Redirect to the appropriate home page based on selected language
        if (selectedLanguage === 'vi') {
            window.location.href = "html/home.vn.html"; // Redirect to Vietnamese homepage
        } else if (selectedLanguage === 'en') {
            window.location.href = "html/home.en.html"; // Redirect to English homepage
        } else if (selectedLanguage === 'km') {
            window.location.href = "html/home.kh.html"; // Redirect to Khmer homepage
        } else {
            // Default to English if no language is selected
            window.location.href = "html/home.en.html";
        }
    } else {
        // Display error message if login is invalid
        document.getElementById("error-message").innerText = "Invalid username or password.";
    }
}

// Function to toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
