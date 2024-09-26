// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select the paragraph and constellation elements inside .section_explainer-quote
const paragraph = document.querySelector(".section_explainer-quote p");
const leftConstellation = document.querySelector(
  ".constellation-wrapper.is-left"
);
const rightConstellation = document.querySelector(
  ".constellation-wrapper.is-right"
);

gsap.fromTo(
  paragraph,
  { opacity: 0 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: paragraph,
      start: "top 90%", // Start when the top of the paragraph enters the viewport
      end: "top 50%", // End at 33% of the viewport (66% window for transition)
      scrub: true, // Smooth transition as you scroll
    },
  }
);

// Move left constellation when it reaches 60% of the viewport
gsap.fromTo(
  leftConstellation,
  { x: "-100%", y: "50%" }, // Initial position
  {
    x: "0%",
    y: "0%", // End position
    duration: 1.5, // Set animation duration
    ease: "power2.out", // Smooth easing for the animation
    scrollTrigger: {
      trigger: paragraph, // Trigger when the left constellation enters the viewport
      start: "top 60%", // Animation starts when the top of the constellation reaches 80% of the viewport
    },
  }
);

// Move right constellation when it reaches 60% of the viewport
gsap.fromTo(
  rightConstellation,
  { x: "100%", y: "50%" }, // Initial position
  {
    x: "0%",
    y: "0%", // End position
    duration: 1, // Set animation duration
    ease: "power2.out", // Smooth easing for the animation
    scrollTrigger: {
      trigger: paragraph, // Trigger when the right constellation enters the viewport
      start: "top 60%", // Animation starts when the top of the constellation reaches 80% of the viewport
    },
  }
);
