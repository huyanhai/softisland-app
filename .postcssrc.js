// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    // px转rem
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*', '!border*', '!filter*'],
      selectorBlackList: ['.van-'] // van-的类不转rem
    }
  }
}
