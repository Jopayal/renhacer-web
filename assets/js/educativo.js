// Tabs de servicios
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const targetTab = this.dataset.tab;
    
    // Remover active de todos
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Activar el seleccionado
    this.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});

// Smooth scroll
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

// Formulario
const formCotizacion = document.querySelector('.form-cotizacion');
if (formCotizacion) {
  formCotizacion.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias! Tu solicitud ha sido enviada. Te contactaremos en menos de 24 horas.');
    this.reset();
  });
}

// Botones de capacitaciones
document.querySelectorAll('.btn-cap').forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.closest('.capacitacion-card');
    const titulo = card.querySelector('h4').textContent;
    alert(`Solicitud de capacitación: ${titulo}\n\nSerás redirigido al formulario de contacto.`);
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
  });
});
