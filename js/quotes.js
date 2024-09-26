gsap.registerPlugin(ScrollTrigger);

function timelineQuotes() {
  // Create GSAP timeline for quote animations
  const timelineQuotes = gsap.timeline({
    scrollTrigger: {
      trigger: ".quote-section",
      start: "top top", // Trigger animation earlier (when the quote section comes into view)
      end: "bottom bottom", // Total scroll time to accommodate the entire section
      scrub: 1, // Synchronize animation with scrollbar position
      pin: false, // Pin the section while scrolling, keeping it fixed in place
    },
  });

  // Apply staggered animation to all quotes
  timelineQuotes.fromTo(
    ".quote-box", // Target all quotes with the .quote-box class
    {
      opacity: 0,
      filter: "blur(5px)",
      scale: 0.96,
    },
    {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      duration: 3, // Duration for fade-in
      ease: "none",
      stagger: {
        each: 6, // Stagger start time of each fade-in
        yoyo: true, // Yoyo effect
        repeat: 1,
        repeatDelay: 2, // Adjust as necessary
      },
    }
  );
}

timelineQuotes(); // Call the function to execute the animation
