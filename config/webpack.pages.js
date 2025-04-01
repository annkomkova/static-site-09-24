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
  createPages('./src/pages/boardgames.html', 'boardgames', ['index']),
  createPages('./src/pages/articles.html', 'articles', ['index', 'swiper']),
  createPages('./src/pages/articles/about-games.html', 'articles/about-games', [
    'index'
  ]),
  createPages(
    './src/pages/boardgames/gloomhaven.html',
    'boardgames/gloomhaven',
    ['index']
  ),
  createPages(
    './src/pages/dictionary/dictionary.html',
    'dictionary/dictionary',
    ['dictionary']
  ),
  createPages('./src/pages/js-basic/js-basic.html', 'js-basic/js-basic', [
    'jsBasic'
  ]),
  createPages('./src/pages/select.html', 'select.html', ['index', 'select'])
]

module.exports = htmlWebpackPlugins
