const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-inner') && navLinks) {
    navLinks.classList.remove('open');
  }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Message ready to send! Replace this behavior with your own form integration.');
    contactForm.reset();
  });
}
