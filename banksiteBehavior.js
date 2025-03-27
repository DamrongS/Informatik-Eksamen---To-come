// Add event listeners for all navigation buttons
document.querySelectorAll('.Navigation').forEach(button => {
    button.addEventListener('click', function() {
        const pageId = this.textContent.toLowerCase(); // Assuming the button text matches the page id
        showPage(pageId);
        highlightButton(this);
    });
});

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.classList.remove("active");
    });

    // Show the selected page
    const page = document.getElementById(pageId);
    page.classList.add("active");
}

function highlightButton(activeButton) {
    // Remove 'active-button' class from all buttons
    const buttons = document.querySelectorAll('.Navigation');
    buttons.forEach(button => {
        button.classList.remove('active-button');
    });

    // Add 'active-button' class to the clicked button
    activeButton.classList.add('active-button');
}
