// header swiper
const heroSwiper = new Swiper('.hero-Swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 0,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// brands swiper
const brandSwiper = new Swiper('.com-Swiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 2,
        },
    }
});

// about swiper
const aboutSwiper = new Swiper('.about-Swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 700,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// team swiper

const teamSwiper = new Swiper('.team-Swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});


// testimonials swiper
const testSwiper = new Swiper('.test-Swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});

// about page swiper
const aboutPageSwiper = new Swiper('.aboutp-Swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 500,
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});



// about page feedback swiper
const feedbackSwiper = new Swiper('.feedback-Swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1200,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// service page swiper
const servicePageSwiper = new Swiper('.serviceCom-Swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});

// navbar menu

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menu.addEventListener('click', () => {
    menu.classList.remove('active');
});


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.services',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
    }
});

tl.to('.service-element', {
    rotation: 360,
    y: 0,
    opacity: 1,
    stagger: 0.5,
});


const options = {
    distance: '200px',
    origin: 'left',
    duration: 500,
};

ScrollReveal().reveal('.section-title h2', {
    ...options,
});

ScrollReveal().reveal('.service-wrapper', {
    ...options,
    origin: 'right',
    duration: 1000,
});

ScrollReveal().reveal('.service-bottom-content', {
    ...options,
});

ScrollReveal().reveal('.process-top', {
    ...options,
    duration: 1000,
});


ScrollReveal().reveal('.process-title', {
    ...options,
});

ScrollReveal().reveal('.process-img', {
    scale: 0.2,
});

ScrollReveal().reveal('.process-box', {
    ...options,
    interval: 300,
});

ScrollReveal().reveal('.process-box3', {
    ...options,
    origin: 'right',
});

ScrollReveal().reveal('.team-title', {
    ...options,
    duration: 700,
});

ScrollReveal().reveal('.team-swiper', {
    ...options,
    origin: 'bottom',
});

ScrollReveal().reveal('.testimonial-title', {
    ...options,
    duration: 700,
});

ScrollReveal().reveal('.client-data', {
    ...options,
    duration: 1200,
});

ScrollReveal().reveal('.client-content', {
    ...options,
    origin: 'right',
    duration: 1200,
});

ScrollReveal().reveal('.testimonial-swiper', {
    ...options,
    origin: 'bottom',
    duration: 1200,
});


let testTl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.why-choose-us',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
    }
});

testTl1.to('.choose-shape', {
    rotation: 360,
    y: 0,
    opacity: 1,
    stagger: 0.5,
});

let testTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.why-choose-us',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
    }
});

testTl2.to('.choose-shape2', {
    rotation: -360,
    y: 0,
    opacity: 1,
    stagger: 0.5,
});