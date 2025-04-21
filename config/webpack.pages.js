const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, outputPath, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: `${outputPath}/index.html`,
    chunks: [...chunks, 'vendors']
  })
}

const htmlWebpackPlugins = [
  createPages('./src/pages/index.html', '.', ['index', 'dices']),
  createPages('./src/pages/boardgames.html', 'boardgames.html', ['index']),
  createPages('./src/pages/articles.html', 'articles.html', [
    'index',
    'swiper'
  ]),
  createPages(
    './src/pages/articles/about-games.html',
    'articles/about-games.html',
    ['index', 'htmlContent']
  ),
  createPages(
    './src/pages/boardgames/gloomhaven.html',
    'boardgames/gloomhaven.html',
    ['index']
  ),
  createPages(
    './src/pages/dictionary/dictionary.html',
    'dictionary/dictionary.html',
    ['dictionary']
  ),
  createPages('./src/pages/js-basic/js-basic.html', 'js-basic/js-basic.html', [
    'jsBasic'
  ]),
  createPages('./src/pages/select.html', 'select.html', ['index', 'select']),
  createPages('./src/pages/test.html', 'test.html', ['index', 'htmlContent']),
  createPages('./src/pages/test1.html', 'test1.html', ['index', 'htmlContent']),
  createPages('./src/pages/search.html', 'search.html', [
    'index',
    'searchReact'
  ])
]

module.exports = htmlWebpackPlugins
