function checkCredentials(username, password) {
    // Check if surname contains extra spaces or special characters
    if (/[^a-zA-Z\s]/.test(username) || /\s{2,}/.test(username)) {
      console.log("Invalid Name or Password.");
      return;
    }
  
    // Check if password contains spaces or special characters (besides @)
    if (/\s/.test(password) || /[^a-zA-Z0-9@]/.test(password)) {
      console.log("Invalid Name or Password.");
      return;
    }
  
    // If both checks pass, display success message
    console.log("Credentials are valid!");
  }
  
  // Example usage:
  checkCredentials("John Doe", "Pass@123"); // Valid credentials
  checkCredentials("Jane$$Doe", "Invalid Password"); // Invalid credentials
  