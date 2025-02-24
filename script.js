document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode Toggle
    const toggle = document.getElementById("dark-mode-toggle");
    toggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Animate skill bars
    function animateSkills() {
        document.querySelectorAll(".progress").forEach(bar => {
            let width = bar.getAttribute("data-percent");
            bar.style.width = width + "%";
        });
    }

    // Scroll Event to trigger skill animation
    window.addEventListener("scroll", function() {
        let skillsSection = document.getElementById("skills").offsetTop;
        let scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > skillsSection) {
            animateSkills();
        }
    });
});
