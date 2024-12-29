// Add a confirmation dialog before form submission
document.getElementById("quoteForm").addEventListener("submit", function (event) {
    const isConfirmed = confirm(
      "Are you sure you want to submit this form? Please check your details."
    );
    if (!isConfirmed) {
      event.preventDefault();
    }
  });