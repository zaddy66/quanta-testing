window.onload = function () {
    console.log("Window loaded, starting script...");
  
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
  
    gsap.set("#container-stretch", { alpha: 1 });
  
    // Function to split text into spans
    function splitTextToSpans(element) {
      if (!element) {
        console.error("Element not found!");
        return [];
      }
  
      const text = element.textContent;
      element.textContent = "";
      const words = text.split(" ");
  
      // const lastDotIndex = text.lastIndexOf("."); // Ãndice do Ãºltimo ponto
      let globalIndex = 0; // Contador global para rastrear o Ã­ndice no texto completo
  
      words.forEach((word) => {
        const wordDiv = document.createElement("div");
        wordDiv.style.display = "inline-block";
        wordDiv.style.whiteSpace = "nowrap";
  
        const characters = word.split("");
  
        characters.forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          span.style.transformOrigin = "top";
  
          //   if (globalIndex === lastDotIndex && char === ".") {
          //  span.classList.add("black-hole_text-dot");
          //  }
  
          wordDiv.appendChild(span);
          globalIndex++; // Incrementa o Ã­ndice global apÃ³s cada caractere
        });
  
        element.appendChild(wordDiv);
        element.appendChild(document.createTextNode("\u00A0")); // EspaÃ§o entre as palavras
        globalIndex++; // Incrementa para o espaÃ§o entre as palavras
      });
  
      return element.querySelectorAll("span");
    }
  
    const txtElement = document.querySelector("#txt1");
    console.log("Text element found: ", txtElement); // Debugging log
    const chars = splitTextToSpans(txtElement); // Split the text and get all the spans
  
    if (chars.length === 0) {
      console.warn("No characters to animate!"); // Debugging log
      return;
    }
  
    // Calculate the center X position of the paragraph
    const paragraphCenterX = txtElement.offsetWidth / 2;
  
    // Convert the NodeList to an array
    const charArray = Array.from(chars);
  
    // Reverse the array to start animation from the last letter
    charArray.reverse();
  
    // Maximum values for Y and scaleY
    const maxY = 1500; // Target value for Y by the end of the scroll
    const maxScaleY = 1500; // Target value for scaleY by the end of the scroll
  
    // Select the black-hole_video element
    const blackHoleVideo = document.querySelector(".black-hole_video");
  
    // Create a timeline to sequence the scaling and opacity animations
    const blackHoleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#container-stretch", // Trigger when the container is in view
        start: "top top", // Start when the top of the container hits the top of the viewport
        end: "95% bottom", // End when the scroll is finished
        scrub: 1, // Smooth scrubbing so it scales gradually
        markers: false, // Optional: set true to visualize the trigger points for debugging
      },
    });
  
    // First, add the scaling animation
    blackHoleTimeline.to(blackHoleVideo, {
      scale: 5,
      y: "100%",
      ease: "none", // No easing to keep scaling tied to scroll
      duration: 3, // Adjust this as per the scaling duration you want
    });
  
    // Then, add the opacity animation, starting right after the scaling
    blackHoleTimeline.to(
      blackHoleVideo,
      {
        opacity: 0,
        ease: "none",
        duration: 1, // The opacity transition duration is set to 1 second
      },
      "-=0.5"
    ); // The "+=0" ensures the opacity starts immediately after the scaling
  
    // Create a timeline for the text sucking effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container-stretch", // Trigger the animation when the container is in view
        start: "top 5%", // Start animation when the top of the container hits the top of the viewport
        end: "95% bottom", // Adjust this value to control the scroll distance and animation speed
        scrub: 2, // Smooth scrubbing, controls the speed with scroll
        markers: false, // Set to true to visualize the trigger points (for debugging)
        onEnter: () => console.log("Animation started (onEnter)"), // Log when animation starts
        onLeave: () => console.log("Animation ended (onLeave)"), // Log when animation ends
        onUpdate: (self) => {
          console.log("Animation progress:", self.progress.toFixed(3)); // Log animation progress
        },
      },
    });
  
    // Independent speed controls
    const dotSpeed = 2; // Speed for dots
    const letterSpeed = 5; // Speed for letters
  
    //dot animation here
    tl.to(
      ".black-hole_text-dot",
      {
        duration: dotSpeed, // Independent speed for dots
        y: 100,
        scaleY: 3,
        opacity: 0, // Fades out
        ease: "none",
      }
      // index * 0.09
    );
  
    // Animate each letter being sucked
    charArray.forEach(function (elem, index) {
      // If it's full stop, apply specific animation
      // if (elem.classList.contains("black-hole_text-dot")) {
      //   tl.to(
      //     elem,
      //     {
      //       duration: dotSpeed, // Independent speed for dots
      //       y: 5,
      //       scaleY: 5,
      //       opacity: 0, // Fades out
      //       ease: "none",
      //     },
      //     index * 0.09
      //   );
      //   return;
      // }
  
      // Get bounding box position using getBoundingClientRect for better accuracy
      const elemRect = elem.getBoundingClientRect();
      const parentRect = elem.parentElement.getBoundingClientRect();
  
      // Calculate center positions
      const elemCenterX = elemRect.left + elemRect.width / 2;
      const parentCenterX = parentRect.left + parentRect.width / 2;
  
      // Determine the distance from center of parent
      const distanceToCenter = paragraphCenterX - elemCenterX;
  
      // Calculate offset
      const moveX = distanceToCenter * 0.1;
  
      // Animate other elements
      tl.to(
        elem,
        {
          duration: letterSpeed, // Independent speed for letters
          x: moveX, // Apply calculated X movement
          y: 10,
          scaleY: 10,
          opacity: 0, // Fade out
          ease: "power2.inOut",
        },
        index * 0.2 // Staggering based on index
      );
    });
  
    console.log("Animation setup complete."); // Debugging log
  
    // Refresh ScrollTrigger to recalculate trigger positions
    ScrollTrigger.refresh();
  
    // Also refresh on window resize to account for any changes in layout
    window.addEventListener("resize", function () {
      ScrollTrigger.refresh();
    });
  };
  