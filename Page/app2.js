const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}})

tl.fromTo('.cover img', {ease: "slow(0.7, 0.7, false)"})