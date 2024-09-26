// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function createParagraphAnimations(startValues) {
  $(".paragraph-wrapper").each(function () {
    var para = this;

    gsap.to(para, {
      opacity: 1,
      scrollTrigger: {
        trigger: para,
        start: startValues.start1,
        end: startValues.end1,
        scrub: true,
        // markers: true,
      },
    });

    // Text Blur Animation (Leaving Focus)
    gsap.to(para, {
      opacity: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: para,
        start: startValues.start2,
        end: startValues.end2,
        scrub: true,
        // markers: true,
      },
    });
  });
}

function paragraphAnimation(startValues) {
  $(".paragraph-wrapper").each(function () {
    var redItem = $(this).attr("data-video");
    var para = this;

    $("video").each(function () {
      if ($(this).attr("id") === redItem) {
        var vid = this;

        // Video animation
        ScrollTrigger.create({
          trigger: para,
          start: startValues.startVid, //"top center"
          end: startValues.endVid, //"bottom top"
          // markers: true,
          onEnter: () => {
            gsap.to(vid, { opacity: 1, duration: 0.3 });
            if (vid.paused) {
              vid.play();
            }
          },
          onLeave: () => {
            gsap.to(vid, { opacity: 0, duration: 0.3 });
            vid.pause();
            vid.currentTime = 0; // Reset the video to the beginning
          },
          onEnterBack: () => {
            gsap.to(vid, { opacity: 1, duration: 0.3 });
            if (vid.paused) {
              vid.play();
            }
          },
          onLeaveBack: () => {
            gsap.to(vid, { opacity: 0, duration: 0.3 });
            vid.pause();
            vid.currentTime = 0;
          },
        });
      }
    });
  });
}

// paragraphAnimation();

function queryAnimation() {
  const mm = gsap.matchMedia();

  // Set up animations for screens under 992px
  mm.add("(max-width: 991px)", () => {
    let startValues = {
      start1: "top bottom", // Start unblurring when top reaches 90% of viewport
      end1: "top 90%", // Fully unblurred when top reaches 66% of viewport

      start2: "top 40%", // Start unblurring when top reaches 90% of viewport
      end2: "top 30%", // Fully unblurred when top reaches 66% of viewport

      //video triggers
      startVid: "top bottom",
      endVid: "top 45%",
    };

    // Reuse the function for both desktop and mobile, passing different startValues
    createParagraphAnimations(startValues);
    paragraphAnimation(startValues);
  });

  // Set up animations for screens 992px and wider
  mm.add("(min-width: 992px)", () => {
    let startValues = {
      start1: "top 90%", // Start unblurring when top reaches 90% of viewport
      end1: "top 70%", // Fully unblurred when top reaches 66% of viewport

      start2: "bottom 30%", // Start unblurring when top reaches 90% of viewport
      end2: "bottom 10%", // Fully unblurred when top reaches 66% of viewport

      //video triggers
      startVid: "top 60%",
      endVid: "bottom 20%",
    };

    // Reuse the function for both desktop and mobile, passing different startValues
    createParagraphAnimations(startValues);
    paragraphAnimation(startValues);
  });
}

queryAnimation();
