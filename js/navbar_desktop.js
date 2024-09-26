// Selecting elements specific to the desktop version
const desktopMenuWrap = document.querySelector(".d_nav-menu-wrap"); // Desktop trigger (always visible)
const desktopNavMenu = document.querySelector(".d_nav-menu"); // Desktop menu (grows and appears on hover)
const navLinksDesktop = document.querySelectorAll(".d_nav-link"); // Desktop nav links
const desktopMenuArrow = document.querySelector(".d_menu-arrow"); // Unique class for desktop arrow

// Timeline for controlling animations (desktop)
const navTimelineDesktop = gsap.timeline({ paused: true }); // Animation for desktop nav menu

// Animate desktopNavMenu growing from top-right corner and then animate links
navTimelineDesktop
  .fromTo(
    desktopNavMenu, // This is the menu that grows and appears
    {
      scaleX: 0, // Start with 0 width
      scaleY: 0, // Start with 0 height
      transformOrigin: "100% 0%", // Grow from top-right corner
      display: "none", // Hidden initially
      opacity: 0, // Invisible initially
    },
    {
      duration: 0.2, // Quick appearance of the menu
      scaleX: 1, // Full width
      scaleY: 1, // Full height
      display: "block", // Set display to block when visible
      opacity: 1, // Fully visible
    }
  )
  .to(navLinksDesktop, { duration: 0.1, opacity: 1, stagger: 0.05 }, "-=0.3"); // Staggered fade-in for nav links

// Timeline for the arrow flip (desktop)
const arrowFlipTimeline = gsap.timeline({ paused: true });

// Arrow flip animation on hover (desktop)
arrowFlipTimeline.to(desktopMenuArrow, {
  duration: 0.3, // Duration of the flip
  rotationY: 180, // 180-degree flip on the Y-axis
  transformOrigin: "50% 50%", // Origin at the center of the arrow for a natural flip
  ease: "power2.inOut", // Smooth easing
});

// Desktop-specific behavior (hover to open/close menu)
let menuOpen = false; // Flag to track if the menu is open

// Hover behavior for desktop navigation
desktopMenuWrap.addEventListener("mouseenter", () => {
  // Play the arrow flip animation
  arrowFlipTimeline.play();

  if (!menuOpen) {
    // Play the menu expansion animation when hovering over the wrap
    navTimelineDesktop.play();
    menuOpen = true;
  }
});

desktopMenuWrap.addEventListener("mouseleave", () => {
  // Reverse the arrow flip animation
  arrowFlipTimeline.reverse();

  if (menuOpen) {
    // Reverse the menu animation when the mouse leaves
    navTimelineDesktop.reverse();
    menuOpen = false;
  }
});
