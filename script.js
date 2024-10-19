document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chat-button');
    const chatBox = document.getElementById('chat-box');
    const closeChatButton = document.getElementById('close-chat');

    chatButton.addEventListener('click', () => {
        chatBox.style.display = 'flex'; // Show the chat box
    });

    closeChatButton.addEventListener('click', () => {
        chatBox.style.display = 'none'; // Hide the chat box
    });
});

