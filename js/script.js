// Smooth scroll for navbar links
const links = document.querySelectorAll('.navbar-links a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form submission (demo only)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for contacting us! We will get back to you soon.';
    this.reset();
});

// Semester box click handler
document.querySelectorAll('.semester-box').forEach(box => {
    box.addEventListener('click', function () {
        const sem = this.getAttribute('data-sem');
        if (sem) {
            window.location.href = `semesters/semester${sem}.html`;
        }
    });
});