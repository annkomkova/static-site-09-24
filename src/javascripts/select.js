import '../index.css'
import Cookies from 'js-cookie'

console.clear()
document.addEventListener('DOMContentLoaded', () => {
  initModal()
  initFlipCard()
  initSwitch()
  initMultiselect()
})

function initMultiselect() {
  let multiselect = document.querySelectorAll('.W_Multiselect')
  let label = document.querySelector('.C_Tags')
  let select = document.querySelector('.M_SelectField')
  let text = label.innerHTML
  select.addEventListener('change', function (element) {
    let selectedOptions = this.selectedOptions
    label.innerHTML = ''
    for (let option of selectedOptions) {
      let button = document.createElement('button')
      button.type = 'button'
      button.classList.add('A_Tag')
      button.textContent = option.value
      button.addEventListener('click', () => {
        option.selected = false
        button.remove()
        if (!select.selectedOptions.length) {
          label.innerHTML = text
        }
      })
      label.append(button)
    }
  })
}

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
