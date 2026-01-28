// Renhacer - enlaces centrales (los completamos cuando me pases tu link oficial)
const RENHACER = {
  whatsappNumber: "", // ejemplo: "56912345678" (sin +)
  agendamientoUrl: "" // ejemplo: "https://tu-link-oficial..."
};

function setLinks() {
  const waEls = document.querySelectorAll("[data-whatsapp]");
  const agEls = document.querySelectorAll("[data-agendar]");

  // WhatsApp
  waEls.forEach(el => {
    if (!RENHACER.whatsappNumber) {
      el.setAttribute("href", "#");
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert("WhatsApp aún no está configurado. En el siguiente paso lo activamos.");
      });
      return;
    }
    const url = `https://wa.me/${RENHACER.whatsappNumber}`;
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Agendamiento
  agEls.forEach(el => {
    if (!RENHACER.agendamientoUrl) {
      el.setAttribute("href", "#");
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Agendamiento aún no está configurado. Pásame tu link y lo conectamos.");
      });
      return;
    }
    el.setAttribute("href", RENHACER.agendamientoUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
}

document.addEventListener("DOMContentLoaded", setLinks);
