// Selecting the elements specific to the mobile version
const menuButton = document.querySelector(".m_nav-button"); // Mobile button to trigger menu
const menuWrap = document.querySelector(".m_nav-menu-wrap"); // Mobile menu container
const mobileMenuArrow = document.querySelector(".m_menu-arrow"); // Unique class for mobile arrow
const navTextToc = document.querySelector(".m_navtext-toc"); // Mobile nav text
const navTextTocSubtext = document.querySelector(".m_navtext-toc-subtext"); // Mobile nav subtext
const navLinks = document.querySelectorAll(".m_nav-link"); // Mobile nav links

// Initially hide the menu and nav elements with GSAP
gsap.set(menuWrap, { autoAlpha: 0, y: -50 }); // Menu starts hidden and above
gsap.set(menuButton, { x: "50%" }); // Button initially offset 50% to the right
gsap.set([navTextToc, navTextTocSubtext], { autoAlpha: 0 }); // Text and subtext hidden
gsap.set(navLinks, { autoAlpha: 0 }); // Nav links hidden
gsap.set(mobileMenuArrow, { x: "-50%" }); // Arrow initially offset to the left

let menuVisible = false; // Menu visibility flag

// Create the timeline for opening and closing the menu
const menuTimeline = gsap.timeline({ paused: true, reversed: true }); // Start paused and reversed

// Define the open/close animation sequence
menuTimeline
  .to(menuWrap, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" })
  .to(menuButton, { x: "0%", duration: 0.1, ease: "power2.out" }, 0)
  .to(
    mobileMenuArrow,
    { rotateY: 180, x: "-50%", duration: 0.1, ease: "power2.out" },
    0
  )
  .to(
    [navTextToc, navTextTocSubtext],
    { autoAlpha: 1, duration: 0.1, ease: "power2.out" },
    ">"
  )
  .to(
    navLinks,
    { autoAlpha: 1, duration: 0.1, ease: "power2.out", stagger: 0.1 },
    ">"
  );

// Function to toggle the menu
function toggleMenu() {
  menuTimeline.reversed() ? menuTimeline.play() : menuTimeline.reverse();
  menuVisible = !menuVisible;
}

// Event listener for the menu button click (opens or closes the menu)
menuButton.addEventListener("click", toggleMenu);

// Close the menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuTimeline.reverse(); // Reverse the timeline to close the menu
    menuVisible = false;
  });
});
