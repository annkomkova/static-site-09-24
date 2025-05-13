import Airtable from 'airtable'

let content
document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data

    update(content)
  })
})

const token =
  'patGPeZ8jw89QLPLb.1bde4f392fc00654a04394c522fac67bc9896a974935bd09a0c3eb38b83be512'

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
            title: record.fields['Title'],
            text: record.fields['Text'],
            image: record.fields['Image'],
            page: record.fields['Page']
          })
        })

        resolve(content)
      })
  })
}

function update(content) {
  const href = window.location.href.split('/').pop().split('.')[0]
  console.log(href)

  setTimeout(() => {
    content.forEach((stroke) => {
      if (href === stroke.page) {
        createContent(stroke)
      }
    }, 200)
  })
}

function createContent(contentItemData) {
  const container = document.querySelector('.S_ArticleContent')

  const contentItemCover = document.createElement('img')
  contentItemCover.classList.add('A_ContentItemCover')
  contentItemCover.src = contentItemData.image

  const contentItemTitle = document.createElement('h3')
  contentItemTitle.classList.add('A_ContentItemTitle')
  contentItemTitle.innerHTML = contentItemData.title

  const contentItemDescription = document.createElement('div')
  contentItemDescription.classList.add('W_ContentItemDescription')
  contentItemDescription.innerHTML = contentItemData.text

  container.appendChild(contentItemCover)
  container.appendChild(contentItemTitle)
  container.appendChild(contentItemDescription)
}
