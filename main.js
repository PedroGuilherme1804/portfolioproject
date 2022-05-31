/* DOM Doc Obj Model > Gets ELEMENTS HTML in OBJECTS */
/* Const do not change VALUE > Var Let Change VALUE */
/* TOGGLE icons close/open Menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* TOGGLE Menu Functions */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* SCROLL changing HEADER shadow */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.add('scroll')
    }
}

/* SWIPER build */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/* SCROLL REVEAL */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services .header, #services .card,
    #functions .header, #functions .swiper,
    #contact .text, #contact .links,
    #footer .brand, footer .social`
    , { interval: 100 }
)

/* ROLL BACK BUTTON */
const backTopButton = document.querySelector('.back-top')
function backTop() {
    if (window.scrollY >= 560) {
        backTopButton.classList.add('show')
    } else {
        backTopButton.classList.remove('show')
    }
}

/* SCROLL EFFECTS ENGINE */
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backTop()
    activeMenuAtCurrentSection()
})

/* ACTIVE SECTION MENU */
const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}