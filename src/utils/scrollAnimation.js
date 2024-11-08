export function addScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    });
  
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));
  }