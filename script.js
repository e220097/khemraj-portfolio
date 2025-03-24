// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Resume download functionality
document.querySelector('a[href="resume.pdf"]').addEventListener('click', function() {
    alert('Downloading Resume...');
});
