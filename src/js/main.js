const body = document.querySelector('body')
const burgerBtn = document.querySelector('.burger-btn')
const navMobile = document.querySelector('.nav__mobile-container')
const navMobileItems = document.querySelectorAll('.nav__mobile-item')
const headerBtn = document.querySelector('.header__button')
const projectsSection = document.querySelector('.projects')
const projectCards = document.querySelectorAll('.projects__card')
const projectCardOne = document.querySelector('.projects__card-one')
const projectCardTwo = document.querySelector('.projects__card-two')
const projectCardThree = document.querySelector('.projects__card-three')
const projectTexts = document.querySelectorAll('.projects__text')
const projectImgs = document.querySelectorAll('.projects__img')
const contactBtn = document.querySelector('.contact__button')
const contactBtnShadow = document.querySelector('.contact__button-shadow')

const showNavMobile = () => {

    burgerBtn.classList.toggle('is-active')

    if (burgerBtn.classList.contains('is-active')) {
        navMobile.style.display = 'flex'
    } else {
        navMobile.style.display = 'none'
    }

    body.classList.toggle('mobile-menu-open')
}

const closeNavMobile = () => {
    navMobile.style.display = 'none'
    burgerBtn.classList.remove('is-active')
    body.classList.remove('mobile-menu-open')
}

const animateHeaderBtn = () => {
    headerBtn.classList.toggle('header__button--animation')
}

const rotateCard = e => {

    const img = e.target.closest('.projects__img')
    const text = img.nextElementSibling

    img.classList.add('projects__img--rotate')
    text.classList.add('projects__text--rotate')
}

const unrotateCard = () => {

    const texts = projectsSection.querySelectorAll('.projects__text')

    texts.forEach(text => {

        const img = text.previousElementSibling

        if (img.classList.contains('projects__img--rotate')) {

            img.classList.remove('projects__img--rotate')
            text.classList.remove('projects__text--rotate')
        }
    });
}

const clickOutsideImg = e => {

    if (
        e.target.classList.contains('projects__text-description') ||
        e.target.classList.contains('projects__text-title') ||
        e.target.classList.contains('projects__text') ||
        e.target.classList.contains('projects__card') ||
        e.target.classList.contains('projects__cards') ||
        e.target.classList.contains('projects__wrapper') ||
        e.target.classList.contains('projects__title') ||
        e.target.classList.contains('projects')
    ) {
        unrotateCard()
    }
}

const rotateCardScrollSpy = () => {

    if (window.screen.width < 1200) {

        unrotateCard()

        projectCards.forEach(card => {

            if (window.scrollY >= card.offsetTop - 400 && window.scrollY <= card.offsetTop) {

                let img = card.querySelector('.projects__img')
                let text = card.querySelector('.projects__text')

                img.classList.add('projects__img--rotate')
                text.classList.add('projects__text--rotate')

            }
        });
    }
}

const contactBtnShining = () => {
    contactBtnShadow.classList.add('contact__button-shadow--animation')
    setTimeout(() => {
        contactBtnShadow.classList.remove('contact__button-shadow--animation')
    }, 700);
}

burgerBtn.addEventListener('click', showNavMobile)

navMobileItems.forEach(item => item.addEventListener('click', closeNavMobile))

setInterval(animateHeaderBtn, 5000)

// setInterval(() => {
//     projectCardOne.classList.toggle('projects__card--shaking')
// }, 9000);
// setInterval(() => {
//     projectCardTwo.classList.toggle('projects__card--shaking')
// }, 7000);
// setInterval(() => {
//     projectCardThree.classList.toggle('projects__card--shaking')
// }, 11000);

setInterval(contactBtnShining, 7000)

projectImgs.forEach(item => {
    item.addEventListener('click', rotateCard)
})

window.addEventListener('click', clickOutsideImg)

window.addEventListener('scroll', rotateCardScrollSpy)