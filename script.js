// Hide popup when "I like Cookies" is clicked
function acceptCookies() {
  const overlay = document.getElementById("cookieOverlay");
  overlay.classList.add("hidden"); // Add 'hidden' class to hide it
}

// Hide popup when close button (×) is clicked
function closePopup() {
  const overlay = document.getElementById("cookieOverlay");
  overlay.classList.add("hidden");
}

// Show popup when page loads (if not hidden)
window.addEventListener("DOMContentLoaded", function () {
  // Popup will show by default (no 'hidden' class)
});

// Clear localStorage and show popup again
function resetConsent() {
  localStorage.removeItem('cookieConsent');  // Delete the saved consent
  document.getElementById('cookieOverlay').classList.remove('hidden');  // Show popup
}


