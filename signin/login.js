// Get the form element
const form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the values of email and password inputs
    const email = form.email.value;
    const password = form.password.value;

    // Call the authentication function with email and password
    const authenticated = authentication(email, password);

    // Check if authentication is successful
    if (authenticated) {
        // Redirect to the logout.html page if authenticated
        window.location.href = "logout.html";
    } else {
        // Show an alert for invalid email/password
        alert("Invalid Email/Password");
    }
});

// Function for checking email and password
function authentication(email, password) {
    // Check if email and password match a predefined value
    
    if (email === "email@example.com" && password === "123456" || email === "roshaan.rashid.r50@gmail.com" && password === "654321") {
        // Return true if authentication is successful
        return true;
    }

    else {
        // Return false if authentication fails
        return false;
    }
}