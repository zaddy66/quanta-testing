window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    // Timelines for desktop images
  
    gsap.to(".img_johnwheeler.is--desktop", {
      marginRight: "-60%", // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img_johnwheeler.is--desktop", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 60% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    // Staggered animation for 3 images
    gsap.to(".space-time-img_item", {
      y: -20,
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      stagger: 0.3, // Delay between each image's animation
      scrollTrigger: {
        trigger: ".space-time-img_item", // The element to trigger the animation
        start: "top 80%", // Start when the top of the first image hits 80% of the viewport
        end: "center top", // End when the last image leaves the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    gsap.to(".img-karen", {
      marginLeft: "0%", // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img-karen", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 60% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    gsap.to(".img_twofaces.is--desktop", {
      marginRight: "-60%", // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img_twofaces.is--desktop", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 60% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    gsap.to(".img_crumbles1.is--desktop", {
      marginRight: "-55%", // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img_crumbles1.is--desktop", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 80% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    gsap.to(".img_paleophysics.is--desktop", {
      x: "-15%", // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img_paleophysics.is--desktop", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 60% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    gsap.to(".img_paleo1.is--desktop", {
      marginRight: "-55%", // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img_paleo1.is--desktop", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 60% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    gsap.to(".img-boyle", {
      marginLeft: "-10%", // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img-boyle", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 60% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    // Timelines for mobile images
  
    gsap.to(".img_johnwheeler.is--mobile", {
      marginRight: "-1.5rem", // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img_johnwheeler.is--mobile", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 60% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    gsap.to(".karen-img_mobile", {
      x: 0, // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".karen-img_mobile", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 60% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    gsap.to(".img-twofaces_mobile", {
      x: 0, // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img-twofaces_mobile", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 60% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  
    gsap.to(".img_crumbles1.is--tablet", {
      marginRight: "-50%", // Target state when in view
      opacity: 1,
      ease: "power4.out", // Easing for the animation
      duration: 2, // Duration of the animation
      scrollTrigger: {
        trigger: ".img_crumbles1.is--tablet", // The element to trigger the animation
        start: "top 60%", // Start when the top of the element hits 80% of the viewport
        end: "center top", // End when the bottom of the element leaves the top of the viewport
        toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
      },
    });
  });
  