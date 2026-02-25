const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const form = document.getElementById('lead-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been sent. Our team will contact you shortly.');
    form.reset();
});