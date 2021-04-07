const navButton = document.querySelector('.nav-button')
const buttonLine1 = document.querySelector('.button-line-1')
const buttonLine2 = document.querySelector('.button-line-2')
const buttonLine3 = document.querySelector('.button-line-3')
const navOptions = document.querySelector('.nav-options')
let isOpen = false


navButton.addEventListener('click', openCloseNav)

function openCloseNav() {
  if (isOpen == false) {
    navOptions.style.transform = 'translateY(0px)'
    buttonLine1.style.transform = 'translateY(13px) rotatez(45deg)'
    buttonLine2.style.opacity = '0'
    buttonLine3.style.transform = 'translateY(-13px) rotate(-45deg)'
    isOpen = true
  } else {
    navOptions.style.transform = 'translateY(-1000px)'
    buttonLine1.style.transform = 'translateY(0px) rotatez(0deg)'
    buttonLine2.style.opacity = '1'
    buttonLine3.style.transform = 'translateY(0px) rotate(0deg)'
    isOpen = false
  }
}