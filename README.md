# 🧱 Static Site Boilerplate

Шаблон для создания статических сайтов с использованием Webpack, SCSS и модульной структуры. В репозитории хранится учебный материал для группы Б23ДЗ09 бакалавриата ["Дизайн и программирование"](https://design.hse.ru/ba/design/programming) Школы Дизайна НИУ ВШЭ.

## 🚀 Возможности

- ⚙️ Webpack для сборки и оптимизации
- 🎨 SCSS с поддержкой переменных и вложенности
- 🧩 Разделение кода на модули
- 🔍 Поддержка ESLint и Prettier
- 🖼️ Подключение изображений и шрифтов
- 🌐 Готовность к деплою на GitHub Pages или Netlify

## 📁 Структура проекта

```
. static-site-09-24/
├── src/
│ ├── fonts/ # Шрифты
│ ├── images/ # Изображения
│ ├── styles/ # SCSS-файлы
│ ├── scripts/ # JavaScript-файлы
│ ├── partials/ # Webpack-partials
│ ├── components/ # React-компоненты
│ ├── index.js # Подключение кода для всего сайта
│ ├── index.css # Подключение всех стилей
│ └── index.html # Главная HTML-страница
├── docs/ # Сборка проекта
├── webpack.common.js # Общие настройки Webpack
├── webpack.dev.js # Настройки для разработки
├── webpack.prod.js # Настройки для продакшена
├── package.json
└── README.md
```

## 🛠 Установка и запуск

### 1. Клонируйте репозиторий:

```bash
git clone https://github.com/annkomkova/static-site-09-24.git
cd static-site-09-24
```

### 2. Установите зависимости:

```bash
yarn
```

### 3. Запустите проект на localhost:

```bash
yarn start
```

## 📦 Скрипты

`yarn start` — запуск локального сервера с горячей перезагрузкой

`yarn build` — сборка проекта для продакшена

`yarn watch` — сборка проекта для разработки

## 📄 Лицензия

Проект распространяется под лицензией MIT.

## 👩‍💻 Автор

[Анна Комкова](https://github.com/annkomkova)
