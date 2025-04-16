// Animación de entrada (fade-in)
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elementos.forEach(el => observer.observe(el));
});

// Efecto parallax de scroll en imágenes del hero
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const leftImg = document.querySelector(".img-izquierda");
  const rightImg = document.querySelector(".img-derecha");

  if (leftImg && rightImg) {
    leftImg.style.transform = `rotate(-12deg) translateY(${scrollY * 0.15 - 30}px)`;
    rightImg.style.transform = `rotate(12deg) translateY(${scrollY * 0.15 - 30}px)`;
  }
});

const mensajes = [
  "Venta de Sobres, Booster Bundles y Tins con entregas en Santiago.",
  "Este catálogo es solo de muestra. Pedidos por WhatsApp, Instagram o correo.",
  "¡Nuevos productos cada semana! Consulta la sección de novedades."
];

let mensajeIndex = 0;
const mensajeElemento = document.getElementById("hero-mensaje");
const puntos = document.querySelectorAll(".punto");

function mostrarMensaje(index) {
  mensajeElemento.classList.remove("fade-in");
  void mensajeElemento.offsetWidth; // Forzar reflow para reiniciar animación
  mensajeElemento.textContent = mensajes[index];
  mensajeElemento.classList.add("fade-in");

  puntos.forEach((p, i) => p.classList.toggle("activo", i === index));
}

function cambiarMensaje() {
  mensajeIndex = (mensajeIndex + 1) % mensajes.length;
  mostrarMensaje(mensajeIndex);
}

function cambiarMensajeManual(index) {
  mensajeIndex = index;
  mostrarMensaje(index);
  clearInterval(autoCambio); // Reiniciar timer si el usuario hace clic
  autoCambio = setInterval(cambiarMensaje, 8000);
}

mostrarMensaje(mensajeIndex);
let autoCambio = setInterval(cambiarMensaje, 8000);
