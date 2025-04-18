
import * as animeJs from 'animejs';

export const initHeroAnimation = () => {
  animeJs.default({
    targets: '.hero-title',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 1200,
    easing: 'easeOutExpo',
    delay: animeJs.default.stagger(100)
  });

  animeJs.default({
    targets: '.hero-description',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 400
  });
};

export const initSectionAnimations = () => {
  const sections = document.querySelectorAll('.animate-section');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animeJs.default({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            easing: 'easeOutExpo',
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
};

export const initTrapCircleAnimations = () => {
  animeJs.default({
    targets: '.trap-circle-small',
    scale: [0.5, 1],
    opacity: [0, 1],
    duration: 800,
    delay: animeJs.default.stagger(200),
    easing: 'easeOutElastic(1, .5)'
  });
};
