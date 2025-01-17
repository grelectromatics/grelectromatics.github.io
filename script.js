// JavaScript for modal chat popup
const chatButton = document.getElementById('chatButton');
const chatModal = document.getElementById('chatModal');
const closeChatBtn = document.getElementById('closeChatBtn');

// Open Chat Modal
chatButton.onclick = function() {
    chatModal.style.display = "flex";
}

// Close Chat Modal
closeChatBtn.onclick = function() {
    chatModal.style.display = "none";
}

// Close Chat Modal when clicked outside
window.onclick = function(event) {
    if (event.target === chatModal) {
        chatModal.style.display = "none";
    }
}

// Hover effect on logo
const logo = document.getElementById('logo');
logo.onmouseover = function() {
    logo.style.transform = 'scale(1.2)';
}
logo.onmouseout = function() {
    logo.style.transform = 'scale(1)';
}
