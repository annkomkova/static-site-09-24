//обязательная функция, в корой лежит весь код
document.addEventListener('DOMContentLoaded', () => {
  //тут пишем код
  console.clear()
  // searchHeader()
  // changeHeaderOnClick()
  // askUserName()
  // showCounter()
  showRandomElement()
})

//ищем элемент по селекторам css
function searchHeader() {
  const headerTag = document.querySelector('h1')
  const headerClass = document.querySelector('.header')
  const headerID = document.querySelector('#header')

  console.log(headerTag)
  console.log(headerClass)
  console.log(headerID)
}

function changeHeaderOnClick() {
  const headerClass = document.querySelector('.header')

  headerClass.addEventListener('click', () => {
    if (headerClass.innerHTML == 'Доброе утро') {
      headerClass.innerHTML = 'Добрый день'
    } else if (headerClass.innerHTML == 'Добрый день') {
      headerClass.innerHTML = 'Добрый вечер'
    } else {
      headerClass.innerHTML = 'Доброе утро'
    }
  })
}

function askUserName() {
  const divHello = document.querySelector('.hello')
  const userName = prompt('Как тебя зовут?', 'Иван')

  if (userName == null || userName == '') {
    divHello.innerHTML = `Привет, человек-без-имени!`
  } else {
    divHello.innerHTML = `Привет, ${userName}!`
  }
}

function showCounter() {
  let cnt = 0
  const text = document.querySelector('.clickText')
  const button = document.querySelector('.clickButton')

  button.addEventListener('click', () => {
    // cnt = cnt + 1
    // cnt += 1
    cnt++
    text.innerHTML = `Вы кликнули ${cnt} раз!`

    if (cnt % 10 == 0) {
      text.classList.add('red')
    } else {
      text.classList.remove('red')
    }
  })
}

function showRandomElement() {
  const tipsAndTricks = [
    'весёлый',
    'сонливый',
    'грустный',
    'собака',
    'диван',
    'грустная труба',
    'весельчак',
    'красивый NewBalance-кроссовок',
    'пора работать',
    'хватит "пора работать"',
    'давай ещё',
    'четыре'
  ]

  const randomText = document.querySelector('.randomText')
  const randomButton = document.querySelector('.randomButton')

  randomButton.addEventListener('click', () => {
    let index = Math.floor(tipsAndTricks.length * Math.random())
    randomText.innerHTML = `Сегодня ты ${tipsAndTricks[index]}`
  })
}
