// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Modal Logic
var modal = document.getElementById("modal");
var openModalButton = document.getElementById("openModalButton");
var closeButton = document.getElementById("closeButton");

// Open Modal
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// Close Modal when clicking 'X'
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Close Modal when clicking outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
