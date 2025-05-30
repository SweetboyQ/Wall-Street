// Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    //event.preventDefault();

    const name = this.querySelector("input[type='text']").value.trim();
    const email = this.querySelector("input[type='email']").value.trim();
    const message = this.querySelector("textarea").value.trim();

    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return;
    }

    alert("Thank you for reaching out! We'll get back to you soon.");
    this.reset();
});


// Back to Top Button Logic
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }

    // Scroll animations for sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }
    });
});

// Mobile Menu Toggle
/*const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
});*/


/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/Wall-Street/sw.js')

        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("nav-menu");

        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            hamburger.classList.toggle("active");
});
        .then(reg => console.log("Service Worker registered"))
        .catch(err => console.log("Service Worker failed", err));
    });
}*/

window.addEventListener('load', () => {
    navigator.serviceWorker.register('/Wall-Street/sw.js')
    
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburger.classList.toggle("active");
    });
});

// Close menu when a nav link is clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      hamburger.classList.remove('active');
    });
});
  