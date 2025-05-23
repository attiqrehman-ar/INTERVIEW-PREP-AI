// helpers/validators.js

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePassword = (password) => {
    // Example rule: at least 6 characters
    return password && password.length >= 8;
  };
  