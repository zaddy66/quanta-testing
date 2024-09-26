gsap.registerPlugin(ScrollTrigger);

gsap.to(".experiment_data-blocks.is--1", {
  x: "-250%",
  y: "-25%",
  opacity: 1,
  duration: 1,
  filter: "blur(10px)",
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".section_explainer-experiment.is--3", // The section as the trigger
    start: "top 50%", // Animation starts when the top of the section hits 80% of the viewport
    end: "top 20%", // Animation ends when the top of the section reaches 20%
    scrub: true, // Smooth scrolling effect, syncing animation with scroll
    onEnter: () => console.log("is--1 entered"), // Optional: log when the element enters the view
  },
});

gsap.to(".experiment_data-blocks.is--2", {
  x: "-200%",
  y: "-50%",
  opacity: 1,
  duration: 1,
  scale: 1.5,
  rotate: -10,
  filter: "blur(10px)",
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".section_explainer-experiment.is--3", // The section as the trigger
    start: "top 50%", // Animation starts when the top of the section hits 80% of the viewport
    end: "top 20%", // Animation ends when the top of the section reaches 20%
    scrub: true, // Smooth scrolling effect, syncing animation with scroll
    onEnter: () => console.log("is--2 entered"), // Optional: log when the element enters the view
  },
});

gsap.to(".experiment_data-blocks.is--3", {
  x: "250%",
  y: "-15%",
  opacity: 1,
  duration: 1,
  scale: 1.5,
  rotate: 15,
  filter: "blur(10px)",
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".section_explainer-experiment.is--3", // The section as the trigger
    start: "top 50%", // Animation starts when the top of the section hits 80% of the viewport
    end: "top 20%", // Animation ends when the top of the section reaches 20%
    scrub: true, // Smooth scrolling effect, syncing animation with scroll
    onEnter: () => console.log("is--3 entered"), // Optional: log when the element enters the view
  },
});

gsap.to(".experiment_data-blocks.is--4", {
  x: "200%",
  y: "15%",
  opacity: 1,
  duration: 1,
  scale: 1.25,
  filter: "blur(10px)",
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".section_explainer-experiment.is--3", // The section as the trigger
    start: "top 50%", // Animation starts when the top of the section hits 80% of the viewport
    end: "top 20%", // Animation ends when the top of the section reaches 20%
    scrub: true, // Smooth scrolling effect, syncing animation with scroll
    onEnter: () => console.log("is--4 entered"), // Optional: log when the element enters the view
  },
});

gsap.to(".experiment_data-blocks.is--5", {
  x: "200%",
  y: "30%",
  opacity: 1,
  duration: 1,
  filter: "blur(10px)",
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".section_explainer-experiment.is--3", // The section as the trigger
    start: "top 50%", // Animation starts when the top of the section hits 80% of the viewport
    end: "top 20%", // Animation ends when the top of the section reaches 20%
    scrub: true, // Smooth scrolling effect, syncing animation with scroll
    onEnter: () => console.log("is--5 entered"), // Optional: log when the element enters the view
  },
});
