document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get target section id
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript to add 'active' class based on current URL or section
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to clicked link
            this.classList.add('active');
        });
    });

    const loadingText = "./adyaResume";
    const loadingElement = document.getElementById('loading-text');

    // Clear existing text
    loadingElement.textContent = "";

    // Simulate typing effect
    let index = 0;
    function typeWriter() {
        if (index < loadingText.length) {
            loadingElement.textContent += loadingText.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust typing speed here
        } else {
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
                document.querySelector('.content').style.display = 'block';
            }, 400); // Adjust delay before hiding loading screen
        }
    }
    
    typeWriter();

    //Load section based on selected
    const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
    const sections = document.querySelectorAll('.section-content');

    // Function to show the selected section and hide others
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = (section.id === sectionId) ? 'block' : 'none';
        });

        // Highlight the selected link
        sidebarLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
        });
    }

    // Set default section to "About Me"
    showSection('about');

    // Add click event listeners to sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});
