gsap.registerPlugin(ScrollTrigger)

gsap.set('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine', {
    opacity: 0
})

const tl = gsap.timeline({

    scrollTrigger: {
        trigger: ".one ",
        start: "top center",
    }
});

tl
    .to('.one', { opacity: 1, duration: 0.8 });

const tltwo = gsap.timeline({

    scrollTrigger: {
        trigger: ".two",
        start: "top center",
    }
});

tltwo
    .to('.two', { opacity: 1, duration: 0.8 });


const tlthree = gsap.timeline({

    scrollTrigger: {
        trigger: ".three",
        start: "top center",
    }
});

tlthree
    .to('.three', { opacity: 1, duration: 0.8 });

const tlfour = gsap.timeline({

    scrollTrigger: {
        trigger: ".four",
        start: "top center",
    }
});

tlfour
    .to('.four', { opacity: 1, duration: 0.8 });

const tlfive = gsap.timeline({

    scrollTrigger: {
        trigger: ".five",
        start: "top center",
    }
});

tlfive
    .to('.five', { opacity: 1, duration: 0.8 });

const tlsix = gsap.timeline({

    scrollTrigger: {
        trigger: ".six",
        start: "top center",
    }
});

tlsix
    .to('.six', { opacity: 1, duration: 0.8 });

const tlseven = gsap.timeline({

    scrollTrigger: {
        trigger: ".seven",
        start: "top center",
    }
});

tlseven
    .to('.seven', { opacity: 1, duration: 0.8 });

const tleight = gsap.timeline({

    scrollTrigger: {
        trigger: ".eight",
        start: "top center",
    }
});

tleight
    .to('.eight', { opacity: 1, duration: 0.8 });

const tlnine = gsap.timeline({

    scrollTrigger: {
        trigger: ".nine",
        start: "top center",
    }
});

tlnine
    .to('.nine', { opacity: 1, duration: 0.8 });

