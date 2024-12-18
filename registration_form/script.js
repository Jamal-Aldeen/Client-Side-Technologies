document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    let isValid = true;

    // Username validation
    const username = document.getElementById("username").value;
    const usernameError = document.getElementById("usernameError");
    if (!/^[a-zA-Z]{5,20}$/.test(username)) {
        usernameError.textContent = "Username must be 5-20 letters only.";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (!/(?=.*[A-Z]).{0,8}$/.test(password)) {
        passwordError.textContent = "Password must be 0-8 characters with at least one uppercase letter.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Phone validation
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    if (!/^(011|012|010|015)\d{8}$/.test(phone)) {
        phoneError.textContent = "Phone number must start with 011, 012, 010, or 015 and be 11 digits.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Language validation
    const languages = document.querySelectorAll('input[name="languages"]:checked');
    const languagesError = document.getElementById("languagesError");
    if (languages.length < 2) {
        languagesError.textContent = "Select at least 2 languages.";
        isValid = false;
    } else {
        languagesError.textContent = "";
    }

    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    const genderError = document.getElementById("genderError");
    if (!gender) {
        genderError.textContent = "Select your gender.";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    // If all validations pass, submit the form
    if (isValid) {
        this.submit();
    }
});
