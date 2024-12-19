document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var phone = document.getElementById('phone');
    var gender = document.querySelector('input[name="gender"]:checked');
    var languages = document.querySelectorAll('input[name="languages"]:checked');
    
    var valid = true; 
    
    var usernameRegex = /^[a-zA-Z]{5,20}$/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var passwordRegex = /^(?=.*[A-Z]).{1,8}$/;
    var phoneRegex = /^(010|011|012|015)\d{8}$/;

    var errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach((msg) => msg.style.display = 'none');
    
    if (!usernameRegex.test(username.value)) {
        document.getElementById('usernameError').textContent = 'Username must be between 5-20 characters and cannot contain numbers.';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    if (!passwordRegex.test(password.value)) {
        document.getElementById('passwordError').textContent = 'Password must be a maximum of 8 characters and include at least one uppercase letter.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    if (!phoneRegex.test(phone.value)) {
        document.getElementById('phoneError').textContent = 'Phone number must start with 010, 011, 012, or 015 and be 11 digits long.';
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    }

    if (languages.length < 2) {
        document.getElementById('languagesError').textContent = 'Please select at least two languages.';
        document.getElementById('languagesError').style.display = 'block';
        valid = false;
    }

    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        document.getElementById('genderError').style.display = 'block';
        valid = false;
    }

    if (valid) {
        window.location.href = `server.html?username=${encodeURIComponent(username.value)}`;
    }
});
