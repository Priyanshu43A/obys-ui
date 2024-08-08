const navItems = document.querySelectorAll(".second-part-nav li");
navItems.forEach((navItem) => {
  const underLine = navItem.querySelector(".underline");
  navItem.addEventListener("mouseenter", () => {
    gsap.to(underLine, {
      duration: 0.3,
      x: "0%",
      ease: "power3.inOut",
    });
  });
  navItem.addEventListener("mouseleave", () => {
    const tl = gsap.timeline();
    tl.to(underLine, {
      duration: 0.3,
      transform: "translateX(100%)",
      ease: "power3.inOut",
    });
    tl.to(underLine, {
      duration: 0,
      transform: "translateX(-100%)",
      ease: "power3.inOut",
    });
  });
});

const navBtn = document.querySelector("#landingpage button");

navBtn.addEventListener("mouseenter", () => {
  gsap.to("#blackbg", {
    duration: 0.3,
    y: 0,
    ease: "power3.inOut",
  });
});

navBtn.addEventListener("mouseleave", () => {
  const tl = gsap.timeline();
  tl.to("#blackbg", {
    duration: 0.3,
    y: "-100%",
    ease: "power3.inOut",
  });
  tl.to("#blackbg", {
    duration: 0,
    y: "100%",
    ease: "power3.inOut",
  });
});

const vdoCont = document.querySelector("#vdoCont");

vdoCont.addEventListener("mousemove", (dets) => {
  const tl = gsap.timeline();
  const vdoText = vdoCont.querySelector(".animated-text");
  const rect = vdoCont.getBoundingClientRect();
  const x = dets.clientX - rect.left;
  const y = dets.clientY - rect.top;

  tl.to(vdoText, {
    duration: 0.1,
    x: x,
    y: y,
    opacity: 1,
    ease: "sine.in",
  });
});

vdoCont.addEventListener("mouseleave", (dets) => {
  const tl = gsap.timeline();
  const vdoText = vdoCont.querySelector(".animated-text");

  tl.to(vdoText, {
    duration: 0.1,

    opacity: 0,
    ease: "sine.in",
  });
});
