// GSAP animation setup
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".quote-summary-wrap",
      start: "top bottom",
      end: "top center",
      scrub: true, // Smoothly animate based on scroll position
    },
  })
  .fromTo(
    ".quote-summary-wrap",
    { opacity: 0, filter: "blur(15px)" },
    { opacity: 1, filter: "blur(0px)", duration: 1 }
  );
