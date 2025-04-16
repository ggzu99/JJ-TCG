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
  