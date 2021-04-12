const box = document.querySelector('.main-box')

const handleBox = (e) => {
  box.style.left = `${e.clientX -150}px`
  box.style.top = `${e.clientY - 175}px`
}

document.addEventListener('mousemove', (e) => handleBox(e))