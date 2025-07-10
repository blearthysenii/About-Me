// Handle menu clicks to show only selected section
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add active to clicked link
        link.classList.add('active');

        // Get target section ID from href
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Show target section
        if(targetSection) {
            targetSection.classList.add('active');
        }

        // Scroll to top for better UX
        window.scrollTo(0,0);
    });
});

// Contact form code (optional)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // You can add your form submit logic here

    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';

    form.reset();
});
