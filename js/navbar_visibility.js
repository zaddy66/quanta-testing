function initNavbarVisibility(sectionSelector, navbarSelector) {
    // Select all sections with the specified attribute
    const sections = document.querySelectorAll(sectionSelector);
    const navbar = document.querySelector(navbarSelector);
  
    // Set initial opacity and display for the navbar
    gsap.set(navbar, { opacity: 0, display: "none" });
  
    // Set up an IntersectionObserver to track when any of the sections are in view
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if any section is intersecting
        const isAnySectionIntersecting = entries.some(
          (entry) => entry.isIntersecting
        );
  
        if (isAnySectionIntersecting) {
          // Hide the navbar with a fade-out effect
          gsap.to(navbar, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              navbar.style.display = "none";
            },
          });
        } else {
          // Show the navbar with a fade-in effect
          navbar.style.display = "block"; // Ensure the navbar is visible before fading in
          gsap.to(navbar, { opacity: 1, duration: 0.5 });
        }
      },
      { threshold: 0.0 } // Adjust threshold to control when the navbar should appear
    );
  
    // Observe each section
    sections.forEach((section) => observer.observe(section));
  }
  
  // Initialize the function, passing in the section selector and the navbar selector
  initNavbarVisibility('[data-navbar="hide"]', ".navbar");
  