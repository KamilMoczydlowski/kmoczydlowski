const body = document.querySelector('body')
const burgerBtn = document.querySelector('.burger-btn')
const navMobile = document.querySelector('.nav__mobile-container')
const navMobileItems = document.querySelectorAll('.nav__mobile-item')
const headerBtn = document.querySelector('.header__button')
const projectsSection = document.querySelector('.projects')
const projectCards = document.querySelectorAll('.projects__card')
const projectTexts = document.querySelectorAll('.projects__text')
// const projectImgs = document.querySelectorAll('.projects__img')
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

const unrotateCard = () => {

    projectTexts.forEach(text => {

        const img = text.previousElementSibling

        if (img.classList.contains('projects__img--rotate')) {

            img.classList.remove('projects__img--rotate')
            text.classList.remove('projects__text--rotate')
        }
    });
}

const rotateCardScrollSpy = () => {

    if (window.screen.width < 1200) {

        unrotateCard()

        projectCards.forEach(card => {

            if (window.scrollY >= card.offsetTop - 400 && window.scrollY <= card.offsetTop) {

                const img = card.querySelector('.projects__img')
                const text = card.querySelector('.projects__text')

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

setInterval(contactBtnShining, 7000)

window.addEventListener('scroll', rotateCardScrollSpy)