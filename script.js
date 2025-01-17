// Open and close the chat modal
document.getElementById("chatButton").addEventListener("click", function () {
    document.getElementById("chatModal").style.display = "flex";
});

document.getElementById("closeChat").addEventListener("click", function () {
    document.getElementById("chatModal").style.display = "none";
});

// Add smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
