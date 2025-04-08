import Airtable from 'airtable'

const token =
  'patcGqCbreG5qSY2A.0b380698fd73aa3334742ad01afaf1567eecc93bb8e135fcf1b76d7ba953624b'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appePrphSXY2TX8TD')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('teasers')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Description'],
            tags: record.fields['Tags'],
            image: record.fields['Image'],
            url: record.fields['Url'],
            class: record.fields['Class']
          })
        })

        resolve(content)
      })
  })
}

export { getPostTeasers }
