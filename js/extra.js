function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const sectionOffsetTop = section.offsetTop - navbarHeight - 10; // 10px por encima de la sección
  window.scrollTo({
    top: sectionOffsetTop,
    behavior: 'smooth'
  });
}