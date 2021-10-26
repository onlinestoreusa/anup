const modalWrapper = document.getElementById('modal-wrapper')
const close = document.getElementById('x')
const modalCookie = document.getElementById('modal-cookie')
const navMenu = document.querySelector('.nav-menu')
const navClone = navMenu.cloneNode(true);
const mobileMenu = document.querySelector('.mobile-menu')

var cookieAccepted = localStorage.getItem('cookieAccepted');

mobileMenu.appendChild(navClone)

const mobileNav = document.querySelector('.mobile-menu .nav-menu')

function toggleMobileMenu() {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
  }

function openModal() {
    modalWrapper.style.display='block'
}

function closeModal() {
    modalWrapper.style.display='none'
}

function closeModalCookie() {
    modalCookie.style.display='none';
    localStorage.setItem('cookieAccepted', 'true');
}

if (cookieAccepted === 'true') {
modalCookie.style.display='none'
}