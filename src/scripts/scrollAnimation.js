document.addEventListener('DOMContentLoaded', () => {
  const animatedSections = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  animatedSections.forEach(section => observer.observe(section));

});