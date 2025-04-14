const formContainer = document.getElementById("signup-form-container");
const form = document.getElementById("signup-form");
const emailDetail = document.getElementById("email");
const errorMessage = document.getElementById("email-error");
const submitButton = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");
const dismissButton = document.getElementById("dismiss-button");

// Validate email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show error state
function showError() {
  emailDetail.classList.add("error");
  errorMessage.style.display = "block";
}

// Hide error state
function hideError() {
  emailDetail.classList.remove("error");
  errorMessage.style.display = "none";
}

//Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailDetail.value.trim();

  if (!isValidEmail(email)) {
    showError();
    return;
  }
});

// Real-time validation
emailDetail.addEventListener("input", () => {
  if (emailDetail.classList.contains("error")) {
    hideError();
  }
});

//Dismiss success message
dismissButton.addEventListener("click", () => {
  successMessage.style.display = "none";
  formContainer.style.display = "flex";
  form.reset();
});

//Submit button
submitButton.addEventListener("click", () => {
  const email = emailDetail.value.trim();

  if (!isValidEmail(email)) {
    showError();
  } else if (isValidEmail) {
    formContainer.style.display = "none";
    successMessage.style.display = "block";
  }
});
