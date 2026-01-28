// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Formulario de contacto
const contactForm = document.querySelector('.contacto-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí conectarías con tu backend o servicio de email
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.reset();
  });
}

// Botones de compra
document.querySelectorAll('.btn-comprar').forEach(btn => {
  btn.addEventListener('click', function() {
    // Aquí conectarías con tu pasarela de pago
    alert('Redirigiendo a pasarela de pago...');
  });
});

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
}

// Google Calendar API setup
// Reemplaza YOUR_CALENDAR_ID con tu ID real de Google Calendar
// Documentación: https://developers.google.com/calendar/api/guides/overview
