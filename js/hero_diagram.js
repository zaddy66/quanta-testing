document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".hover-box");
  
    boxes.forEach(function (box) {
      const infoBox = box.querySelector(".info-box"); // Select the child element with class 'info-box'
  
      // Set the initial state using GSAP's set method
      gsap.set(infoBox, {
        width: "0%",
        opacity: 0,
        x: "0%", // Using GSAP's 'x' property for translation
      });
  
      // Define mouse enter animation
      box.addEventListener("mouseenter", function () {
        // Change z-index of the hovered .hover-box
        gsap.set(box, { zIndex: 2 }); // Set z-index to 2 when hovered
  
        // Animate infoBox to visible state with delay on opacity
        gsap.to(infoBox, {
          duration: 0.1, // Duration for opacity animation
          opacity: 1,
  
          ease: "power1.out", // Ease function for smooth animation
        });
  
        // Animate infoBox width
        gsap.to(infoBox, {
          duration: 0.1, // Duration for width and transform animation
          width: "auto",
          ease: "power2.out", // Ease function for smooth animation
        });
      });
  
      // Define mouse leave animation outside of mouse enter
      box.addEventListener("mouseleave", function () {
        // Reset z-index of the .hover-box back to default (e.g., 0)
        gsap.set(box, { zIndex: 1 }); // Reset z-index when mouse leaves
  
        // Then animate infoBox back to hidden state
        gsap.to(infoBox, {
          duration: 0.1, // Duration for opacity animation
          opacity: 0,
          delay: 0, // No delay on mouse leave
          ease: "none", // Ease function for smooth animation
        });
  
        gsap.to(infoBox, {
          duration: 0.1, // Duration for width and transform animation
          width: "0vw",
          ease: "none", // Ease function for smooth animation
        });
      });
    });
  });
  