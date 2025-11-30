function scrollToSection(id) {
document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


// Contact form behavior
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
e.preventDefault();
alert('Your message has been sent!');
form.reset();
});