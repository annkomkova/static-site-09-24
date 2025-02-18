/******/ (() => { // webpackBootstrap
//обязательная функция, в корой лежит весь код
document.addEventListener('DOMContentLoaded', function () {
  //тут пишем код
  console.clear();
  // searchHeader()
  // changeHeaderOnClick()
  // askUserName()
  // showCounter()
  showRandomElement();
});

//ищем элемент по селекторам css
function searchHeader() {
  var headerTag = document.querySelector('h1');
  var headerClass = document.querySelector('.header');
  var headerID = document.querySelector('#header');
  console.log(headerTag);
  console.log(headerClass);
  console.log(headerID);
}
function changeHeaderOnClick() {
  var headerClass = document.querySelector('.header');
  headerClass.addEventListener('click', function () {
    if (headerClass.innerHTML == 'Доброе утро') {
      headerClass.innerHTML = 'Добрый день';
    } else if (headerClass.innerHTML == 'Добрый день') {
      headerClass.innerHTML = 'Добрый вечер';
    } else {
      headerClass.innerHTML = 'Доброе утро';
    }
  });
}
function askUserName() {
  var divHello = document.querySelector('.hello');
  var userName = prompt('Как тебя зовут?', 'Иван');
  if (userName == null || userName == '') {
    divHello.innerHTML = "\u041F\u0440\u0438\u0432\u0435\u0442, \u0447\u0435\u043B\u043E\u0432\u0435\u043A-\u0431\u0435\u0437-\u0438\u043C\u0435\u043D\u0438!";
  } else {
    divHello.innerHTML = "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(userName, "!");
  }
}
function showCounter() {
  var cnt = 0;
  var text = document.querySelector('.clickText');
  var button = document.querySelector('.clickButton');
  button.addEventListener('click', function () {
    // cnt = cnt + 1
    // cnt += 1
    cnt++;
    text.innerHTML = "\u0412\u044B \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 ".concat(cnt, " \u0440\u0430\u0437!");
    if (cnt % 10 == 0) {
      text.classList.add('red');
    } else {
      text.classList.remove('red');
    }
  });
}
function showRandomElement() {
  var tipsAndTricks = ['весёлый', 'сонливый', 'грустный', 'собака', 'диван', 'грустная труба', 'весельчак', 'красивый NewBalance-кроссовок', 'пора работать', 'хватит "пора работать"', 'давай ещё', 'четыре'];
  var randomText = document.querySelector('.randomText');
  var randomButton = document.querySelector('.randomButton');
  randomButton.addEventListener('click', function () {
    var index = Math.floor(tipsAndTricks.length * Math.random());
    randomText.innerHTML = "\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0442\u044B ".concat(tipsAndTricks[index]);
  });
}
/******/ })()
;