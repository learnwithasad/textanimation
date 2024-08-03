const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});

tl.to(
  ".top",
  {
    top: "-50%",
  },
  "a"
);

tl.to(
  ".bottom",
  {
    bottom: "-50%",
  },
  "a"
);

tl.to(
  ".t-heading",
  {
    top: "80%",
  },
  "a"
);

tl.to(
  ".b-heading",
  {
    top: "-55%",
  },
  "a"
);

tl.from(
  ".center h1",
  {
    opacity: 0,
    scale: 2,
    y: 200,
  },
  "a"
);

tl.from(
  ".center h2",
  {
    opacity: 0,
    scale: 2,
    y: -200,
  },
  "a"
);

gsap.from(".down", {
  y: -200,
  duration: 1,
  delay: 0.8,
  opacity: 0,
});

gsap.from("#dwi", {
  y: 200,
  duration: 1,
  delay: 0.8,
  opacity: 0,
});
