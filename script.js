// JavaScript for chat popup modal
const chatButton = document.getElementById('chatButton');
const chatModal = document.getElementById('chatModal');
const closeChatBtn = document.getElementById('closeChatBtn');

// Open the chat modal when the chat button is clicked
chatButton.onclick = function() {
    chatModal.style.display = "flex";
}

// Close the chat modal when the close button is clicked
closeChatBtn.onclick = function() {
    chatModal.style.display = "none";
}

// Close the chat modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target === chatModal) {
        chatModal.style.display = "none";
    }
}

// Logo animation on hover
const logo = document.getElementById('logo');
logo.onmouseover = function() {
    logo.style.transform = 'scale(1.2)';
}

logo.onmouseout = function() {
    logo.style.transform = 'scale(1)';
}
