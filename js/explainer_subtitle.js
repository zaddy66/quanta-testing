// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation for .experiment_subtitle-container elements
const subtitleElements = document.querySelectorAll(
  ".experiment_subtitle-container"
);

subtitleElements.forEach((element) => {
  gsap.fromTo(
    element,
    {
      scale: 0, // Initial scale
      x: "50%", // Initial x position
      y: "50%", // Initial y position
    },
    {
      scale: 1, // Final scale
      x: "0%", // Final x position
      y: "0%", // Final y position
      duration: 1, // Animation duration
      ease: "power2.out", // Smooth easing
      scrollTrigger: {
        trigger: element, // Trigger when the element enters the viewport
        start: "top 95%", // Start animation when the top of the element reaches 60% of the viewport
        toggleActions: "play reverse play reverse", // Play forward on entering, reverse on leaving
      },
    }
  );
});
