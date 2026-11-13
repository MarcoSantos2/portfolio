export function observeSectionReveals() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('section-revealed');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px 24px 0px' });

  for (const section of document.querySelectorAll('#main [data-reveal]')) {
    // Leave content in the initial viewport ready to read, including on deep links.
    if (section.getBoundingClientRect().top >= window.innerHeight) observer.observe(section);
  }

  return () => observer.disconnect();
}
