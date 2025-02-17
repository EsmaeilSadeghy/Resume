// Select header section for sticky effect
const header = document.querySelector(".h_section");
// Store initial position of the header
const stickyOffset = header.offsetTop;

// Event listener for scroll to toggle 'sticky' class
window.onscroll = () => {
    // Add 'sticky' class when pageYOffset exceeds initial header offset
    header.classList.toggle("sticky", window.pageYOffset > stickyOffset);
};

// Select hamburger menu button and navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

// Toggle the hamburger menu open/close on button click
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open"); // Change button appearance
    navMenu.classList.toggle("show"); // Show or hide navigation menu
});

// Modal elements: modal itself, open button, and close button
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const closeBtn = document.querySelector(".close");

// Show modal when clicking the open button
btn.onclick = () => modal.style.display = "block";

// Hide modal when clicking the close button
closeBtn.onclick = () => modal.style.display = "none";

// Close modal when clicking outside of it
window.onclick = (event) => {
    if (event.target === modal) modal.style.display = "none";
};