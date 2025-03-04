import Cookies from 'js-cookie'

console.clear()
document.addEventListener('DOMContentLoaded', () => {
  initModal()
  initFlipCard()
  initSwitch()
})

function initSwitch() {
  const button = document.querySelector('.M_SwitchTheme')
  const body = document.querySelector('body')

  button.addEventListener('change', () => {
    if (button.checked) {
      Cookies.set('theme', 'dark')
    } else {
      Cookies.remove('theme')
    }
  })

  if (Cookies.get('theme') == 'dark') {
    body.classList.add('dark')
    button.checked = true
  } else {
    body.classList.remove('dark')
  }
}

function initFlipCard() {
  const cards = document.querySelectorAll('.W_FlipCard')

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('animation')
    })
  })
}

function initModal() {
  const modalButton = document.querySelector('.A_PopUpButton')
  const popup = document.querySelector('.O_PopUpContainer')

  modalButton.addEventListener('click', () => {
    popup.classList.add('visible')
  })

  popup.addEventListener('click', () => {
    popup.classList.remove('visible')
  })
}
