/*
 * @Description:
 * @Author: hyh
 * @since: 2019-08-06 22:01:24
 * @lastTime: 2019-08-09 15:27:32
 */
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
      propList: [
        '*',
        '!box-shadow',
        '!filter*',
        '!border-b*',
        '!border-ri*',
        '!border-t*',
        '!border-le*'
      ],
      selectorBlackList: ['.van-', 'cborder'] // van-的类不转rem
    }
  }
}
