import Airtable from 'airtable'

const token =
  'pat7rZ3bNn1doX7yx.5c1864ab89ead2380d705b33d09efeb4dfd8b5406efe12872bc65b7f5b750007'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appvK9hZjGiZ9kW4A')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Table 1')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            page: record.fields['Page'],
            image: record.fields['Images'],
            title: record.fields['Title'],
            text: record.fields['Text'],
            url: record.fields['URL']
          })
        })

        resolve(content)
      })
    // update(content)
  })
}

// let content
const container = document.querySelector('.S_Content')

function update(content) {
  const href = window.location.href.split('/').pop().split('.')[0]
  console.log(href)

  setTimeout(() => {
    content.forEach((stroke) => {
      if (href === stroke.page) {
        console.log(stroke.page)
        createContentCard(stroke)
      }
    })
  }, 200)
}

//создает карточку контента на основе переданных данных, таких как изображение, теги, название и описание
function createContentCard(contentItemData) {
  const contentItem = document.createElement('div')
  contentItem.classList.add('W_ContentItem')
  contentItem.href = contentItemData.url

  const contentItemCover = document.createElement('img')
  contentItemCover.classList.add('A_ContentItemCover')
  contentItemCover.src = contentItemData.image

  const contentItemTitle = document.createElement('h2')
  contentItemTitle.classList.add('A_ContentItemTitle')
  contentItemTitle.innerText = contentItemData.title

  contentItem.appendChild(contentItemCover)
  contentItem.appendChild(contentItemTitle)

  const text = contentItemData.text.split('<br>')

  for (let i = 0; i < text.length; i++) {
    const contentItemDescription = document.createElement('div')
    contentItemDescription.classList.add('A_ContentItemDescription')
    contentItemDescription.innerHTML = text[i]

    contentItem.appendChild(contentItemDescription)
  }

  container.appendChild(contentItem)
}

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    // let content = data
    update(data)
  })
})

//comment
